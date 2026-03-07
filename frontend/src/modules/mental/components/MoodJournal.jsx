export default function MoodJournal() {
  return (
    <section className="grid md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 bg-gray-800/5 rounded-2xl">

        <h3 className="text-lg font-semibold">
          Mood & Journal
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Card
            title="Today's Reflection"
            value="Felt calm after a short walk and music."
          />

          <Card
            title="Gratitude"
            value="Family support • Good health"
          />
        </div>

      </div>

      <div className="p-6 bg-gray-800/5 rounded-2xl">

        <h3 className="font-semibold">
          Stress Triggers
        </h3>

        <ul className="mt-3 text-sm list-disc list-inside text-gray-300">
          <li>Workload</li>
          <li>Lack of sleep</li>
          <li>Screen time</li>
        </ul>

      </div>

    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="p-4 bg-black/30 rounded-lg">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="mt-2 text-sm text-gray-200">
        {value}
      </div>

    </div>
  );
}