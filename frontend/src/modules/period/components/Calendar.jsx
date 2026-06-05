import { useEffect, useState } from "react";
import { getCycles, createCycle } from "../../../api/cycleApi";

export default function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [periodDays, setPeriodDays] = useState([]);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);

  useEffect(() => {
    fetchCycles();
  }, []);

  const fetchCycles = async () => {
    try {
      const res = await getCycles();

      const highlightedDays = [];

      res.data.forEach((cycle) => {
        if (!cycle.startDate || !cycle.endDate) return;

        const start = new Date(cycle.startDate);
        const end = new Date(cycle.endDate);

        for (
          let d = new Date(start);
          d <= end;
          d.setDate(d.getDate() + 1)
        ) {
          highlightedDays.push(d.getDate());
        }
      });

      setPeriodDays(highlightedDays);
    } catch (error) {
      console.error("Failed to load cycles:", error);
    }
  };

  const handleDayClick = (day) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
    } else {
      setSelectedEnd(day);
    }
  };

  const handleSavePeriod = async () => {
    if (!selectedStart || !selectedEnd) {
      alert("Select start and end dates");
      return;
    }

    try {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();

      const startDate = `${currentYear}-${String(currentMonth).padStart(
        2,
        "0"
      )}-${String(selectedStart).padStart(2, "0")}`;

      const endDate = `${currentYear}-${String(currentMonth).padStart(
        2,
        "0"
      )}-${String(selectedEnd).padStart(2, "0")}`;

      await createCycle({
        startDate,
        endDate,
      });

      alert("Period saved");

      setSelectedStart(null);
      setSelectedEnd(null);

      fetchCycles();
    } catch (error) {
      console.error(error);
      alert("Failed to save period");
    }
  };

  return (
    <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">
          Cycle Calendar
        </h3>

        <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">
          Monthly view
        </span>
      </div>

      {/* Week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((d) => (
          <div
            key={d}
            className="text-[11px] text-gray-600 text-center font-medium py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day}
            onClick={() => handleDayClick(day)}
            className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-100 cursor-pointer relative ${
              periodDays.includes(day)
                ? "bg-amber-500 text-white font-medium"
                : selectedStart === day || selectedEnd === day
                ? "bg-blue-500 text-white font-medium"
                : "text-gray-400 hover:bg-[#1e1e24] hover:text-white"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Selected dates + Save button */}
      {selectedStart && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {selectedEnd
              ? `Selected: ${selectedStart} - ${selectedEnd}`
              : `Start: ${selectedStart}`}
          </span>

          <button
            onClick={handleSavePeriod}
            className="px-3 py-2 rounded-lg bg-amber-500 text-black text-sm font-medium hover:bg-amber-400"
          >
            Save Date
          </button>
        </div>
      )}
    </div>
  );
}