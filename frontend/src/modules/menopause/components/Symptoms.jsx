export default function Symptoms() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 rounded-2xl bg-gray-800 shadow">

        <h3 className="text-lg font-semibold">
          Symptoms & Tracking
        </h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Info title="Most frequent" value="Hot flashes • Night sweats" />
          <Info title="Triggers" value="Caffeine • Stress • Warm rooms" />
        </div>

      </div>

      <div className="p-6 rounded-2xl bg-gray-800 shadow">

        <h3 className="text-lg font-semibold">
          Sleep Support
        </h3>

        <ul className="mt-3 text-sm list-disc list-inside text-gray-300">
          <li>Cooling bedroom</li>
          <li>Evening relaxation</li>
          <li>Limit caffeine</li>
        </ul>

      </div>

    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="p-4 rounded-lg bg-gray-700">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="mt-2 text-sm text-gray-300">
        {value}
      </div>

    </div>
  );
}