import { useState } from "react";

const quickOptions = [
  { id: "mood", label: "Mood", icon: "😊", color: "from-purple-500 to-pink-400" },
  { id: "cramp", label: "Cramps", icon: "💢", color: "from-pink-400 to-rose-500" },
  { id: "flow", label: "Flow", icon: "💧", color: "from-sky-400 to-purple-400" },
  { id: "energy", label: "Energy", icon: "⚡", color: "from-rose-400 to-pink-500" },
];

export default function QuickLog() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="glass card-border rounded-2xl p-4 flex justify-between items-center overflow-x-auto gap-3">

      {quickOptions.map((opt) => {
        const isActive = selected.includes(opt.id);

        return (
          <button
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={`flex flex-col items-center justify-center w-20 min-w-[5rem] h-20 rounded-xl border transition-all duration-200 ${
              isActive
                ? `bg-gradient-to-br ${opt.color} text-white scale-105`
                : "bg-gray-800/5 text-gray-300 hover:bg-gray-800/10"
            }`}
          >
            <span className="text-xl">{opt.icon}</span>
            <span className="text-xs font-medium mt-1">{opt.label}</span>
          </button>
        );
      })}

    </div>
  );
}