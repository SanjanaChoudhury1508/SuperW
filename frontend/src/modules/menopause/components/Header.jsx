export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* Left section */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" fill="#c084fc" opacity="0.4" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            Menopause Guidance
          </div>
          <div className="text-[11px] text-gray-500 leading-tight">& Support</div>
        </div>
      </div>

      {/* Date */}
      <div className="text-xs text-gray-500 hidden md:block tabular-nums">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-1 text-sm">
        {["Overview", "Symptoms", "Guidance"].map((item) => (
          <button
            key={item}
            className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 text-sm"
          >
            {item}
          </button>
        ))}
      </nav>

    </header>
  );
}