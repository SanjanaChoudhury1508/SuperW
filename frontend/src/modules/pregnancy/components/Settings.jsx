import React from "react";

export default function Settings() {
  return (
    <div className="mt-4 space-y-3 text-sm text-gray-300">

      <div className="flex items-center justify-between">

        <span>
          Reminders
        </span>

        <select className="bg-gray-800 border border-white/10 px-2 py-1 rounded">
          <option>Weekly</option>
          <option>Daily</option>
        </select>

      </div>


      <div className="flex items-center justify-between">

        <span>
          Sync Calendar
        </span>

        <input
          type="checkbox"
          className="w-4 h-4 accent-purple-500"
        />

      </div>

    </div>
  );
}