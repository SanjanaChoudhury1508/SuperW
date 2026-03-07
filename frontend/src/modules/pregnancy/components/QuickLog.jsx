import React from "react";

export default function QuickLog() {

  const handleClick = (sym) => {
    alert(`Logged: ${sym}`);
  };

  return (
    <div>

      <div className="text-sm text-gray-100/60 mb-2">
        Quick Log
      </div>

      <div className="flex gap-3 items-center">

        <button
          onClick={() => handleClick("Kick")}
          className="px-4 py-2 bg-gray-800/40 rounded-lg border border-white/10 hover:scale-105 transition"
        >
          Kick
        </button>

        <button
          onClick={() => handleClick("Contraction")}
          className="px-4 py-2 bg-gray-800/40 rounded-lg border border-white/10 hover:scale-105 transition"
        >
          Contraction
        </button>

        <button
          onClick={() => handleClick("Water Intake")}
          className="px-4 py-2 bg-gray-800/40 rounded-lg border border-white/10 hover:scale-105 transition"
        >
          Water
        </button>

        <button
          onClick={() => handleClick("Note")}
          className="px-4 py-2 bg-gray-800/40 rounded-lg border border-white/10 hover:scale-105 transition"
        >
          Note
        </button>

      </div>

    </div>
  );
}
