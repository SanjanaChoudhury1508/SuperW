// src/App.jsx
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import LifeStage from "./components/LifeStage";
import Interests from "./components/Interests";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// <-- IMPORTANT: import your module page(s) here
import PeriodPage from "./modules/period/PeriodDashboard.jsx";
import FitnessDashboard from "./modules/fitness/FitnessDashboard.jsx";
import BreastDashboard from "./modules/breast/BreastDashboard";
import PregnancyModule from "./modules/pregnancy";
import MindDashboard from "./modules/mental/MindDashboard";
import MenopauseDashboard from "./modules/menopause";
import CommunityDashboard from "./modules/community";
import SafeGuardDashboard from "./modules/safety";

export default function App() {
  const navigate = useNavigate();

  // keep your existing state (components still expect these props)
  const [lifeStage, setLifeStage] = useState("");
  const [interests, setInterests] = useState([]);

  // navigation helpers used as the onNext/onBack callbacks
  const goTo = (path) => navigate(path);

  return (

    <Routes>
      
      {/* Welcome (step 1) */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
            <Welcome onNext={() => goTo("/lifestage")} />
          </div>
        }
      />

      {/* Life stage (step 2) */}
      <Route
        path="/lifestage"
        element={
          <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
            <LifeStage
              onNext={() => goTo("/interests")}
              onBack={() => goTo("/")}
              lifeStage={lifeStage}
              setLifeStage={setLifeStage}
            />
          </div>
        }
      />

      {/* Interests (step 3) */}
      <Route
        path="/interests"
        element={
          <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
            <Interests
              onBack={() => goTo("/lifestage")}
              onComplete={() => goTo("/dashboard")}
              interests={interests}
              setInterests={setInterests}
            />
          </div>
        }
      />

      {/* Dashboard (step 4) */}
      <Route
        path="/dashboard"
        element={
          <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
            <Dashboard lifeStage={lifeStage} interests={interests} />
          </div>
        }
      />

      {/* Profile Section */}
      <Route path="/profile" element={<Profile />} />

      {/* Settings Section */}
      <Route path="/settings" element={<Settings />} />

      {/* Module pages */}
      <Route
        path="/modules/period"
        element={<PeriodPage />}
      />
      <Route path="/modules/fitness" element={<FitnessDashboard />} />
      <Route path="/modules/breast" element={<BreastDashboard />} />
      <Route path="/modules/pregnancy" element={<PregnancyModule />} />
      <Route path="/modules/mental" element={<MindDashboard/>}/>
      <Route path="/modules/menopause" element={<MenopauseDashboard/>}/>
      <Route path="/modules/community" element={<CommunityDashboard/>}/>
      <Route path="/modules/safety" element={<SafeGuardDashboard />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
    
  );
}
