import Header from "./components/Header";
import ProgressRing from "./components/ProgressRing";
import Overview from "./components/Overview";
import QuickLog from "./components/QuickLog";
import KickCounter from "./components/KickCounter";
import ContractionTimer from "./components/ContractionTimer";
import Insights from "./components/Insights";
import Settings from "./components/Settings";
import { useNavigate } from "react-router-dom";

export default function BloomDashboard() {
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

          {/* Top overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="md:col-span-2 bg-[#141418] border border-white/[0.06] p-6 rounded-2xl">
              <div className="flex gap-6 items-start">

                <div className="w-36 h-36 flex-shrink-0 flex items-center justify-center">
                  <ProgressRing id="pregCircle" percentage={60} labelMain="Week 24" labelSub="Due: Mar 12, 2026" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-xl font-semibold text-white tracking-tight">Pregnancy Overview</h2>
                      <p className="text-sm text-gray-500 mt-0.5">Trimester: Second · Baby size: Corn (30 cm)</p>
                    </div>
                    <div className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] rounded-lg px-3 py-2 flex-shrink-0">
                      Progress: <strong id="pregProgress" className="text-gray-300 font-medium">60%</strong>
                    </div>
                  </div>

                  <Overview />

                  <div className="mt-5">
                    <QuickLog />
                  </div>
                </div>
              </div>

              {/* Weight gain chart */}
              <div className="mt-5 p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-300 font-medium">Weight Gain</div>
                  <div className="text-xs text-gray-500">Recommended: 11–16 kg</div>
                </div>
                <svg viewBox="0 0 200 60" className="w-full h-12">
                  <defs>
                    <linearGradient id="wgGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#wgGrad)"
                    points="0,40 30,35 60,30 90,25 120,20 150,18 180,15 200,12 200,60 0,60"
                  />
                  <polyline
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    points="0,40 30,35 60,30 90,25 120,20 150,18 180,15 200,12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-3">
              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Trimester</div>
                <div className="text-base font-semibold text-white">Second Trimester</div>
                <div className="mt-1.5 text-xs text-gray-500">Week 13 — 27</div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Baby Size</div>
                <div className="text-sm text-gray-300">Approx. 30 cm · 0.6 kg</div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Reminders</div>
                <div className="text-sm text-gray-400">Glucose test · Prenatal vitamins</div>
              </div>
            </aside>
          </section>

          {/* Growth & kick counter */}
          <section id="growth" className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-white">Baby Growth</h3>
                <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">Weekly development</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <div className="text-xs text-gray-500 uppercase tracking-wider">This Week</div>
                  </div>
                  <div className="text-sm text-gray-300">Builds fat stores · Movement increases</div>
                </div>
                <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Estimated Size</div>
                  </div>
                  <div className="text-sm text-gray-300">Length: 30 cm · Weight: 0.6 kg</div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/[0.05]">
                <h4 className="text-sm font-semibold text-gray-200 mb-3">Nutrition</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { label: "Calories", value: "Extra ~300 kcal/day" },
                    { label: "Iron", value: "Include leafy greens, legumes" },
                    { label: "Folate", value: "Crucial in early pregnancy" },
                  ].map((n) => (
                    <div key={n.label} className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl hover:border-emerald-500/20 transition-colors duration-200">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{n.label}</div>
                      <div className="text-sm text-gray-300">{n.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <h3 className="text-base font-semibold text-white mb-1">Kick Counter</h3>
              <p className="text-xs text-gray-500 mb-4">Start a 2-hour count after meals.</p>
              <KickCounter />
            </div>
          </section>

          {/* Appointments */}
          <section id="appointments" className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-white">Appointments</h3>
                <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">Upcoming visits</span>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Obstetrician", date: "Nov 08, 2025 · 10:30", note: "Prep: Urine test" },
                  { title: "Ultrasound", date: "Dec 20, 2025 · 09:00", note: "Anomaly scan" },
                ].map((appt) => (
                  <div key={appt.title} className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">{appt.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{appt.date}</div>
                    </div>
                    <div className="text-xs text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex-shrink-0">{appt.note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/[0.05]">
                <h4 className="text-sm font-semibold text-gray-200 mb-2">Birth Plan</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Preferences: Vaginal birth, epidural optional, immediate skin-to-skin.</p>
              </div>
            </div>

            <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">
              <h3 className="text-base font-semibold text-white mb-1">Contraction Timer</h3>
              <p className="text-xs text-gray-500 mb-4">Track start and end times for contractions.</p>
              <ContractionTimer />
            </div>
          </section>

          {/* Resources & settings */}
          <section>
            <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl max-w-3xl">
              <h3 className="text-base font-semibold text-white mb-1">Resources</h3>
              <p className="text-xs text-gray-500 mb-4">Prenatal classes, breastfeeding guide, emergency contacts.</p>

              <ul className="space-y-2 mb-6">
                {["Prenatal nutrition and exercise", "Signs of preterm labor", "Hospital bag checklist"].map((item) => (
                  <li key={item}>
                    <button className="flex items-center gap-2.5 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group text-left">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors flex-shrink-0" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.05] pt-5">
                <h4 className="text-sm font-semibold text-gray-200 mb-4">Settings</h4>
                <Settings />
              </div>

              <div className="mt-5 border-t border-white/[0.05] pt-5">
                <Insights />
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}