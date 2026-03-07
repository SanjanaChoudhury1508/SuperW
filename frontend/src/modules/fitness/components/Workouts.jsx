import React from "react";

export default function Workouts() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow">

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Workouts
        </h3>

        <div className="text-sm text-gray-100/60">
          Planned this week
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">

        <div className="p-3 bg-gray-700 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">
              Upper Body
            </div>

            <div className="text-xs text-gray-100/60">
              45 min • Strength
            </div>
          </div>

          <div className="text-sm text-gray-300">
            18:00
          </div>
        </div>

        <div className="p-3 bg-gray-700 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">
              Lower Body
            </div>

            <div className="text-xs text-gray-100/60">
              40 min • Strength
            </div>
          </div>

          <div className="text-sm text-gray-300">
            Tue 07:00
          </div>
        </div>

      </div>

    </div>
  );
}