export default function QuickLog() {
  const handleClick = (sym) => {
    alert(`Logged: ${sym}`);
  };

  const items = ["Kick", "Contraction", "Water", "Note"];

  return (
    <div>
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2.5">Quick Log</div>
      <div className="flex gap-2 flex-wrap">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="px-3.5 py-2 rounded-lg text-sm font-medium bg-[#1e1e24] border border-white/[0.08] text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-150"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}