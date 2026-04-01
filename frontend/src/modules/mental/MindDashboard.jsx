import Header from "./components/Header";
import Overview from "./components/Overview";
import MoodJournal from "./components/MoodJournal";
import WellnessTools from "./components/WellnessTools";
import Support from "./components/Support";
import Settings from "./components/Settings";
import { useNavigate } from "react-router-dom";

export default function MindDashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
      >
        ← Back to Dashboard
      </button>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto space-y-8">
        <Overview />
        <MoodJournal />
        <WellnessTools />
        <Support />
        <Settings />
      </main>

      
    </div>
    </div>
  );
}