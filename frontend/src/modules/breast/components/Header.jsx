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
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gray-900 shadow-lg z-40">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500 shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div>
          <div className="text-lg font-semibold text-white">
            Breast Health Tracker & Resources
          </div>

          
        </div>

      </div>

      {/* DATE */}
      <div className="text-sm text-gray-100/60 hidden md:block">
        {currentDate}
      </div>

      {/* NAVIGATION */}
      <nav className="flex items-center gap-6 text-sm">

        <button className="hover:text-pink-400 transition">
          Overview
        </button>

        <button className="hover:text-pink-400 transition">
          Self-Exam
        </button>

        <button className="hover:text-pink-400 transition">
          Calendar
        </button>

      </nav>

    </header>
  );
}