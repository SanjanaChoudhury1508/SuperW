import { useState } from "react";

const quickOptions = [
  { id: "mood", label: "Mood", icon: "😊" },
  { id: "cramp", label: "Cramps", icon: "💢" },
  { id: "flow", label: "Flow", icon: "💧" },
  { id: "energy", label: "Energy", icon: "⚡" },
];

export default function QuickLog() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {quickOptions.map((opt) => {
        const isActive = selected.includes(opt.id);
        return (
          <button
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl border text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-amber-500/20 border-amber-500/40 text-amber-300 scale-105"
                : "bg-[#1a1a1f] border-white/[0.05] text-gray-400 hover:bg-[#222228] hover:text-gray-200 hover:border-white/[0.1]"
            }`}
          >
            <span className="text-lg leading-none mb-1">{opt.icon}</span>
            <span className="text-xs">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}