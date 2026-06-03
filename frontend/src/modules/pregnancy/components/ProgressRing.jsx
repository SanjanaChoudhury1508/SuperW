export default function ProgressRing({
  id,
  percentage = 0,
  size = 132,
  labelMain = "",
  labelSub = "",
}) {
  const r = 48;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percentage / 100);
  const svgId = id || `ring-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="-rotate-90"
    >
      <defs>
        <linearGradient id={`${svgId}-grad`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>

      {/* Track */}
      <circle
        cx="60" cy="60" r={r}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="10"
        fill="none"
      />

      {/* Progress */}
      <circle
        cx="60" cy="60" r={r}
        stroke={`url(#${svgId}-grad)`}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
      />

      {/* Labels */}
      <text
        x="60" y="57"
        textAnchor="middle"
        fontSize="17"
        fill="#ffffff"
        fontWeight="600"
        transform="rotate(90 60 60)"
      >
        {labelMain}
      </text>
      <text
        x="60" y="74"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.4)"
        transform="rotate(90 60 60)"
      >
        {labelSub}
      </text>
    </svg>
  );
}