import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import QuickStats from "./components/QuickStats";
import Workouts from "./components/Workouts";
import Meals from "./components/Meals";
import Insights from "./components/Insights";
import Planner from "./components/Planner";
import Settings from "./components/Settings";
import { useNavigate } from "react-router-dom";

export default function FitnessDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm"
        >
          ← Back to Dashboard
        </button>

        {/* Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-2xl border border-gray-700">

            <div className="flex gap-6 items-start">
              
              <ProgressRing value={420} goal={2000} pct={0.35} />

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-semibold">
                      Today's Summary
                    </h2>

                    <p className="text-sm text-gray-400 mt-1">
                      Workout: Upper Body • Meals: 3
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    Goal: <strong>2000</strong> kcal
                  </div>

                </div>

                <QuickStats />

              </div>

            </div>

            {/* Weekly Activity */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">

              <div className="flex items-center justify-between">

                <div className="text-sm text-gray-400">
                  Weekly Activity
                </div>

                <div className="text-xs text-gray-400">
                  Goal steps: <strong>50k</strong>
                </div>

              </div>

              <div className="mt-3">
                <svg viewBox="0 0 200 60" className="w-full h-14">
                  <polyline
                    fill="none"
                    stroke="#A59CC6"
                    strokeWidth="2"
                    points="0,40 25,30 50,20 75,25 100,18 125,28 150,15 175,22 200,10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                  />
                </svg>
              </div>

            </div>

          </div>

          {/* Right column */}
          <aside className="space-y-4">

            <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700">

              <div className="text-xs text-gray-400">
                Weekly Goal
              </div>

              <div className="mt-3 text-lg font-semibold">
                Build Strength
              </div>

              <div className="mt-3 text-sm text-gray-400">
                4 workouts this week • Progress 60%
              </div>

            </div>

            <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700">

              <div className="text-xs text-gray-400">
                Next Workout
              </div>

              <div className="mt-2 text-sm">
                Upper Body • 45 min • 18:00
              </div>

            </div>

            <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700">

              <div className="text-xs text-gray-400">
                Meal Plan
              </div>

              <div className="mt-2 text-sm">
                Lunch: Grilled chicken salad • 520 kcal
              </div>

            </div>

          </aside>

        </section>

        {/* Workouts & Meals */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2">
            <Workouts />
          </div>

          <div>
            <Meals />
          </div>

        </section>

        {/* Insights & Planner */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2">
            <Insights />
          </div>

          <div>
            <Planner />
          </div>

        </section>

        {/* Settings */}
        <section className="mt-8">
          <Settings />
        </section>

      </main>

    </div>
  );
}