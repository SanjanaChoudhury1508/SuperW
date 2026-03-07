export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gray-800 shadow z-40">

      {/* Left section */}
      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700/30 to-pink-500/30 flex items-center justify-center">
          ◯
        </div>

        <div>
          <div className="text-lg font-semibold">
            EasePause
          </div>

          <div className="text-xs text-gray-100/60">
            Menopause guidance & support
          </div>
        </div>

      </div>

      {/* Date */}
      <div className="text-sm text-gray-100/60 hidden md:block">
        {new Date().toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Navigation icons */}
      <div className="flex items-center gap-4 text-lg">

        <span>🏠</span>
        <span>🌡️</span>
        <span>📘</span>

        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm text-white">
          EA
        </div>

      </div>

    </header>
  );
}