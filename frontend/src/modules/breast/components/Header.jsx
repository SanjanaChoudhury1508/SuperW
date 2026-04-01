import { useEffect, useState } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatted = new Date().toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formatted);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500/20 border border-pink-500/30">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z"
              stroke="#f472b6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            Breast Health Tracker
          </div>
          
        </div>
      </div>

      {/* DATE */}
      <div className="text-xs text-gray-500 hidden md:block tabular-nums">
        {currentDate}
      </div>

      {/* NAV */}
      <nav className="flex items-center gap-1 text-sm">
        {["Overview", "Self-Exam", "Calendar"].map((item) => (
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