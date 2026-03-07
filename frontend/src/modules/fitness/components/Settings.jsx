import React from "react";

export default function Settings() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow max-w-2xl">
      
      <h3 className="text-lg font-semibold">
        Settings
      </h3>

      <div className="mt-4 space-y-3 text-sm text-gray-300">

        <div className="flex items-center justify-between">
          <span>Units (kg/kg/km)</span>

          <select className="bg-gray-700 border border-gray-600 px-2 py-1 rounded">
            <option>Metric</option>
            <option>Imperial</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span>Sync with wearable</span>
          <input type="checkbox" checked readOnly />
        </div>

        <div className="flex items-center justify-between">
          <span>Data Export (CSV)</span>

          <button className="py-1 px-3 rounded bg-gray-700 hover:bg-gray-600 transition">
            Export
          </button>
        </div>

      </div>

    </div>
  );
}
