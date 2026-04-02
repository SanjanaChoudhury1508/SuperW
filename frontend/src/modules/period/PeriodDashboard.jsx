import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import QuickLog from "./components/QuickLog";
import Calendar from "./components/Calendar";
import Insights from "./components/Insights";
import { useNavigate } from "react-router-dom";

export default function PeriodDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-[#1a1a1f] hover:bg-[#222228] border border-white/[0.07] rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-all duration-200 flex items-center gap-2 w-fit"
      >
        <span className="text-gray-500">←</span> Back to Dashboard
      </button>

      <div className="bg-[#0d0d0f] text-gray-100 min-h-screen">
        <Header />

        <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto space-y-6">

          {/* Dashboard Section */}
          <section id="dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Left column */}
            <div className="md:col-span-2 bg-[#141418] border border-white/[0.06] p-6 rounded-2xl">
              <ProgressRing dayOfCycle={14} cycleLength={28} />
              <div className="mt-5">
                <QuickLog />
              </div>
            </div>

            {/* Right column */}
            <aside className="space-y-3">

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Cycle Overview</div>
                <div className="text-lg font-semibold text-white">Avg 28d</div>
                <div className="mt-2 text-xs text-gray-500">
                  Longest: <strong className="text-gray-300">32</strong> &nbsp;·&nbsp; Shortest: <strong className="text-gray-300">25</strong>
                </div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Today</div>
                <div className="text-sm text-gray-300">Mood: <strong className="text-white font-medium">Content</strong></div>
                <div className="mt-1.5 text-sm text-gray-400">Symptoms: None</div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Export</div>
                <button className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-amber-500/10">
                  Export Data
                </button>
              </div>

            </aside>
          </section>

          {/* Calendar + Insights */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <Calendar />
            </div>
            <Insights />
          </section>

        </main>
      </div>
    </div>
  );
}