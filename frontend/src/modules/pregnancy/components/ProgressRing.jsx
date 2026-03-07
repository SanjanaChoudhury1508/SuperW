import React from "react";

export default function ProgressRing({
  id,
  percentage = 0,
  size = 140,
  labelMain = "",
  labelSub = ""
}) {

  const r = 48;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percentage / 100);

  const svgId = id || `ring-${Math.random().toString(36).slice(2,9)}`;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="-rotate-90"
    >

      <defs>
        <linearGradient id={`${svgId}-grad`} x1="0" x2="1">
          <stop offset="0%" stopColor="#A59CC6" />
          <stop offset="100%" stopColor="#F7C6B6" />
        </linearGradient>
      </defs>

      <circle
        cx="60"
        cy="60"
        r={r}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="12"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={r}
        stroke={`url(#${svgId}-grad)`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
      />

      <text
        x="60"
        y="60"
        textAnchor="middle"
        fontSize="18"
        fill="#f3f4f6"
        className="rotate-90 origin-center"
      >
        {labelMain}
      </text>

      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontSize="11"
        fill="#9ca3af"
        className="rotate-90 origin-center"
      >
        {labelSub}
      </text>

    </svg>
  );
}