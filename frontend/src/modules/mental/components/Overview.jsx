export default function Overview() {
  return (
    <section className="grid md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 rounded-2xl bg-gray-800/5 border border-white/10">

        <h2 className="text-2xl font-semibold">
          Wellness Overview
        </h2>

        <p className="text-gray-300 mt-1">
          Mood, stress, sleep & mindfulness.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <Stat title="Mood" value="😊 Calm" />
          <Stat title="Stress" value="Low" />
          <Stat title="Sleep" value="7h 20m" />
        </div>

      </div>

      <div className="space-y-4">
        <Card title="Mindfulness" value="10 min" />
        <Card title="Journal" value="Gratitude note" />
        <Card title="Reminder" value="9:30 PM" />
      </div>

    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="p-4 bg-black/30 rounded-xl text-center">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="text-lg mt-1 text-gray-200">
        {value}
      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="p-4 bg-gray-800/5 rounded-xl">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="mt-2 text-gray-200">
        {value}
      </div>

    </div>
  );
}