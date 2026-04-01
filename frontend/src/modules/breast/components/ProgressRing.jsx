import { useEffect, useRef } from "react";

export default function ProgressRing({ pct = 0.78 }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const r = 48;
    const circumference = 2 * Math.PI * r;

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = circumference;
      circleRef.current.style.strokeDashoffset = circumference * (1 - pct);
    }
  }, [pct]);

  return (
    <svg
      viewBox="0 0 120 120"
      width="132"
      height="132"
      className="rotate-[-90deg]"
    >
      <defs>
        <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c084a8" />
          <stop offset="100%" stopColor="#f9a8c9" />
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
        stroke="url(#g3)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="0"
        strokeDashoffset="0"
        fill="none"
      />

      {/* Labels */}
      <text
        x="60"
        y="57"
        textAnchor="middle"
        fontSize="17"
        fill="#ffffff"
        fontWeight="600"
        transform="rotate(90 60 60)"
      >
        Good
      </text>

      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.4)"
        transform="rotate(90 60 60)"
      >
        Recent check: 3 mo ago
      </text>
    </svg>
  );
}