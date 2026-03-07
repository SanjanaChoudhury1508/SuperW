import { useEffect, useRef } from "react";

export default function ProgressRing({ pct = 0.78 }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const r = 48;
    const circumference = 2 * Math.PI * r;

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = circumference;
      circleRef.current.style.strokeDashoffset =
        circumference * (1 - pct);
    }
  }, [pct]);

  return (
    <svg
      viewBox="0 0 120 120"
      width="140"
      height="140"
      className="rotate-[-90deg]"
    >
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0%" stopColor="#A59CC6" />
          <stop offset="100%" stopColor="#F7C6B6" />
        </linearGradient>
      </defs>

      {/* background ring */}
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="12"
        fill="none"
      />

      {/* progress ring */}
      <circle
        ref={circleRef}
        cx="60"
        cy="60"
        r="48"
        stroke="url(#g3)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="0"
        strokeDashoffset="0"
        fill="none"
      />

      {/* label */}
      <text
        x="60"
        y="62"
        textAnchor="middle"
        fontSize="18"
        fill="#F2F2F2"
        fontWeight="600"
        transform="rotate(90 60 60)"
      >
        Good
      </text>

      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontSize="7"
        fill="#F2F2F2"
        opacity="0.75"
        transform="rotate(90 60 60)"
      >
        Recent check: 3 mo ago
      </text>

    </svg>
  );
}