'use client';
import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  Position,
  MarkerType,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Zap, Activity, LayoutGrid, Link2 } from 'lucide-react';
import Link from 'next/link';
import { methods } from '../data';

// Derived from tailwind config wiki theme tokens
const theme = {
  bg: '#0A0A0A',
  surface: '#111113',
  border: '#2A2A2E',
  borderSubtle: '#1F1F23',
  textSecondary: '#8B8B8E',
  textTertiary: '#5C5C5F',
};

const methodMeta: Record<string, { icon: typeof Zap; color: string; bg: string; border: string }> = {
  bolt: { icon: Zap, color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.3)' },
  surge: { icon: Activity, color: '#22C55E', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.3)' },
  grid: { icon: LayoutGrid, color: '#A855F7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.3)' },
  fuse: { icon: Link2, color: '#4C8BF5', bg: 'rgba(76,139,245,0.08)', border: 'rgba(76,139,245,0.3)' },
};

function MethodNode({ data }: { data: { id: string; name: string; fullName: string; duration: string } }) {
  const meta = methodMeta[data.id];
  const Icon = meta.icon;

  return (
    <Link href={`/wiki/${data.id}`} className="block">
      <div
        className="group relative px-6 py-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        style={{
          background: meta.bg,
          borderColor: meta.border,
          minWidth: 220,
        }}
      >
        <Handle type="target" position={Position.Top} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle type="target" position={Position.Left} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle type="source" position={Position.Right} className="!bg-transparent !border-none !w-0 !h-0" />

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${meta.color}15` }}>
            <Icon size={18} style={{ color: meta.color }} />
          </div>
          <div>
            <div className="font-heading font-bold text-sm" style={{ color: meta.color }}>
              {data.name}
            </div>
            <div className="font-mono text-[10px]" style={{ color: theme.textSecondary }}>{data.duration}</div>
          </div>
        </div>
        <div className="text-xs font-heading leading-relaxed" style={{ color: theme.textSecondary }}>{data.fullName}</div>
      </div>
    </Link>
  );
}

const nodeTypes = { method: MethodNode };

const edgeDefaults = {
  labelStyle: { fill: theme.textTertiary, fontSize: 10, fontFamily: 'var(--font-mono)' },
  labelBgStyle: { fill: theme.bg, fillOpacity: 0.9 },
  labelBgPadding: [6, 4] as [number, number],
  labelBgBorderRadius: 4,
  style: { stroke: theme.border, strokeWidth: 1.5 },
  markerEnd: { type: MarkerType.ArrowClosed, color: theme.border, width: 16, height: 16 },
  type: 'smoothstep' as const,
};

const dashedEdgeDefaults = {
  ...edgeDefaults,
  style: { ...edgeDefaults.style, strokeDasharray: '6 3' },
};

export default function MethodologyFlow() {
  const nodes: Node[] = useMemo(
    () =>
      methods.map((m, i) => ({
        id: m.id,
        type: 'method',
        position: { x: (i % 2) * 350, y: Math.floor(i / 2) * 180 },
        data: { id: m.id, name: m.name, fullName: m.fullName, duration: m.duration },
      })),
    []
  );

  const edges: Edge[] = useMemo(
    () => [
      { id: 'bolt-surge', source: 'bolt', target: 'surge', label: 'Results feed scaling', ...edgeDefaults },
      { id: 'bolt-grid', source: 'bolt', target: 'grid', label: 'Wins inform TOM', ...edgeDefaults },
      { id: 'grid-surge', source: 'grid', target: 'surge', label: 'Design informs scale', ...edgeDefaults },
      { id: 'grid-fuse', source: 'grid', target: 'fuse', label: '10-block architecture', ...edgeDefaults },
      { id: 'bolt-fuse', source: 'bolt', target: 'fuse', label: 'Rapid diagnostics', ...dashedEdgeDefaults },
      { id: 'surge-fuse', source: 'surge', target: 'fuse', label: 'Wave model powers PMI', ...dashedEdgeDefaults },
    ],
    []
  );

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 100);
  }, []);

  return (
    <div
      className="w-full h-[420px] rounded-xl border border-wiki-border bg-wiki-surface overflow-hidden"
      aria-label="Methodology relationship diagram showing how BOLT, SURGE, GRID, and FUSE connect to each other"
      role="img"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        fitView
        minZoom={0.5}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
        className="wiki-flow"
      >
        <Background color={theme.borderSubtle} gap={24} size={1} />
        <Controls
          showInteractive={false}
          className="!bg-wiki-surface !border-wiki-border !rounded-lg [&>button]:!bg-wiki-surface [&>button]:!border-wiki-border [&>button]:!text-wiki-text-secondary [&>button:hover]:!bg-wiki-surface-2"
        />
      </ReactFlow>
    </div>
  );
}
