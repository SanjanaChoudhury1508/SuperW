import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 glass card-border z-40">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
          <div className="text-lg font-semibold">
            BloomCare
          </div>

          <div className="text-xs text-gray-100/60">
            Pregnancy support & tracking
          </div>
        </div>

      </div>


      <div className="text-sm text-gray-100/60 hidden md:block">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>


      <nav className="flex items-center gap-4">

        <button className="p-2 rounded-md hover:scale-105 transition-transform">
          Overview
        </button>

        <button className="p-2 rounded-md hover:scale-105 transition-transform">
          Growth
        </button>

        <button className="p-2 rounded-md hover:scale-105 transition-transform">
          Appointments
        </button>

        <button className="p-1 rounded-full bg-gray-800/10">
          <img
            src="https://api.dicebear.com/6.x/initials/svg?seed=BloomUser"
            className="w-8 h-8 rounded-full"
            alt="avatar"
          />
        </button>

      </nav>

    </header>
  );
}