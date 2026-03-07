import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import QuickLog from "./components/QuickLog";
import SelfExamGuide from "./components/SelfExamGuide";
import AppointmentPlanner from "./components/AppointmentPlanner";
import Calendar from "./components/Calendar";
import Insights from "./components/Insights";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

export default function BreastDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
      >
        ← Back to Dashboard
      </button>

      {/* rest of module UI */}

    
    <div className="min-h-screen bg-gray-900 text-gray-100">

      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto">

        {/* OVERVIEW */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-lg">

            <div className="flex gap-6 items-start">

              <div className="w-40 h-40 flex items-center justify-center">
                <ProgressRing />
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-semibold">
                      Breast Health Overview
                    </h2>

                    <p className="text-sm text-gray-100/60 mt-1">
                      Self-exams, screenings, symptoms & appointments.
                    </p>
                  </div>

                  <div className="text-sm text-gray-100/60">
                    Next mammogram: <strong id="nextMammo">—</strong>
                  </div>

                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="p-4 bg-gray-700 rounded-xl">
                    <div className="text-xs text-gray-100/60">
                      Last Self-Exam
                    </div>

                    <div className="text-lg font-semibold mt-1">
                      Oct 02, 2025
                    </div>
                  </div>

                  <div className="p-4 bg-gray-700 rounded-xl">
                    <div className="text-xs text-gray-100/60">
                      Symptoms Logged
                    </div>

                    <div className="text-lg font-semibold mt-1">
                      Tenderness • Lump (none)
                    </div>
                  </div>

                </div>

                <div className="mt-6">

                  <div className="text-sm text-gray-100/60 mb-2">
                    Quick Log
                  </div>

                  <QuickLog />

                </div>

              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-700 rounded-xl">

              <div className="flex items-center justify-between">

                <div className="text-sm text-gray-300">
                  Self-exam frequency
                </div>

                <div className="text-xs text-gray-100/60">
                  Recommended: Monthly
                </div>

              </div>

              <div className="mt-3">

                <svg viewBox="0 0 200 60" className="w-full h-14">
                  <polyline
                    fill="none"
                    stroke="#A59CC6"
                    strokeWidth="2"
                    points="0,40 30,30 60,35 90,25 120,28 150,18 180,24 200,20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                  />
                </svg>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-4">

            <div className="p-4 bg-gray-800 rounded-2xl shadow">
              <div className="text-xs text-gray-100/60">Screenings</div>

              <div className="mt-3 text-lg font-semibold">
                Mammogram
              </div>

              <div className="mt-2 text-sm text-gray-100/60">
                Last: Jul 15, 2025 • Next due: Jul 15, 2026
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-2xl shadow">
              <div className="text-xs text-gray-100/60">Reminders</div>

              <div className="mt-2 text-sm">
                Self-exam reminder: <strong>Every month</strong>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-2xl shadow">
              <div className="text-xs text-gray-100/60">Resources</div>

              <div className="mt-2 text-sm">
                Guides • Helplines • Clinics
              </div>
            </div>

          </aside>

        </section>

        {/* SELF EXAM */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 p-6 bg-gray-800 rounded-2xl shadow">

            <SelfExamGuide />

            <div className="mt-6">

              <h4 className="text-sm font-semibold mb-3">
                Symptom Tracker
              </h4>

              <Insights />

            </div>

          </div>

          <div className="p-6 bg-gray-800 rounded-2xl shadow">
            <AppointmentPlanner />
          </div>

        </section>

        {/* CALENDAR */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 p-6 bg-gray-800 rounded-2xl shadow">
            <Calendar />
          </div>

          <div className="p-6 bg-gray-800 rounded-2xl shadow">
            <Insights />
          </div>

        </section>

        {/* RESOURCES */}
        <section className="mt-8">
          <Resources />
        </section>

      </main>

      <Footer />

    </div>
    </div>
  );
}