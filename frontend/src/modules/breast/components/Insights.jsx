export default function Insights() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3">

      <div className="p-3 bg-gray-700 rounded-lg">
        <div className="text-xs text-gray-100/60">
          Symptom frequency
        </div>

        <div className="mt-2 text-sm text-gray-200">
          Tenderness peaks in luteal phase (if menstruating)
        </div>
      </div>

      <div className="p-3 bg-gray-700 rounded-lg">
        <div className="text-xs text-gray-100/60">
          Appointment adherence
        </div>

        <div className="mt-2 text-sm text-gray-200">
          You kept 4/5 scheduled checks this year
        </div>
      </div>

    </div>
  );
}