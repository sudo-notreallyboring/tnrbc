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
        className="group relative px-6 py-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        style={{
          background: meta.bg,
          borderColor: meta.border,
          width: 280,
        }}
      >
        <Handle id="top" type="target" position={Position.Top} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle id="bottom" type="source" position={Position.Bottom} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle id="left-out" type="source" position={Position.Left} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle id="left-in" type="target" position={Position.Left} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle id="right-out" type="source" position={Position.Right} className="!bg-transparent !border-none !w-0 !h-0" />
        <Handle id="right-in" type="target" position={Position.Right} className="!bg-transparent !border-none !w-0 !h-0" />

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${meta.color}15` }}>
            <Icon size={18} style={{ color: meta.color }} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm" style={{ color: meta.color }}>
                {data.name}
              </span>
              <span className="font-mono text-[10px]" style={{ color: theme.textSecondary }}>
                {data.duration}
              </span>
            </div>
            <div className="text-xs font-heading leading-snug truncate" style={{ color: theme.textSecondary }}>
              {data.fullName}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const nodeTypes = { method: MethodNode };

const edgeBase = {
  labelStyle: { fill: theme.textTertiary, fontSize: 10, fontFamily: 'var(--font-mono)' },
  labelBgStyle: { fill: theme.bg, fillOpacity: 0.95 },
  labelBgPadding: [8, 4] as [number, number],
  labelBgBorderRadius: 4,
  style: { stroke: theme.border, strokeWidth: 1.5 },
  markerEnd: { type: MarkerType.ArrowClosed, color: theme.border, width: 14, height: 14 },
  type: 'smoothstep' as const,
};

const dashedBase = {
  ...edgeBase,
  style: { ...edgeBase.style, strokeDasharray: '6 3' },
};

// Vertical order: BOLT → GRID → SURGE → FUSE (all arrows flow downward)
const nodeX = 100;
const nodeSpacing = 140;

export default function MethodologyFlow() {
  const nodes: Node[] = useMemo(
    () => [
      { id: 'bolt', type: 'method', position: { x: nodeX, y: 0 }, data: { id: 'bolt', name: 'BOLT', fullName: 'Business Optimization & Lightning Transformation', duration: '90 Days' } },
      { id: 'grid', type: 'method', position: { x: nodeX, y: nodeSpacing }, data: { id: 'grid', name: 'GRID', fullName: 'Govern, Reveal, Invent, Deploy', duration: '90 Days' } },
      { id: 'surge', type: 'method', position: { x: nodeX, y: nodeSpacing * 2 }, data: { id: 'surge', name: 'SURGE', fullName: 'Strategic Unified Rapid Growth Execution', duration: '60 Days' } },
      { id: 'fuse', type: 'method', position: { x: nodeX, y: nodeSpacing * 3 }, data: { id: 'fuse', name: 'FUSE', fullName: 'Fast Unified System Enablement', duration: '10–180 Days' } },
    ],
    []
  );

  const edges: Edge[] = useMemo(
    () => [
      // Adjacent (center — straight down)
      { id: 'bolt-grid', source: 'bolt', sourceHandle: 'bottom', target: 'grid', targetHandle: 'top', label: 'Wins inform TOM', ...edgeBase },
      { id: 'grid-surge', source: 'grid', sourceHandle: 'bottom', target: 'surge', targetHandle: 'top', label: 'Design informs scale', ...edgeBase },
      { id: 'surge-fuse', source: 'surge', sourceHandle: 'bottom', target: 'fuse', targetHandle: 'top', label: 'Wave model powers PMI', ...dashedBase },

      // Skip-1 connections (side routes)
      { id: 'bolt-surge', source: 'bolt', sourceHandle: 'right-out', target: 'surge', targetHandle: 'right-in', label: 'Results feed scaling', ...edgeBase },
      { id: 'grid-fuse', source: 'grid', sourceHandle: 'left-out', target: 'fuse', targetHandle: 'left-in', label: '10-block architecture', ...edgeBase },

      // Skip-2 connection (far side)
      { id: 'bolt-fuse', source: 'bolt', sourceHandle: 'left-out', target: 'fuse', targetHandle: 'left-in', label: 'Rapid diagnostics', ...dashedBase },
    ],
    []
  );

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 100);
  }, []);

  return (
    <div
      className="w-full h-[620px] rounded-xl border border-wiki-border bg-wiki-surface overflow-hidden"
      aria-label="Methodology relationship diagram showing how BOLT, SURGE, GRID, and FUSE connect in a vertical flow"
      role="img"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        fitView
        fitViewOptions={{ padding: 0.3 }}
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
