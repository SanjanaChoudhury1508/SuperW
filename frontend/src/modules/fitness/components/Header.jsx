import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gray-800 shadow z-40">
      
      {/* Left section */}
      <div className="flex items-center gap-3">
        
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-800/30 to-pink-500/30">
          <span className="text-sm font-semibold text-pink-300">FF</span>
        </div>

        <div>
          <div className="text-lg font-semibold">Fit & Fuel</div>
          <div className="text-xs text-gray-100/60">
            Fitness + Nutrition Dashboard
          </div>
        </div>

      </div>

      {/* Date */}
      <div className="text-sm text-gray-100/60 hidden md:block">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4">

        <button
          title="Overview"
          className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
        >
          ▦
        </button>

        <button
          title="Quick Add"
          className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
        >
          ＋
        </button>

        <button className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center">
          FI
        </button>

      </nav>

    </header>
  );
}