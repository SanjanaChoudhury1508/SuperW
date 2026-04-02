export default function Overview() {
  return (
    <section className="grid md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h2 className="text-xl font-semibold text-white tracking-tight">
          Wellness Overview
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Mood, stress, sleep & mindfulness
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mt-5">
          <Stat title="Mood" value="Calm" accent="text-teal-400" />
          <Stat title="Stress" value="Low" accent="text-emerald-400" />
          <Stat title="Sleep" value="7h 20m" accent="text-sky-400" />
        </div>

      </div>

      <div className="space-y-3">
        <Card title="Mindfulness" value="10 min" />
        <Card title="Journal" value="Gratitude note" />
        <Card title="Reminder" value="9:30 PM" highlight />
      </div>

    </section>
  );
}

function Stat({ title, value, accent }) {
  return (
    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{title}</div>
      <div className={`text-lg font-semibold ${accent}`}>{value}</div>
    </div>
  );
}

function Card({ title, value, highlight }) {
  return (
    <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{title}</div>
      <div className={`text-sm ${highlight ? "text-teal-300 font-medium" : "text-gray-300"}`}>
        {value}
      </div>
    </div>
  );
}