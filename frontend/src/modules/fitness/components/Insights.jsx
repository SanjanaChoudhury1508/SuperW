import React from "react";

export default function Insights() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow">

      <h3 className="text-lg font-semibold">
        Insights
      </h3>

      <div className="mt-4 text-sm text-gray-100/60">
        Trends in weight, calories, macros, and workout intensity.
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">
            Weight
          </div>

          <div className="mt-2 text-sm">
            72.4 kg • -0.6kg last week
          </div>
        </div>

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">
            Macro Balance
          </div>

          <div className="mt-2 text-sm">
            Carbs 45% • Protein 30% • Fat 25%
          </div>
        </div>

      </div>

    </div>
  );
}