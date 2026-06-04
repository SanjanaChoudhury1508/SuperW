export default function SafetyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-500/15 border border-sky-500/25">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L4 7v5c0 5 3.6 9.3 8 10.3C16.4 21.3 20 17 20 12V7L12 3z"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">Personal Safety</div>
          <div className="text-[11px] text-gray-500 leading-tight">& Emergency Tools</div>
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

      {/* Nav */}
      <nav className="flex items-center gap-1">
        {["Overview", "Emergency", "Contacts"].map((item) => (
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