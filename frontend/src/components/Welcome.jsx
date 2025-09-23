export default function Welcome({ onNext }) {
  return (
    <div className="max-w-lg w-full bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl">
          🌸
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">Welcome to WellnessHub</h1>
      <p className="text-gray-300 mb-6">
        Your personalized wellness platform that adapts to your unique journey. 
        Let's set up your experience in just a few steps.
      </p>
      <ul className="text-left text-gray-300 mb-6 space-y-2">
        <li>✔️ Choose your life stage</li>
        <li>✔️ Select your wellness interests</li>
        <li>✔️ Get your personalized dashboard</li>
      </ul>
      <button
        onClick={onNext}
        className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg text-white"
      >
        Continue →
      </button>
    </div>
  );
}
