import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* Left section */}
      <div className="flex items-center gap-3">

        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/20 border border-violet-500/30">
          <span className="text-xs font-semibold text-violet-300">FF</span>
        </div>

        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            Fitness + Nutrition
          </div>
          <div className="text-[11px] text-gray-500 leading-tight">Tracking</div>
        </div>

      </div>

      {/* Date */}
      <div className="text-xs text-gray-500 hidden md:block tabular-nums">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-1">

        <button
          title="Overview"
          className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 text-sm"
        >
          ▦
        </button>

        <button
          title="Quick Add"
          className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 text-sm"
        >
          ＋
        </button>

      </nav>

    </header>
  );
}