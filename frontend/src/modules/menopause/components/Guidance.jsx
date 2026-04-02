export default function Guidance() {
  const cards = [
    "Nutrition for menopause",
    "Strength & balance exercises",
    "Stress management",
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h3 className="text-base font-semibold text-white mb-5">
          Lifestyle & Guidance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((text) => (
            <Card key={text} text={text} />
          ))}
        </div>

        <p className="mt-5 text-sm text-gray-500 leading-relaxed">
          Mindfulness & emotional balance are key during transition.
        </p>

      </div>

      <div className="p-6 rounded-2xl bg-[#141418] border border-white/[0.06]">

        <h3 className="text-base font-semibold text-white mb-4">
          Resources
        </h3>

        {["Doctors", "Support groups", "Articles"].map((item, i) => (
          <button
            key={i}
            className="flex items-center gap-2.5 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors flex-shrink-0" />
            {item}
          </button>
        ))}

      </div>

    </section>
  );
}

function Card({ text }) {
  return (
    <div className="p-4 rounded-xl bg-[#1a1a1f] border border-white/[0.05] hover:border-purple-500/20 transition-colors duration-200">
      <div className="w-6 h-6 rounded-md bg-purple-500/15 border border-purple-500/20 mb-3 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="3" fill="#c084fc" opacity="0.7" />
        </svg>
      </div>
      <div className="text-sm text-gray-300 leading-snug">{text}</div>
    </div>
  );
}