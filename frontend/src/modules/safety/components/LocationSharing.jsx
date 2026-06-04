export default function LocationSharing() {
  return (
    <section className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Live Location Sharing</h3>
        <span className="text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-md">Active</span>
      </div>

      <div className="h-36 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-center">
        <div className="text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-sky-500/50">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
          <span className="text-xs text-gray-600">Map preview</span>
        </div>
      </div>

    </section>
  );
}