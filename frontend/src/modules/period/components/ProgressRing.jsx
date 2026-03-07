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
      <div className="w-40 h-40 flex items-center justify-center">
        <svg className="ring-svg" viewBox="0 0 120 120" width="140" height="140">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#A59CC6" />
              <stop offset="100%" stopColor="#F7C6B6" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.06)" strokeWidth="12" fill="none"/>
          <circle
            cx="60" cy="60" r="48"
            stroke="url(#g1)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={302}
            strokeDashoffset={offset}
            fill="none"
          />
          <text x="60" y="64" textAnchor="middle" fontSize="20" fill="#F2F2F2" fontWeight="600">
            Day {dayOfCycle}
          </text>
          <text x="60" y="82" textAnchor="middle" fontSize="12" fill="#F2F2F2" opacity="0.75">
            of {cycleLength}
          </text>
        </svg>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading">Current Status</h2>
            <p className="text-sm text-offwhite/70 mt-1">Expected Period in {cycleLength - dayOfCycle} days</p>
          </div>
          <div className="text-sm text-offwhite/60">Avg cycle: <strong>{cycleLength}</strong>d</div>
        </div>
      </div>
    </div>
  );
}
