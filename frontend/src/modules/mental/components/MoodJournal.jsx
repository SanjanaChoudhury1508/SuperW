export default function MoodJournal() {
  const triggers = ["Workload", "Lack of sleep", "Screen time"];

  return (
    <section className="grid md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h3 className="text-base font-semibold text-white mb-5">
          Mood & Journal
        </h3>

        <div className="grid md:grid-cols-2 gap-3">
          <Card
            title="Today's Reflection"
            value="Felt calm after a short walk and music."
            dot="bg-teal-400"
          />
          <Card
            title="Gratitude"
            value="Family support · Good health"
            dot="bg-emerald-400"
          />
        </div>

      </div>

      <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h3 className="text-base font-semibold text-white mb-4">
          Stress Triggers
        </h3>

        <ul className="space-y-2">
          {triggers.map((t, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60 flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

function Card({ title, value, dot }) {
  return (
    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
        <div className="text-xs text-gray-500 uppercase tracking-wider">{title}</div>
      </div>
      <div className="text-sm text-gray-300 leading-relaxed">{value}</div>
    </div>
  );
}