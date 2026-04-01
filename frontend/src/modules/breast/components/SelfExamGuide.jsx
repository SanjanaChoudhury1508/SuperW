export default function SelfExamGuide() {
  const steps = [
    { label: "Step 1", text: "Look at breasts in mirror for changes." },
    { label: "Step 2", text: "Raise arms and look for asymmetry." },
    { label: "Step 3", text: "Feel breasts lying down and standing." },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Self-exam Guide</h3>
        <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">
          Step-by-step
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl group hover:border-pink-500/20 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-pink-500/15 border border-pink-500/25 flex items-center justify-center text-[10px] font-semibold text-pink-400">
                {i + 1}
              </span>
              <div className="text-xs text-gray-500">{step.label}</div>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">{step.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}