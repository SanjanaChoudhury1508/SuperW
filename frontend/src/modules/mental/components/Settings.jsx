export default function Settings() {
  return (
    <section className="max-w-3xl p-6 bg-gray-800/5 rounded-2xl">

      <h3 className="font-semibold text-lg">
        Settings
      </h3>

      <div className="mt-4 space-y-4 text-sm">

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Daily mood reminder</span>

          <select className="bg-transparent border border-gray-600 px-2 py-1 rounded text-gray-200">
            <option>Evening</option>
            <option>Morning</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Data privacy</span>

          <input type="checkbox" defaultChecked />
        </div>

      </div>

    </section>
  );
}