export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/25 flex items-center justify-center">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2c4.4 0 8 3.6 8 8 0 5-8 12-8 12S4 15 4 10c0-4.4 3.6-8 8-8z"
              stroke="#2dd4bf"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            Mental Wellness
          </div>
          <div className="text-[11px] text-gray-500 leading-tight">& Balance</div>
        </div>
      </div>

      <nav className="flex items-center gap-1 text-sm">
        {["Overview", "Journal", "Tools"].map((item) => (
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