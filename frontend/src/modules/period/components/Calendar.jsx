export default function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Cycle Calendar</h3>
        <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">
          Monthly view
        </span>
      </div>

      {/* Week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((d) => (
          <div key={d} className="text-[11px] text-gray-600 text-center font-medium py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day}
            className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-100 cursor-pointer relative ${
              [].includes(day)
                ? "bg-amber-500 text-white font-medium"
                : "text-gray-400 hover:bg-[#1e1e24] hover:text-white"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

    </div>
  );
}