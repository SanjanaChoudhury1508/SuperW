import Header from "./components/Header";
import CommunityFeed from "./components/CommunityFeed";
import Sidebar from "./components/Sidebar";
import SupportGroups from "./components/SupportGroups";
import CreateGroup from "./components/CreateGroup";
import DirectChat from "./components/DirectChat";
import SafetyPrivacy from "./components/SafetyPrivacy";
import SupportResources from "./components/SupportResources";
import { useNavigate } from "react-router-dom";

export default function CommunityDashboard() {
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

        {/* COMMUNITY FEED */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CommunityFeed />
          <Sidebar />
        </section>

        {/* SUPPORT GROUPS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SupportGroups />
          <CreateGroup />
        </section>

        {/* DIRECT CHAT */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DirectChat />
          <SafetyPrivacy />
        </section>

        {/* RESOURCES */}
        <SupportResources />

      </main>
      
    </div>
    </div>
  );
}