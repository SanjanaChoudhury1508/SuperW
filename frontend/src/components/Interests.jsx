const options = [
  "Period & Fertility Tracking",
  "Pregnancy Support",
  "Fitness & Nutrition",
  "Mental Wellness",
  "Breast Health",
  "Menopause Guidance",
  "Community & Support",
  "Safety Features",
];

export default function Step3Interests({ onBack, onComplete, interests, setInterests }) {
  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="max-w-2xl w-full bg-gray-800 dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6">What interests you most?</h2>
      
      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-4">
        {options.map((item) => (
          <button
            key={item}
            onClick={() => toggleInterest(item)}
            className={`p-4 rounded-xl border transition ${
              interests.includes(item)
                ? "border-pink-500 bg-pink-900 text-white"
                : "border-gray-600 bg-gray-700 text-gray-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Selected Interests Display */}
      {interests.length > 0 && (
        <div className="mt-6 bg-gray-700 dark:bg-gray-800 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">You have selected:</h3>
          <ul className="flex flex-wrap gap-2 justify-center">
            {interests.map((interest) => (
              <li
                key={interest}
                className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="text-gray-400">← Back</button>
        <button
          onClick={onComplete}
          disabled={interests.length === 0}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg text-white disabled:opacity-50"
        >
          Complete Setup ✓
        </button>
      </div>
    </div>
  );
}
