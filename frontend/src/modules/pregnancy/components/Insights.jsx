export default function Insights() {
  const items = [
    { label: "Weight", value: "72.4 kg · −0.6 kg last week", dot: "bg-emerald-400" },
    { label: "Macro Balance", value: "Carbs 45% · Protein 30% · Fat 25%", dot: "bg-emerald-300" },
  ];

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.label} className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
            <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
          </div>
          <div className="text-sm text-gray-300">{item.value}</div>
        </div>
      ))}
    </div>
  );
}