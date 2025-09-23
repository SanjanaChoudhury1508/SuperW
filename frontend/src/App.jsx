import { useState } from "react";
import Welcome from "./components/Welcome";
import LifeStage from "./components/LifeStage";
import Interests from "./components/Interests";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [step, setStep] = useState(1);
  const [lifeStage, setLifeStage] = useState("");
  const [interests, setInterests] = useState([]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      {step === 1 && <Welcome onNext={nextStep} />}
      {step === 2 && (
        <LifeStage
          onNext={nextStep}
          onBack={prevStep}
          lifeStage={lifeStage}
          setLifeStage={setLifeStage}
        />
      )}
      {step === 3 && (
        <Interests
          onBack={prevStep}
          onComplete={nextStep}
          interests={interests}
          setInterests={setInterests}
        />
      )}
      {step === 4 && (
        <Dashboard
          lifeStage={lifeStage}
          interests={interests}
        />
      )}
    </div>
  );
}
