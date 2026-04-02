import React from "react";

export default function Settings() {
  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-5">Settings</h3>

      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Units (kg / km)</span>
          <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-violet-500/40 transition-colors cursor-pointer">
            <option>Metric</option>
            <option>Imperial</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Sync with wearable</span>
          <input type="checkbox" defaultChecked className="w-4 h-4 accent-violet-500 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Data Export (CSV)</span>
          <button className="py-1.5 px-3 rounded-lg bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm hover:bg-[#252530] hover:text-white transition-all duration-150">
            Export
          </button>
        </div>

      </div>

    </div>
  );
}