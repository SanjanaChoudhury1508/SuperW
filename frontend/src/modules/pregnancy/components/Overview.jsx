export default function Overview() {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Next Appointment</div>
        <div className="text-base font-semibold text-white">Nov 08, 2025 · 10:30</div>
      </div>
      <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Kick Count</div>
        <div className="text-base font-semibold text-white">Last: 12 in 2 hrs</div>
      </div>
    </div>
  );
}