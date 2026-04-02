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
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100">

      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto space-y-6">

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-2 px-4 py-2 bg-[#1a1a1f] hover:bg-[#222228] border border-white/[0.07] rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-all duration-200 flex items-center gap-2 w-fit"
        >
          <span className="text-gray-500">←</span> Back to Dashboard
        </button>

        {/* Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Left column */}
          <div className="md:col-span-2 bg-[#141418] border border-white/[0.06] p-6 rounded-2xl">

            <div className="flex gap-6 items-start">

              <div className="flex-shrink-0">
                <ProgressRing value={420} goal={2000} pct={0.35} />
              </div>

              <div className="flex-1 min-w-0">

                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="text-xl font-semibold text-white tracking-tight">
                      Today's Summary
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Workout: Upper Body · Meals: 3
                    </p>
                  </div>

                  <div className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] rounded-lg px-3 py-2 flex-shrink-0">
                    Goal: <strong className="text-gray-300 font-medium">2000 kcal</strong>
                  </div>
                </div>

                <QuickStats />

              </div>

            </div>

            {/* Weekly Activity */}
            <div className="mt-5 p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-300 font-medium">Weekly Activity</div>
                <div className="text-xs text-gray-500">
                  Goal steps: <strong className="text-gray-400">50k</strong>
                </div>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-12">
                <defs>
                  <linearGradient id="fitnessChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  fill="url(#fitnessChartGrad)"
                  points="0,40 25,30 50,20 75,25 100,18 125,28 150,15 175,22 200,10 200,60 0,60"
                />
                <polyline
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1.5"
                  points="0,40 25,30 50,20 75,25 100,18 125,28 150,15 175,22 200,10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>

          {/* Right column */}
          <aside className="space-y-3">

            <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Weekly Goal</div>
              <div className="text-base font-semibold text-white">Build Strength</div>
              <div className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                4 workouts this week<br />
                <span className="text-violet-400/80">Progress: 60%</span>
              </div>
            </div>

            <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Next Workout</div>
              <div className="text-sm font-medium text-white">Upper Body</div>
              <div className="text-xs text-gray-500 mt-0.5">45 min · 18:00</div>
            </div>

            <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Meal Plan</div>
              <div className="text-sm text-gray-300">Lunch: Grilled chicken salad</div>
              <div className="text-xs text-gray-500 mt-0.5">520 kcal</div>
            </div>

          </aside>

        </section>

        {/* Workouts & Meals */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <Workouts />
          </div>
          <div>
            <Meals />
          </div>
        </section>

        {/* Insights & Planner */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <Insights />
          </div>
          <div>
            <Planner />
          </div>
        </section>

        {/* Settings */}
        <section>
          <Settings />
        </section>

      </main>

    </div>
  );
}