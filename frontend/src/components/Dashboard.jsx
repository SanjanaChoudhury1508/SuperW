// src/components/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useInterests } from "../context/InterestsContext.jsx";
import { FiUser, FiSettings } from "react-icons/fi";

const interestCards = {
  "Period & Fertility Tracking": {
    desc: "Track your cycle, ovulation, and fertility insights.",
    icon: "📅",
  },
  "Pregnancy Support": {
    desc: "Tips and resources to guide your pregnancy journey.",
    icon: "✨",
  },
  "Fitness & Nutrition": {
    desc: "Stay active and eat well with personalized tips.",
    icon: "🔩",
  },
  "Mental Wellness": {
    desc: "Mindfulness, stress relief, and therapy support.",
    icon: "🧘",
  },
  "Breast Health": {
    desc: "Reminders for self-exams and health checks.",
    icon: "❤︎",
  },
  "Menopause Guidance": {
    desc: "Navigate changes with expert advice and support.",
    icon: "🩺",
  },
  "Community & Support": {
    desc: "Join safe spaces and connect with peers.",
    icon: "🤝🏻",
  },
  "Safety Features": {
    desc: "Track safety and access help when needed.",
    icon: "🛡️",
  },
};

export default function Dashboard({ lifeStage, interests }) {
  const { interests: selectedInterests } = useInterests();
  const navigate = useNavigate();

  // map interest titles (exact text) to routes
  const interestToRoute = {
    "Period & Fertility Tracking": "/modules/period",
    "Pregnancy Support": "/modules/pregnancy",
    "Fitness & Nutrition": "/modules/fitness",
    "Mental Wellness": "/modules/mental",
    "Breast Health": "/modules/breast",
    "Menopause Guidance": "/modules/menopause",
    "Community & Support": "/modules/community",
    "Safety Features": "/modules/safety",
  };

  console.log("Selected interests (prop):", interests);
  console.log("Selected interests (context):", selectedInterests);

  return (
    <div className="w-full max-w-6xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-lg">
      {/* Header with Settings + Profile */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Hey there! 👋</h1>
          <p className="text-gray-600 dark:text-gray-100/60">
            Here’s your personalized wellness overview
          </p>
        </div>
     
        <div className="flex gap-3">

  {/* Profile */}
  <button
    onClick={() => navigate("/profile")}
    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
  >
    <FiUser size={20} />
  </button>

  {/* Settings */}
  <button
    onClick={() => navigate("/settings")}
    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
  >
    <FiSettings size={20} />
  </button>

</div>
      </div>

      {/* Top Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-100/60">Active modules</p>
            <h2 className="text-xl font-bold">{selectedInterests.length}</h2>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-100/60">Tracking streak</p>
            <h2 className="text-xl font-bold">12 days</h2>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-100/60">Wellness score</p>
            <h2 className="text-xl font-bold">8.5/10</h2>
          </div>
        </div>
      </div>

      {/* Add More Features Button */}
      <div className="flex justify-end mb-6">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          + Add More Features
        </button>
      </div>

      {/* Life Stage Card */}
      <div className="mb-6 bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-2">🌸 Life Stage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You selected: <span className="font-bold">{lifeStage}</span>
        </p>
      </div>

      {/* Interest Cards */}
      {selectedInterests.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-4">⭐ Your Wellness Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedInterests.map((interest) => (
              <div
                key={interest}
                className="bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2">{interest}</h3>
                  <p className="text-gray-600 dark:text-gray-100/60 text-sm">
                    {interestCards[interest]?.desc ||
                      `Personalized insights and tools for ${interest.toLowerCase()}.`}
                  </p>
                </div>

                {/* Navigate to dedicated module page */}
                <button
                  onClick={() => {
                    const route = interestToRoute[interest];
                    if (route) {
                      navigate(route);
                    } else {
                      // fallback if route not defined yet
                      navigate("/interests");
                    }
                  }}
                  className="mt-4 text-pink-400 hover:text-pink-600 font-medium transition"
                >
                  View More →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
