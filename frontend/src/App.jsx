// src/App.jsx
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./components/Welcome";
import Interests from "./components/Interests";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// <-- IMPORTANT: import your module page(s) here
import PeriodPage from "./modules/period/PeriodDashboard.jsx";
import FitnessDashboard from "./modules/fitness/FitnessDashboard.jsx";
import BreastDashboard from "./modules/breast/BreastDashboard";
import MindDashboard from "./modules/mental/MindDashboard";
import SafeGuardDashboard from "./modules/safety";

export default function App() {
  const navigate = useNavigate();

  const [interests, setInterests] = useState(
  JSON.parse(localStorage.getItem("interests")) || []
);

  const goTo = (path) => navigate(path);

  return (

    <Routes>

  {/* Auth */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

  {/* Onboarding */}
  <Route
    path="/"
    element={
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
        <Welcome onNext={() => goTo("/login")} />
      </div>
    }
  />

  <Route
    path="/interests"
    element={
       <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
        <Interests
          onBack={() => goTo("/")}
          onComplete={() => goTo("/dashboard")}
          interests={interests}
          setInterests={setInterests}
        />
      </div>
      </ProtectedRoute>
    }
  />

  {/* Main Dashboard */}
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
        <Dashboard
          interests={interests}
        />
      </div>
    </ProtectedRoute>
  }
/>

  {/* User */}
  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

  {/* Modules */}
  <Route path="/modules/period" element={<ProtectedRoute><PeriodPage /></ProtectedRoute>} />
  <Route path="/modules/fitness" element={<ProtectedRoute><FitnessDashboard /></ProtectedRoute>} />
  <Route path="/modules/breast" element={<ProtectedRoute><BreastDashboard /></ProtectedRoute>} />
  <Route path="/modules/mental" element={<ProtectedRoute><MindDashboard /></ProtectedRoute>} />
  <Route path="/modules/safety" element={<ProtectedRoute><SafeGuardDashboard /></ProtectedRoute>} />

  {/* Fallback */}
  <Route path="*" element={<Navigate to="/" replace />} />

</Routes>
    
  );
}
