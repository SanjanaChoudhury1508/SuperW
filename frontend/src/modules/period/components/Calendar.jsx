export default function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="glass card-border rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">
        Cycle Calendar
      </h3>

      <div className="grid grid-cols-7 gap-2 text-center">

        {days.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-lg text-sm ${
              [].includes(day)
                ? "bg-rose-500 text-white"
                : "bg-gray-800/5 text-gray-300"
            }`}
          >
            {day}
          </div>
        ))}

      </div>
    </div>
  );
}