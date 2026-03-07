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
    <div className="w-40 h-40 flex items-center justify-center">

      <svg
        viewBox="0 0 120 120"
        width="140"
        height="140"
        style={{ transform: "rotate(-90deg)" }}
      >

        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#A59CC6" />
            <stop offset="100%" stopColor="#F7C6B6" />
          </linearGradient>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
          fill="none"
        />

        <circle
          ref={circleRef}
          cx="60"
          cy="60"
          r="48"
          stroke="url(#g2)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />

        <text
          x="60"
          y="62"
          textAnchor="middle"
          fontSize="18"
          fill="#F2F2F2"
          fontWeight="600"
          style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
        >
          {value} kcal
        </text>

        <text
          x="60"
          y="80"
          textAnchor="middle"
          fontSize="12"
          fill="#F2F2F2"
          opacity="0.75"
          style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
        >
          Burned Today
        </text>

      </svg>

    </div>
  );
}