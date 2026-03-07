export default function Resources() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow max-w-3xl">

      <h3 className="text-lg font-semibold">
        Resources
      </h3>

      <div className="mt-3 text-sm text-gray-100/60">
        Educational guides, screening info, support lines.
      </div>

      <ul className="mt-3 text-sm list-disc list-inside text-gray-300">
        <li>How to do a proper self-exam</li>
        <li>Mammogram: what to expect</li>
        <li>Find a clinic near you</li>
      </ul>

      <div className="mt-6">

        <h4 className="text-sm font-semibold">
          Settings
        </h4>

        <div className="mt-3 space-y-3 text-sm text-gray-300">

          <div className="flex items-center justify-between">

            <span>Self-exam reminder</span>

            <select className="bg-gray-700 border border-gray-600 px-2 py-1 rounded text-sm">
              <option>Monthly</option>
              <option>Every 2 months</option>
            </select>

          </div>

          <div className="flex items-center justify-between">

            <span>Share reports</span>

            <input
              type="checkbox"
              className="w-4 h-4 accent-pink-500"
            />

          </div>

        </div>

      </div>

    </div>
  );
}