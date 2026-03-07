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
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
      >
        ← Back to Dashboard
      </button>
    <div className="min-h-screen bg-gray-900 text-gray-100 font-body">
      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto">
        {/* Top overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-charcoal/60 p-6 rounded-2xl card-border glass">
            <div className="flex gap-6 items-start">
              <div className="w-40 h-40 flex items-center justify-center">
                {/* Reusable progress ring */}
                <ProgressRing id="pregCircle" percentage={60} labelMain="Week 24" labelSub="Due: Mar 12, 2026" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-heading">Pregnancy Overview</h2>
                    <p className="text-sm text-offwhite/70 mt-1">Trimester: Second • Baby size: Corn (30 cm)</p>
                  </div>
                  <div className="text-sm text-offwhite/60">Progress: <strong id="pregProgress">60%</strong></div>
                </div>

                <Overview />

                <div className="mt-6">
                  <QuickLog />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl card-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-offwhite/70">Weight Gain</div>
                <div className="text-xs text-offwhite/60">Recommended: 11-16kg</div>
              </div>
              <div className="mt-3">
                {/* mini chart placeholder (SVG) */}
                <svg viewBox="0 0 200 60" className="w-full h-14">
                  <polyline fill="none" stroke="#A59CC6" strokeWidth="2" points="0,40 30,35 60,30 90,25 120,20 150,18 180,15 200,12" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column */}
          <aside className="space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-2xl card-border glass">
              <div className="text-xs text-offwhite/60">Trimester</div>
              <div className="mt-3 text-lg font-heading">Second Trimester</div>
              <div className="mt-3 text-sm text-offwhite/70">Week 13 — 27</div>
            </div>

            <div className="p-4 bg-gray-800/50 rounded-2xl card-border glass">
              <div className="text-xs text-offwhite/60">Baby Size</div>
              <div className="mt-2 text-sm">Approx. 30 cm • 0.6 kg</div>
            </div>

            <div className="p-4 bg-gray-800/50 rounded-2xl card-border glass">
              <div className="text-xs text-offwhite/60">Reminders</div>
              <div className="mt-2 text-sm">Glucose test • Prenatal vitamins</div>
            </div>
          </aside>
        </section>

        {/* Growth & kick counter */}
        <section id="growth" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 bg-gray-800/50 rounded-2xl card-border glass">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg">Baby Growth</h3>
              <div className="text-sm text-offwhite/60">Weekly development</div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="p-3 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-offwhite/60">This Week</div>
                <div className="mt-1 text-sm">Builds fat stores • Movement increases</div>
              </div>
              <div className="p-3 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-offwhite/60">Estimated Size</div>
                <div className="mt-1 text-sm">Length: 30cm • Weight: 0.6 kg</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-heading">Nutrition</h4>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-offwhite/60">Calories</div>
                  <div className="mt-1 text-sm">Extra ~300 kcal/day</div>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-offwhite/60">Iron</div>
                  <div className="mt-1 text-sm">Include leafy greens, legumes</div>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-offwhite/60">Folate</div>
                  <div className="mt-1 text-sm">Crucial in early pregnancy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-2xl card-border glass">
            <h3 className="font-heading text-lg">Kick Counter</h3>
            <div className="mt-3 text-sm text-offwhite/60">Start a 2-hour count after meals.</div>
            <KickCounter />
          </div>
        </section>

        {/* Appointments */}
        <section id="appointments" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 bg-gray-800/50 rounded-2xl card-border glass">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg">Appointments</h3>
              <div className="text-sm text-offwhite/60">Upcoming visits</div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="p-3 bg-gray-800/50 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Obstetrician</div>
                  <div className="text-xs text-offwhite/60">Nov 08, 2025 • 10:30</div>
                </div>
                <div className="text-sm text-offwhite/70">Prep: Urine test</div>
              </div>

              <div className="p-3 bg-gray-800/40 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Ultrasound</div>
                  <div className="text-xs text-offwhite/60">Dec 20, 2025 • 09:00</div>
                </div>
                <div className="text-sm text-offwhite/70">Anomaly scan</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-heading">Birth Plan</h4>
              <div className="mt-3 text-sm text-offwhite/60">Preferences: Vaginal birth, epidural optional, immediate skin-to-skin.</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-2xl card-border glass">
            <h3 className="font-heading text-lg">Contraction Timer</h3>
            <div className="mt-3 text-sm text-offwhite/60">Track start and end times for contractions.</div>
            <ContractionTimer />
          </div>
        </section>

        {/* Insights & settings */}
        <section className="mt-8">
          <div className="p-6 bg-gray-800/50 rounded-2xl card-border glass max-w-3xl">
            <h3 className="font-heading text-lg">Resources</h3>
            <div className="mt-3 text-sm text-offwhite/60">Prenatal classes, breastfeeding guide, emergency contacts.</div>
            <ul className="mt-3 text-sm list-disc list-inside text-offwhite/70">
              <li>Prenatal nutrition and exercise</li>
              <li>Signs of preterm labor</li>
              <li>Hospital bag checklist</li>
            </ul>

            <div className="mt-6">
              <h4 className="font-heading text-sm">Settings</h4>
              <Settings />
              <Insights />
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="text-xs text-offwhite/50 bg-charcoal/50 px-4 py-2 rounded-lg pointer-events-auto">BloomCare © 2025</div>
      </footer>
    </div>
    </div>
  );
}
