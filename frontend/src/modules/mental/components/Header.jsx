export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-black/40 backdrop-blur border-b border-white/10 z-40">

      <div className="flex items-center gap-3">

        {/* Round icon */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700/30 to-pink-500/30 flex items-center justify-center">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2c4.4 0 8 3.6 8 8 0 5-8 12-8 12S4 15 4 10c0-4.4 3.6-8 8-8z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        <div>
          <div className="text-lg font-semibold">
            Mental Wellness & Balance
          </div>
        </div>

      </div>

      <nav className="flex items-center gap-4 text-lg">

        <span>🏠</span>
        <span>😊</span>
        <span>🧘</span>

      </nav>

    </header>
  );
}