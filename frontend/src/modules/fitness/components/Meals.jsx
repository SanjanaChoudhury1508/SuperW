import { useEffect, useState } from "react";
import {
  createMeal,
  getMeals,
} from "../../../api/mealApi";

export default function Meals() {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const res = await getMeals();
      setMeals(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!meal) {
      alert("Enter meal name");
      return;
    }

    try {
      await createMeal({
        meal,
        calories,
      });

      alert("Meal saved");

      setMeal("");
      setCalories("");

      fetchMeals();
    } catch (error) {
      console.error(error);
      alert("Failed to save meal");
    }
  };

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl h-full">

      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-white">
          Meals
        </h3>
      </div>

      <p className="text-xs text-gray-500 mb-5">
        Meal Tracker
      </p>

      <div className="space-y-3 mb-5">

        <input
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          placeholder="Meal Name"
          className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white"
        />

        <input
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
          type="number"
          className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white"
        />

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 rounded-lg text-white"
        >
          Save Meal
        </button>

      </div>

      <div className="space-y-3">
        {meals.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl"
          >
            <div className="text-sm font-medium text-white">
              {item.meal}
            </div>

            <div className="text-xs text-gray-500 mt-1">
              {item.calories || 0} kcal
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}