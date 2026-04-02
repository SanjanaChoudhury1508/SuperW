import Support from "./Support";

export default function WellnessTools() {
  const tools = [
    "Breathing Exercise (5 min)",
    "Guided Meditation",
    "Sleep Sounds",
  ];

  return (
    <section className="grid md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h3 className="text-base font-semibold text-white mb-5">
          Wellness Tools
        </h3>

        <div className="grid md:grid-cols-3 gap-3">
          {tools.map((text) => (
            <Tool key={text} text={text} />
          ))}
        </div>

      </div>

      <Support />

    </section>
  );
}

function Tool({ text }) {
  return (
    <button className="p-4 bg-[#1a1a1f] border border-white/[0.05] hover:border-teal-500/20 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-200 text-left group">
      <div className="w-6 h-6 rounded-md bg-teal-500/15 border border-teal-500/20 mb-3 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="3" fill="#2dd4bf" opacity="0.7" />
        </svg>
      </div>
      {text}
    </button>
  );
}