export default function Symptoms() {
  const sleepTips = ["Cooling bedroom", "Evening relaxation", "Limit caffeine"];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h3 className="text-base font-semibold text-white mb-5">
          Symptoms & Tracking
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Info title="Most frequent" value="Hot flashes · Night sweats" dot="bg-orange-400" />
          <Info title="Triggers" value="Caffeine · Stress · Warm rooms" dot="bg-yellow-400" />
        </div>

      </div>

      <div className="p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h3 className="text-base font-semibold text-white mb-4">
          Sleep Support
        </h3>

        <ul className="space-y-2">
          {sleepTips.map((tip, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

function Info({ title, value, dot }) {
  return (
    <div className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.05]">
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
        <div className="text-xs text-gray-500 uppercase tracking-wider">{title}</div>
      </div>
      <div className="text-sm text-gray-300 leading-relaxed">{value}</div>
    </div>
  );
}