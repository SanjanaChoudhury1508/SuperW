import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import QuickLog from "./components/QuickLog";
import Calendar from "./components/Calendar";
import Insights from "./components/Insights";
import { useNavigate } from "react-router-dom";

export default function PeriodDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-3 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm"
      >
        ← Back to Dashboard
      </button>
    <div className="bg-gray-900 text-gray-100 font-body min-h-screen">
      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto">
        {/* Dashboard Section */}
        <section id="dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-2xl card-border glass">
            <ProgressRing dayOfCycle={14} cycleLength={28} />

            <QuickLog />
          </div>

          {/* Right column */}
          <aside className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-2xl card-border glass">
              <div className="text-s text-white">Cycle Overview</div>
              <div className="mt-3 text-lg font-heading">Avg 28d</div>
              <div className="mt-3 text-sm text-gray-300">
                Longest: <strong>32</strong> • Shortest: <strong>25</strong>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-2xl card-border glass">
              <div className="text-s text-white">Today</div>
              <div className="mt-2 text-sm">Mood: <strong>Content</strong></div>
              <div className="mt-2 text-sm">Symptoms: None</div>
            </div>

            <div className="p-4 bg-gray-800 rounded-2xl card-border glass">
              <div className="text-s text-white">Export</div>
              <div className="mt-3">
                <button className="w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition">
                  Export Data
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Calendar + Insights */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Calendar />
          <Insights />
        </section>

        
      </main>

    </div>
    </div>
  );
}
