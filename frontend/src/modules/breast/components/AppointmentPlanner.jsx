export default function AppointmentPlanner() {
  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-white">Appointment Planner</h3>
      </div>

      <p className="text-xs text-gray-500 mb-5">
        Book or track mammograms, GP visits.
      </p>

      <div className="flex-1 space-y-4">

        <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
          <div className="text-xs text-gray-500 mb-1.5">Next available</div>
          <div className="text-sm font-medium text-white">Fri, Dec 5</div>
          <div className="text-xs text-gray-500 mt-0.5">10:30 AM</div>
        </div>

      </div>

      <div className="mt-5">
        <button
          className="w-full py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-pink-500/10"
        >
          Schedule Appointment
        </button>
      </div>

    </div>
  );
}