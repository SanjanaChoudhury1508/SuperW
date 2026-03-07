import React from "react";

function StatCard({ label, value }) {
  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow text-center">
      <div className="text-xs text-gray-100/60">
        {label}
      </div>

      <div className="text-lg font-semibold mt-1">
        {value}
      </div>
    </div>
  );
}

export default function QuickStats() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Steps" value="6,420" />
        <StatCard label="Protein" value="85g" />
        <StatCard label="Water" value="1.8L" />
      </div>

      <div className="mt-6">

        <div className="text-sm text-gray-100/60 mb-2">
          Quick Actions
        </div>

        <div className="flex gap-3 items-center">

          <button className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            Log Meal
          </button>

          <button className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            Start Workout
          </button>

          <button className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            Log Water
          </button>

        </div>

      </div>
    </>
  );
}