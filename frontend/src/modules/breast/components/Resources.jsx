export default function Resources() {
  const links = [
    "How to do a proper self-exam",
    "Mammogram: what to expect",
    "Find a clinic near you",
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
        <div>
          <h3 className="text-base font-semibold text-white">Resources</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Educational guides, screening info, support lines
          </p>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {links.map((link, i) => (
          <li key={i}>
            <button className="flex items-center gap-3 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors flex-shrink-0" />
              {link}
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/[0.06] pt-5">

        <h4 className="text-sm font-semibold text-gray-200 mb-4">Settings</h4>

        <div className="space-y-3">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Self-exam reminder</span>
            <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-pink-500/40 transition-colors cursor-pointer">
              <option>Monthly</option>
              <option>Every 2 months</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Share reports</span>
            <input
              type="checkbox"
              className="w-4 h-4 accent-pink-500 cursor-pointer"
            />
          </div>

        </div>

      </div>

    </div>
  );
}