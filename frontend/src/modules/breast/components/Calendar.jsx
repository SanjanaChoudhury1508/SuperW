export default function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          Screening Calendar
        </h3>

        <div className="text-sm text-gray-100/60">
          Monthly view
        </div>

      </div>

      <div className="mt-4">

        {/* Week days */}
        <div className="grid grid-cols-7 gap-2 text-xs text-gray-100/60 text-center">

          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>

        </div>

        {/* Calendar days */}
        <div className="mt-3 grid grid-cols-7 gap-2 text-sm">

          {days.map((d) => (
            <div
              key={d}
              className="p-2 rounded-lg min-h-[48px] hover:bg-gray-700 transition relative"
            >
              {d}

              {d === 5 && (
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-pink-400" />
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}