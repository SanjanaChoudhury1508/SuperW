export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/[0.06] z-40">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500/20 border border-pink-500/30 text-sm">
          💬
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            Community & Peer Support
          </div>
        </div>
      </div>

      {/* DATE */}
      <div className="text-xs text-gray-500 hidden md:block tabular-nums">
        {new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
      </div>

    </header>
  );
}