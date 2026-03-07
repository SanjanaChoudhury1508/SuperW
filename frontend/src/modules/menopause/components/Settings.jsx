export default function Settings() {
  return (
    <section className="max-w-3xl p-6 rounded-2xl bg-gray-800 shadow">

      <h3 className="text-lg font-semibold">
        Settings
      </h3>

      <div className="mt-4 space-y-3 text-sm text-gray-300">

        <div className="flex justify-between items-center">
          <span>Daily symptom reminder</span>

          <select className="bg-gray-700 border border-gray-600 px-2 py-1 rounded">
            <option>Evening</option>
            <option>Morning</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span>Share reports with doctor</span>
          <input type="checkbox" />
        </div>

      </div>

    </section>
  );
}