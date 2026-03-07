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
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20 px-6 pb-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
      >
        ← Back to Dashboard
      </button>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <SafetyHeader />

      <main className="pt-24 px-6 pb-16 max-w-7xl mx-auto space-y-8">
        <SafetyOverview />
        <EmergencyActions />
        <FakeCall />
        <LocationSharing />
        <TrustedContacts />
        <SafetyResources />
      </main>
    </div>
    </div>
  );
}