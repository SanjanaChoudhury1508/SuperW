export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/25">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z"
              stroke="#34d399"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">BloomCare</div>
          <div className="text-[11px] text-gray-500 leading-tight">Pregnancy support & tracking</div>
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
        {["Overview", "Growth", "Appointments"].map((item) => (
          <button
            key={item}
            className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150 text-sm"
          >
            {item}
          </button>
        ))}
        <div className="ml-2 w-7 h-7 rounded-full overflow-hidden border border-white/[0.1]">
          <img
            src="https://api.dicebear.com/6.x/initials/svg?seed=BloomUser"
            className="w-full h-full"
            alt="avatar"
          />
        </div>
      </nav>

    </header>
  );
}