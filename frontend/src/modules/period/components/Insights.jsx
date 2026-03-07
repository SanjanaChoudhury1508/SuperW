export default function Insights() {
  const insights = [
    { id: 1, title: "Hydration", text: "You’re drinking less water today." },
    { id: 2, title: "Mood Trends", text: "You logged 3 days of low mood this week." },
    { id: 3, title: "Cycle Prediction", text: "Next cycle expected in 22 days." },
  ];

  return (
    <div className="glass card-border rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Insights</h3>
      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-4 rounded-xl bg-gray-800/5 hover:bg-gray-800/10 transition"
          >
            <h4 className="font-medium text-rose">{insight.title}</h4>
            <p className="text-sm text-offwhite/70">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
