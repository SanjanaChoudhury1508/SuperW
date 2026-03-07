import React from "react";

export default function Meals() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow">
      
      <h3 className="text-lg font-semibold">
        Meals
      </h3>

      <div className="mt-4 text-sm text-gray-100/60">
        Today's meals & macros
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">
            Breakfast
          </div>

          <div className="mt-1 text-sm">
            Oats + Banana • 360 kcal • 12g protein
          </div>
        </div>

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">
            Lunch
          </div>

          <div className="mt-1 text-sm">
            Grilled chicken salad • 520 kcal • 40g protein
          </div>
        </div>

      </div>

    </div>
  );
}