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
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-[#1a1a1f] hover:bg-[#222228] border border-white/[0.07] rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-all duration-200 flex items-center gap-2 w-fit"
      >
        <span className="text-gray-500">←</span> Back to Dashboard
      </button>

      <div className="min-h-screen bg-[#0d0d0f] text-gray-100">

        <Header />

        <main className="pt-20 px-6 pb-16 max-w-7xl mx-auto space-y-5">

          {/* COMMUNITY FEED */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <CommunityFeed />
            <Sidebar />
          </section>

          {/* SUPPORT GROUPS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SupportGroups />
            <CreateGroup />
          </section>

          {/* DIRECT CHAT */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
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