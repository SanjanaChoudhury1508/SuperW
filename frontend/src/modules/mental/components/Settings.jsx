export default function Settings() {
  return (
    <section className="max-w-3xl p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-5">
        Settings
      </h3>

      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Daily mood reminder</span>
          <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-teal-500/40 transition-colors cursor-pointer">
            <option>Evening</option>
            <option>Morning</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Data privacy</span>
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 accent-teal-500 cursor-pointer"
          />
        </div>

      </div>

    </section>
  );
}