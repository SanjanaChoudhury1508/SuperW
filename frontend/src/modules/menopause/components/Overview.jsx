export default function Overview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h2 className="text-xl font-semibold text-white tracking-tight">
          Menopause Overview
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Hormonal changes, symptoms & lifestyle support
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat label="Hot Flashes" value="Moderate" accent="text-orange-400" />
          <Stat label="Sleep" value="6h 40m" accent="text-purple-400" />
          <Stat label="Mood" value="Stable" accent="text-teal-400" />
        </div>

      </div>

      <aside className="space-y-3">
        <SideCard title="Hormone Therapy" value="Not started" />
        <SideCard title="Bone Health" value="Calcium · Vitamin D" />
        <SideCard title="Next Checkup" value="Jan 12" highlight />
      </aside>

    </section>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.05]">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{label}</div>
      <div className={`text-lg font-semibold ${accent}`}>{value}</div>
    </div>
  );
}

function SideCard({ title, value, highlight }) {
  return (
    <div className="p-4 rounded-2xl bg-[#141418] border border-white/[0.06]">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{title}</div>
      <div className={`text-sm ${highlight ? "text-purple-300 font-medium" : "text-gray-300"}`}>
        {value}
      </div>
    </div>
  );
}