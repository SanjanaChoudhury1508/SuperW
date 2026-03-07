import { useInterests } from "../context/InterestsContext";

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

export default function Interests({ onBack, onComplete }) {
  const { interests, setInterests } = useInterests();

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg text-center">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-white">
        What interests you most?
      </h2>

      {/* Interest options */}
      <div className="grid grid-cols-2 gap-4">
        {options.map((item) => (
          <button
            key={item}
            onClick={() => toggleInterest(item)}
            className={`p-4 rounded-xl border transition text-left
              ${
                interests.includes(item)
                  ? "border-pink-500 bg-pink-900 text-white"
                  : "border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Selected interests */}
      {interests.length > 0 && (
        <div className="mt-6 bg-gray-700 p-4 rounded-xl">
          <h3 className="font-semibold text-white mb-3">
            You have selected:
          </h3>

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

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">

        <button
          onClick={onBack}
          className="text-gray-100/60 hover:text-white transition"
        >
          ← Back
        </button>

        <button
          onClick={onComplete}
          disabled={interests.length === 0}
          className="bg-pink-500 hover:bg-pink-600 transition px-6 py-2 rounded-lg text-white disabled:opacity-50"
        >
          Complete Setup ✓
        </button>

      </div>

    </div>
  );
}