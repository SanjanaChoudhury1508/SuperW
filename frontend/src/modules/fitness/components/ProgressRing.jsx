import React, { useEffect, useRef } from "react";

export default function ProgressRing({ value = 420, goal = 2000, pct = 0.35 }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const circumference = 2 * Math.PI * 48;
    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = circumference;
      circleRef.current.style.strokeDashoffset = `${circumference * (1 - pct)}`;
    }
  }, [pct]);

  return (
    <div className="w-36 h-36 flex items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        width="132"
        height="132"
        style={{ transform: "rotate(-90deg)" }}
      >
        <defs>
          <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="10"
          fill="none"
        />

        {/* Progress */}
        <circle
          ref={circleRef}
          cx="60"
          cy="60"
          r="48"
          stroke="url(#g2)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        <text
          x="60"
          y="57"
          textAnchor="middle"
          fontSize="14"
          fill="#ffffff"
          fontWeight="600"
          style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
        >
          {value} kcal
        </text>

        <text
          x="60"
          y="74"
          textAnchor="middle"
          fontSize="7"
          fill="rgba(255,255,255,0.4)"
          style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
        >
          Burned Today
        </text>

      </svg>
    </div>
  );
}