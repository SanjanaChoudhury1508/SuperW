export default function QuickLog() {
  const items = ["Lump", "Pain", "Discharge", "None"];

  return (
    <div className="flex gap-2 items-center flex-wrap">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => {
            console.log("Quick log:", it);
          }}
          title={it}
          className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
            it === "None"
              ? "bg-[#1e1e24] border-white/[0.08] text-gray-300 hover:bg-[#252530] hover:text-white"
              : "bg-[#1e1e24] border-white/[0.08] text-gray-300 hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-300"
          }`}
        >
          {it}
        </button>
      ))}
    </div>
  );
}