import React from "react";

export default function Overview() {
  return (
    <div className="mt-6">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="p-4 bg-gray-800/40 rounded-xl border border-white/10">
          <div className="text-xs text-gray-100/60">
            Next Appointment
          </div>

          <div className="text-lg font-semibold mt-1">
            Nov 08, 2025 • 10:30
          </div>
        </div>

        <div className="p-4 bg-gray-800/40 rounded-xl border border-white/10">
          <div className="text-xs text-gray-100/60">
            Kick Count
          </div>

          <div className="text-lg font-semibold mt-1">
            Last: 12 in 2 hrs
          </div>
        </div>

      </div>
    </div>
  );
}