import React from "react";

export default function Meals() {
  const meals = [
    { label: "Breakfast", text: "Oats + Banana", kcal: "360 kcal", protein: "12g protein" },
    { label: "Lunch", text: "Grilled chicken salad", kcal: "520 kcal", protein: "40g protein" },
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl h-full">

      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-white">Meals</h3>
      </div>
      <p className="text-xs text-gray-500 mb-5">Today's meals & macros</p>

      <div className="space-y-3">
        {meals.map((meal, i) => (
          <div key={i} className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{meal.label}</div>
            <div className="text-sm font-medium text-white">{meal.text}</div>
            <div className="text-xs text-gray-500 mt-1">{meal.kcal} · {meal.protein}</div>
          </div>
        ))}
      </div>

    </div>
  );
}