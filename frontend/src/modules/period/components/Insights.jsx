export default function Insights() {
  const insights = [
    { id: 1, title: "Hydration", text: "You're drinking less water today.", dot: "bg-sky-400" },
    { id: 2, title: "Mood Trends", text: "You logged 3 days of low mood this week.", dot: "bg-amber-400" },
    { id: 3, title: "Cycle Prediction", text: "Next cycle expected in 22 days.", dot: "bg-emerald-400" },
  ];

  return (
    <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">

      <h3 className="text-base font-semibold text-white mb-5">Insights</h3>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.05] hover:border-amber-500/20 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${insight.dot}`} />
              <h4 className="text-sm font-medium text-gray-200">{insight.title}</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{insight.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}