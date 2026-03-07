export default function Overview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 rounded-2xl bg-gray-800 shadow">

        <h2 className="text-2xl font-semibold">
          Menopause Overview
        </h2>

        <p className="text-sm text-gray-100/60 mt-1">
          Hormonal changes, symptoms & lifestyle support.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat label="Hot flashes" value="Moderate" />
          <Stat label="Sleep" value="6h 40m" />
          <Stat label="Mood" value="Stable" />
        </div>

      </div>

      <aside className="space-y-4">
        <SideCard title="Hormone Therapy" value="Not started" />
        <SideCard title="Bone Health" value="Calcium • Vitamin D" />
        <SideCard title="Next Checkup" value="Jan 12" />
      </aside>

    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-gray-700 shadow text-center">

      <div className="text-xs text-gray-100/60">
        {label}
      </div>

      <div className="text-lg font-semibold mt-1">
        {value}
      </div>

    </div>
  );
}

function SideCard({ title, value }) {
  return (
    <div className="p-4 rounded-2xl bg-gray-800 shadow">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="mt-2 text-sm text-gray-300">
        {value}
      </div>

    </div>
  );
}