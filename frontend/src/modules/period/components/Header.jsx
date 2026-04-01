export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 glass card-border z-40">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-800/20 to-pink-500/20">
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" className="text-offwhite"
          >
            <path
              d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-lg font-heading">Cycle Tracking</div>
          
        </div>
      </div>

      {/* Center - Date */}
      <div className="text-sm text-offwhite/60 hidden md:block">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Right - Nav + Avatar */}
      <nav className="flex items-center gap-4">
        <button
          className="nav-btn p-2 rounded-md hover:scale-105 transition-transform"
          title="Dashboard"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" className="text-offwhite"
          >
            <path
              d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-8H3v8z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="nav-btn p-2 rounded-md hover:scale-105 transition-transform"
          title="Calendar"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" className="text-offwhite"
          >
            <rect
              x="3" y="4" width="18" height="18" rx="2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M16 2v4M8 2v4M3 10h18"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          className="nav-btn p-2 rounded-md hover:scale-105 transition-transform"
          title="Insights"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" className="text-offwhite"
          >
            <path
              d="M3 3v18h18"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M7 10v7M12 6v11M17 2v15"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        
      </nav>
    </header>
  );
}
