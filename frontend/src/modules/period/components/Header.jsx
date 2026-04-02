export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-500/15 border border-amber-500/25">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">Cycle Tracking</div>
          <div className="text-[11px] text-gray-500 leading-tight">Period dashboard</div>
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
        {[
          {
            title: "Dashboard",
            path: "M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-8H3v8z",
          },
          {
            title: "Calendar",
            path: null,
            isCalendar: true,
          },
          {
            title: "Insights",
            path: "M3 3v18h18 M7 10v7M12 6v11M17 2v15",
          },
        ].map((item) => (
          <button
            key={item.title}
            className="p-2 rounded-md text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
            title={item.title}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              {item.isCalendar ? (
                <>
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </>
              ) : (
                <path d={item.path} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        ))}
      </nav>

    </header>
  );
}