const stages = [
  { title: "Teen", desc: "Navigating early wellness" },
  { title: "Reproductive", desc: "Active life planning" },
  { title: "Pregnant", desc: "Expecting journey" },
  { title: "Postpartum", desc: "Recovery & adjustment" },
  { title: "Menopause", desc: "Life transition" },
  { title: "General Wellness", desc: "Overall health focus" },
];

export default function LifeStage({ onNext, onBack, lifeStage, setLifeStage }) {
  return (
    <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6">What’s your current life stage?</h2>
      <div className="grid grid-cols-2 gap-4">
        {stages.map((stage) => (
          <button
            key={stage.title}
            onClick={() => setLifeStage(stage.title)}
            className={`p-4 rounded-xl border ${
              lifeStage === stage.title ? "border-pink-500 bg-pink-900" : "border-gray-600"
            }`}
          >
            <h3 className="font-semibold">{stage.title}</h3>
            <p className="text-sm text-gray-400">{stage.desc}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="text-gray-400">← Back</button>
        <button
          onClick={onNext}
          disabled={!lifeStage}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg text-white disabled:opacity-50"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
