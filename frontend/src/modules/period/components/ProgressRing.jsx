import { useEffect, useState } from "react";

export default function ProgressRing({ dayOfCycle, cycleLength }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const circumference = 2 * Math.PI * 48;
    const pct = dayOfCycle / cycleLength;
    setOffset(circumference * (1 - pct));
  }, [dayOfCycle, cycleLength]);

  return (
    <div className="flex items-start gap-6">

      {/* Ring */}
      <div className="w-36 h-36 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 120 120" width="132" height="132" className="rotate-[-90deg]">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
          <circle
            cx="60" cy="60" r="48"
            stroke="url(#g1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={302}
            strokeDashoffset={offset}
            fill="none"
          />
          <text x="60" y="57" textAnchor="middle" fontSize="18" fill="#ffffff" fontWeight="600" transform="rotate(90 60 60)">
            Day {dayOfCycle}
          </text>
          <text x="60" y="74" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.4)" transform="rotate(90 60 60)">
            of {cycleLength}
          </text>
        </svg>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 pt-2">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-semibold text-white tracking-tight">Current Status</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Expected period in <span className="text-amber-400 font-medium">{cycleLength - dayOfCycle} days</span>
            </p>
          </div>
          <div className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] rounded-lg px-3 py-2 flex-shrink-0">
            Avg cycle: <strong className="text-gray-300 font-medium">{cycleLength}d</strong>
          </div>
        </div>
      </div>

    </div>
  );
}