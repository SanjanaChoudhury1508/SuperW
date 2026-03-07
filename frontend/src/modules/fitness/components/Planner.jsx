import React from "react";

export default function Planner() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow">

      <h3 className="text-lg font-semibold">
        Planner
      </h3>

      <div className="mt-3 text-sm text-gray-100/60">
        Create a meal or workout for any day.
      </div>

      <div className="mt-3">
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 text-white hover:opacity-90 transition">
          Create Plan
        </button>
      </div>

    </div>
  );
}