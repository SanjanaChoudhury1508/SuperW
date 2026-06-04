import SafetyHeader from "./components/SafetyHeader";
import SafetyOverview from "./components/SafetyOverview";
import EmergencyActions from "./components/EmergencyActions";
import FakeCall from "./components/FakeCall";
import LocationSharing from "./components/LocationSharing";
import TrustedContacts from "./components/TrustedContacts";
import SafetyResources from "./components/SafetyResources";
import { useNavigate } from "react-router-dom";

export default function SafeGuardDashboard() {
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
        <SafetyHeader />

        <main className="pt-24 px-6 pb-16 max-w-7xl mx-auto space-y-6">
          <SafetyOverview />
          <EmergencyActions />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FakeCall />
            <LocationSharing />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TrustedContacts />
            <SafetyResources />
          </div>
        </main>
      </div>
    </div>
  );
}