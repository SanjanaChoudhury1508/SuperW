import React from "react";

export default function Insights() {
  const items = [
    { label: "Weight", value: "72.4 kg · -0.6kg last week", dot: "bg-violet-400" },
    { label: "Macro Balance", value: "Carbs 45% · Protein 30% · Fat 25%", dot: "bg-pink-400" },
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-white">Insights</h3>
      </div>
      <p className="text-xs text-gray-500 mb-5">
        Trends in weight, calories, macros, and workout intensity
      </p>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
              <div className="text-xs text-gray-500">{item.label}</div>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">{item.value}</div>
          </div>
        ))}
      </div>

    </div>
  );
}