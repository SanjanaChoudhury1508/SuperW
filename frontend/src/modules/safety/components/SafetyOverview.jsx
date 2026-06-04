export default function SafetyOverview() {
  return (
    <section className="grid md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
        <h2 className="text-xl font-semibold text-white tracking-tight">Safety Overview</h2>
        <p className="text-sm text-gray-500 mt-0.5">Your current safety status at a glance</p>

        <div className="mt-5 grid sm:grid-cols-3 gap-3">

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Status</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/50" />
              <span className="text-base font-semibold text-green-400">Safe</span>
            </div>
          </div>

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Location Sharing</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-base font-semibold text-white">Enabled</span>
            </div>
          </div>

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Emergency Contacts</div>
            <div className="text-base font-semibold text-white">3 Added</div>
          </div>

        </div>
      </div>

      <div className="p-5 bg-[#141418] border border-sky-500/20 rounded-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <div className="text-xs text-sky-400 uppercase tracking-wider font-medium">Quick Tip</div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Keep your phone charged and location sharing on when traveling alone.
        </p>
      </div>

    </section>
  );
}