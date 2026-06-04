export default function EmergencyActions() {
  return (
    <section className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-5">Emergency Actions</h3>

      <div className="grid sm:grid-cols-3 gap-3">

        {/* SOS — deliberately red, this is a universal emergency convention */}
        <button className="p-6 rounded-xl bg-red-500 hover:bg-red-400 active:scale-[0.98] transition-all duration-150 font-bold text-white text-xl tracking-widest shadow-lg shadow-red-500/20">
          SOS
        </button>

        <button className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.08] text-gray-300 hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-150 text-sm font-medium">
          Call Emergency Services
        </button>

        <button className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.08] text-gray-300 hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-150 text-sm font-medium">
          Alert Trusted Contacts
        </button>

      </div>
    </section>
  );
}