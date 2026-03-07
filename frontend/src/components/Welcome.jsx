export default function Welcome({ onNext }) {
  return (
    <div className="max-w-lg w-full bg-gray-800 p-8 rounded-2xl shadow-lg text-center">

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl">
          🌸
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2 text-white">
        Welcome to WellnessHub
      </h1>

      {/* Description */}
      <p className="text-gray-300 mb-6">
        Your personalized wellness platform that adapts to your unique journey.
        Let's set up your experience in just a few steps.
      </p>

      {/* Steps */}
      <ul className="text-left text-gray-300 mb-6 space-y-2">
        <li>✔️ Choose your life stage</li>
        <li>✔️ Select your wellness interests</li>
        <li>✔️ Get your personalized dashboard</li>
      </ul>

      {/* Button */}
      <button
        onClick={onNext}
        className="bg-pink-500 hover:bg-pink-600 transition px-6 py-2 rounded-lg text-white font-medium"
      >
        Continue →
      </button>

    </div>
  );
}