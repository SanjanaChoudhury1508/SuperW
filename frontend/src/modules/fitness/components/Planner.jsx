import React from "react";

export default function Planner() {
  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl flex flex-col h-full">

      <h3 className="text-base font-semibold text-white mb-1">Planner</h3>
      <p className="text-xs text-gray-500 mb-5">
        Create a meal or workout for any day.
      </p>

      <div className="flex-1" />

      <button className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-violet-500/10">
        Create Plan
      </button>

    </div>
  );
}