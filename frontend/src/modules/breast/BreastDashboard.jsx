import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import QuickLog from "./components/QuickLog";
import SelfExamGuide from "./components/SelfExamGuide";
import AppointmentPlanner from "./components/AppointmentPlanner";
import Calendar from "./components/Calendar";
import Insights from "./components/Insights";
import Resources from "./components/Resources";

import { useNavigate } from "react-router-dom";

export default function BreastDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-[#1a1a1f] hover:bg-[#222228] border border-white/[0.07] rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-all duration-200 flex items-center gap-2 w-fit"
      >
        <span className="text-gray-500">←</span> Back to Dashboard
      </button>

      <div className="min-h-screen bg-[#0d0d0f] text-gray-100">

        <Header />

        <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto space-y-6">

          {/* OVERVIEW */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* LEFT: Main overview card */}
            <div className="md:col-span-2 bg-[#141418] border border-white/[0.06] p-6 rounded-2xl">

              <div className="flex gap-6 items-start">

                <div className="w-36 h-36 flex-shrink-0 flex items-center justify-center">
                  <ProgressRing />
                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-xl font-semibold text-white tracking-tight">
                        Breast Health Overview
                      </h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Self-exams, screenings, symptoms & appointments
                      </p>
                    </div>

                    <div className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] rounded-lg px-3 py-2 flex-shrink-0">
                      Next mammogram: <strong id="nextMammo" className="text-gray-300 font-medium">—</strong>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Last Self-Exam</div>
                      <div className="text-base font-semibold text-white">Oct 02, 2025</div>
                    </div>

                    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Symptoms Logged</div>
                      <div className="text-base font-semibold text-white">Tenderness · Lump (none)</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2.5">Quick Log</div>
                    <QuickLog />
                  </div>

                </div>
              </div>

              {/* Frequency chart */}
              <div className="mt-5 p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-300 font-medium">Self-exam frequency</div>
                  <div className="text-xs text-gray-500">Recommended: Monthly</div>
                </div>
                <svg viewBox="0 0 200 60" className="w-full h-12">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084a8" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#c084a8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#chartGrad)"
                    points="0,40 30,30 60,35 90,25 120,28 150,18 180,24 200,20 200,60 0,60"
                  />
                  <polyline
                    fill="none"
                    stroke="#c084a8"
                    strokeWidth="1.5"
                    points="0,40 30,30 60,35 90,25 120,28 150,18 180,24 200,20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>

            {/* RIGHT: Sidebar cards */}
            <aside className="space-y-3">

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Screenings</div>
                <div className="text-base font-semibold text-white">Mammogram</div>
                <div className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                  Last: Jul 15, 2025<br />
                  <span className="text-pink-400/80">Next due: Jul 15, 2026</span>
                </div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Reminders</div>
                <div className="text-sm text-gray-300">
                  Self-exam reminder:{" "}
                  <strong className="text-white font-medium">Every month</strong>
                </div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Resources</div>
                <div className="text-sm text-gray-400">Guides · Helplines · Clinics</div>
              </div>

            </aside>

          </section>

          {/* SELF EXAM */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <SelfExamGuide />
              <div className="mt-6 pt-5 border-t border-white/[0.05]">
                <h4 className="text-sm font-semibold text-gray-200 mb-4">Symptom Tracker</h4>
                <Insights />
              </div>
            </div>

            <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <AppointmentPlanner />
            </div>

          </section>

          {/* CALENDAR */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <Calendar />
            </div>

            <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <Insights />
            </div>

          </section>

          {/* RESOURCES */}
          <section>
            <Resources />
          </section>

        </main>

      </div>
    </div>
  );
}