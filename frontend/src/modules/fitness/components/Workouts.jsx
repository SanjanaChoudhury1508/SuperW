import React from "react";

export default function Workouts() {
  const workouts = [
    { name: "Upper Body", detail: "45 min · Strength", time: "18:00", today: true },
    { name: "Lower Body", detail: "40 min · Strength", time: "Tue 07:00", today: false },
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Workouts</h3>
        <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">
          Planned this week
        </span>
      </div>

      <div className="space-y-3">
        {workouts.map((w, i) => (
          <div
            key={i}
            className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-between hover:border-violet-500/20 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-violet-400/60 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">{w.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{w.detail}</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 tabular-nums">{w.time}</div>
          </div>
        ))}
      </div>

    </div>
  );
}