export default function AppointmentPlanner() {
  return (
    <div>

      <h3 className="text-lg font-semibold">
        Appointment Planner
      </h3>

      <div className="mt-3 text-sm text-gray-100/60">
        Book or track mammograms, GP visits.
      </div>

      <div className="mt-4">

        <div className="text-sm text-gray-100/60">
          Next available:
        </div>

        <div className="mt-2 text-sm">
          Fri, Dec 5 • 10:30 AM
        </div>

        <div className="mt-4">

          <button
            className="w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition text-white"
          >
            Schedule Appointment
          </button>

        </div>

      </div>

    </div>
  );
}