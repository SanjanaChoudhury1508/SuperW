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
  return (
    <div className="w-full max-w-6xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-lg">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">Hey there! 👋</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Here’s your personalized wellness overview
      </p>

      {/* Life Stage Card */}
      <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-2">🌸 Life Stage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You selected: <span className="font-bold">{lifeStage}</span>
        </p>
      </div>

      {/* Interest Cards */}
      {interests.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-4">⭐ Your Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">{interestCards[interest]?.icon}</span>
                    {interest}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {interestCards[interest]?.desc}
                  </p>
                </div>
                <button className="mt-4 text-pink-100 hover:text-pink-400 font-medium">
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
