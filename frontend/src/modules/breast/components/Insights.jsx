export default function Insights() {
  const items = [
    {
      label: "Symptom frequency",
      value: "Tenderness peaks in luteal phase (if menstruating)",
      dot: "bg-pink-400",
    },
    {
      label: "Appointment adherence",
      value: "You kept 4/5 scheduled checks this year",
      dot: "bg-purple-400",
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
            <div className="text-xs text-gray-500">{item.label}</div>
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">{item.value}</div>
        </div>
      ))}
    </div>
  );
}