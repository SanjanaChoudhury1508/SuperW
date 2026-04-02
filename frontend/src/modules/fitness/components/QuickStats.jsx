import React from "react";

function StatCard({ label, value }) {
  return (
    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl text-center">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{label}</div>
      <div className="text-base font-semibold text-white">{value}</div>
    </div>
  );
}

export default function QuickStats() {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <StatCard label="Steps" value="6,420" />
        <StatCard label="Protein" value="85g" />
        <StatCard label="Water" value="1.8L" />
      </div>

      <div className="mt-5">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2.5">Quick Actions</div>
        <div className="flex gap-2 items-center flex-wrap">
          {["Log Meal", "Start Workout", "Log Water"].map((action) => (
            <button
              key={action}
              className="px-3.5 py-2 rounded-lg text-sm font-medium bg-[#1e1e24] border border-white/[0.08] text-gray-300 hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-150"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}