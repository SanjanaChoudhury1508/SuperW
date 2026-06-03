import { useState, useRef } from "react";

export default function ContractionTimer() {
  const [running, setRunning] = useState(false);
  const [secs, setSecs] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (running) return;
    setRunning(true);
    const startAt = Date.now();
    timerRef.current = setInterval(() => {
      setSecs(Math.floor((Date.now() - startAt) / 1000));
    }, 500);
  };

  const stop = () => {
    if (!running) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRunning(false);
    setSecs(0);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl text-center">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {running ? "Running" : "Ready"}
        </div>
        <div className="text-3xl font-semibold text-white tabular-nums">
          {running ? `${secs}s` : "—"}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={start}
          className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all duration-150 text-[#0a1f12] text-sm font-semibold shadow-lg shadow-emerald-500/10 disabled:opacity-40"
          disabled={running}
        >
          Start
        </button>
        <button
          onClick={stop}
          className="py-2.5 px-4 rounded-xl bg-[#1e1e24] border border-white/[0.08] text-gray-400 hover:text-white text-sm transition-all duration-150"
        >
          Stop
        </button>
      </div>
    </div>
  );
}