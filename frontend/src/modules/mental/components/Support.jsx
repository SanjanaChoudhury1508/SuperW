export default function Support() {
  const items = ["Therapist", "Helpline", "Trusted contact"];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-4">
        Support
      </h3>

      {items.map((item, i) => (
        <button
          key={i}
          className="flex items-center gap-2.5 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors flex-shrink-0" />
          {item}
        </button>
      ))}

    </div>
  );
}