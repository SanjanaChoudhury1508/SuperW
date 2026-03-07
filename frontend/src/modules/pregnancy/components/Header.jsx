import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 glass card-border z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-lavender/20 to-peach/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2c3.866 0 7 3.134 7 7 0 4.418-3.582 8-8 8S3 13.418 3 9c0-3.866 3.134-7 9-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-lg font-heading">BloomCare</div>
          <div className="text-xs text-offwhite/60">Pregnancy support & tracking</div>
        </div>
      </div>

      <div className="text-sm text-offwhite/60 hidden md:block" id="currentDate">
        {/* populated by client script */}
      </div>

      <nav className="flex items-center gap-4">
        <button className="nav-btn p-2 rounded-md hover:scale-105 transition-transform" data-target="overview" title="Overview">Overview</button>
        <button className="nav-btn p-2 rounded-md hover:scale-105 transition-transform" data-target="growth" title="Baby Growth">Growth</button>
        <button className="nav-btn p-2 rounded-md hover:scale-105 transition-transform" data-target="appointments" title="Appointments">Appointments</button>
        <button className="p-1 rounded-full bg-gray-800/6">
          <img src="https://api.dicebear.com/6.x/initials/svg?seed=BloomUser" className="w-8 h-8 rounded-full" alt="avatar" />
        </button>
      </nav>
    </header>
  );
}
