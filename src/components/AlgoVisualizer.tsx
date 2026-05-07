import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GitMerge } from "lucide-react";

const AlgoVisualizer = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 20);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, x: 15, y: 40, label: "S" },
    { id: 1, x: 40, y: 15 },
    { id: 2, x: 40, y: 65 },
    { id: 3, x: 65, y: 15 },
    { id: 4, x: 65, y: 65 },
    { id: 5, x: 85, y: 40, label: "E" },
  ];

  const edges = [
    { from: 0, to: 1, order: 1 },
    { from: 0, to: 2, order: 2 },
    { from: 1, to: 3, order: 4 },
    { from: 2, to: 4, order: 3 },
    { from: 1, to: 2, order: 5 },
    { from: 3, to: 5, order: 7 },
    { from: 4, to: 5, order: 6 },
    { from: 3, to: 4, order: 8 },
  ];

  // BFS visit order
  const visitOrder = [0, 1, 2, 3, 4, 5];

  const getNodeState = (nodeIndex: number) => {
    const visitStep = visitOrder.indexOf(nodeIndex);
    if (visitStep === -1) return "idle";
    const threshold = visitStep * 3;
    if (step >= threshold + 2) return "visited";
    if (step >= threshold) return "current";
    return "idle";
  };

  const getEdgeState = (edgeOrder: number) => {
    const threshold = edgeOrder * 2;
    if (step >= threshold + 1) return "active";
    if (step >= threshold) return "processing";
    return "idle";
  };

  return (
    <Card className="w-full border border-border/60 shadow-sm overflow-hidden bg-background rounded-xl">
      <div className="flex flex-col md:flex-row">

        {/* Left: Competitive Programming */}
        <div className="md:w-2/5 border-b md:border-b-0 md:border-r border-border/50 bg-muted/10 p-6 md:p-8 flex flex-col justify-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-500/20 w-fit">
            <GitMerge className="w-3 h-3" /> Competitive Programmer
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            1200+ Problems Solved
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            ICPC Regional Contestant with expertise in Graph Theory, Dynamic Programming, Greedy Algorithms, and Data Structures.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/40">
              <div className="text-lg font-bold text-foreground">800+</div>
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">Codeforces</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/40">
              <div className="text-lg font-bold text-foreground">100+</div>
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">LeetCode</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/40">
              <div className="text-lg font-bold text-foreground">150+</div>
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">Contests</div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Graphs", "DP", "Trees", "Number Theory", "Greedy"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Graph */}
        <div className="md:w-3/5 p-6 md:p-10 min-h-[280px] md:min-h-[320px] flex items-center justify-center relative overflow-hidden bg-[#fafafa] dark:bg-[#0d1117]">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          <div className="relative z-10 w-full h-full" style={{ minHeight: "220px" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
              {/* Edges */}
              {edges.map((edge, i) => {
                const state = getEdgeState(edge.order);
                const from = nodes[edge.from];
                const to = nodes[edge.to];

                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={state === "active" ? "#3b82f6" : state === "processing" ? "#f59e0b" : "#d1d5db"}
                    strokeWidth={state === "active" ? "0.8" : state === "processing" ? "1" : "0.4"}
                    strokeDasharray={state === "processing" ? "1.5 1.5" : "0"}
                    className="transition-all duration-500"
                    strokeOpacity={state === "idle" ? 0.4 : 1}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const state = getNodeState(node.id);

                return (
                  <g key={node.id}>
                    {/* Glow ring for current node */}
                    {state === "current" && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="5.5"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="0.5"
                        opacity="0.5"
                      >
                        <animate attributeName="r" from="4" to="7" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="1s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="4"
                      fill={state === "current" ? "#f59e0b" : state === "visited" ? "#3b82f6" : "#ffffff"}
                      stroke={state === "current" ? "#f59e0b" : state === "visited" ? "#2563eb" : "#d1d5db"}
                      strokeWidth={state === "idle" ? "0.5" : "0.8"}
                      className="transition-all duration-500"
                    />
                    <text
                      x={node.x}
                      y={node.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="2.8"
                      fontWeight="bold"
                      fontFamily="monospace"
                      fill={state === "idle" ? "#9ca3af" : "#ffffff"}
                      className="transition-all duration-300 select-none"
                    >
                      {node.label || node.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default AlgoVisualizer;
