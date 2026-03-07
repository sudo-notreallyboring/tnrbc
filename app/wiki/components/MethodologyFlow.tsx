'use client';
import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  Position,
  MarkerType,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Zap, Activity, LayoutGrid, Link2 } from 'lucide-react';
import Link from 'next/link';

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
            <div className="font-mono text-[10px] text-[#8B8B8E]">{data.duration}</div>
          </div>
        </div>
        <div className="text-xs text-[#8B8B8E] font-heading leading-relaxed">{data.fullName}</div>
      </div>
    </Link>
  );
}

const nodeTypes = { method: MethodNode };

export default function MethodologyFlow() {
  const nodes: Node[] = useMemo(
    () => [
      {
        id: 'bolt',
        type: 'method',
        position: { x: 0, y: 0 },
        data: { id: 'bolt', name: 'BOLT', fullName: 'Business Optimization & Lightning Transformation', duration: '90 Days' },
      },
      {
        id: 'surge',
        type: 'method',
        position: { x: 350, y: 0 },
        data: { id: 'surge', name: 'SURGE', fullName: 'Strategic Unified Rapid Growth Execution', duration: '60 Days' },
      },
      {
        id: 'grid',
        type: 'method',
        position: { x: 0, y: 180 },
        data: { id: 'grid', name: 'GRID', fullName: 'Governance, Rewire, Instrument, Deploy', duration: '90 Days' },
      },
      {
        id: 'fuse',
        type: 'method',
        position: { x: 350, y: 180 },
        data: { id: 'fuse', name: 'FUSE', fullName: 'Fast Unified System Enablement', duration: '10–180 Days' },
      },
    ],
    []
  );

  const edges: Edge[] = useMemo(
    () => [
      {
        id: 'bolt-surge',
        source: 'bolt',
        target: 'surge',
        label: 'Results feed scaling',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
      {
        id: 'bolt-grid',
        source: 'bolt',
        target: 'grid',
        label: 'Wins inform TOM',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
      {
        id: 'grid-surge',
        source: 'grid',
        target: 'surge',
        label: 'Design informs scale',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
      {
        id: 'grid-fuse',
        source: 'grid',
        target: 'fuse',
        label: '10-block architecture',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
      {
        id: 'bolt-fuse',
        source: 'bolt',
        target: 'fuse',
        label: 'Rapid diagnostics',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5, strokeDasharray: '6 3' },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
      {
        id: 'surge-fuse',
        source: 'surge',
        target: 'fuse',
        label: 'Wave model powers PMI',
        labelStyle: { fill: '#5C5C5F', fontSize: 10, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: '#0A0A0A', fillOpacity: 0.9 },
        labelBgPadding: [6, 4] as [number, number],
        labelBgBorderRadius: 4,
        style: { stroke: '#2A2A2E', strokeWidth: 1.5, strokeDasharray: '6 3' },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#2A2A2E', width: 16, height: 16 },
        type: 'smoothstep',
      },
    ],
    []
  );

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 100);
  }, []);

  return (
    <div className="w-full h-[420px] rounded-xl border border-wiki-border bg-wiki-surface overflow-hidden">
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
        <Background color="#1F1F23" gap={24} size={1} />
        <Controls
          showInteractive={false}
          className="!bg-wiki-surface !border-wiki-border !rounded-lg [&>button]:!bg-wiki-surface [&>button]:!border-wiki-border [&>button]:!text-wiki-text-secondary [&>button:hover]:!bg-wiki-surface-2"
        />
        <MiniMap
          nodeColor={(n) => methodMeta[n.id]?.color ?? '#2A2A2E'}
          maskColor="rgba(10,10,10,0.8)"
          className="!bg-wiki-surface !border-wiki-border !rounded-lg"
        />
      </ReactFlow>
    </div>
  );
}
