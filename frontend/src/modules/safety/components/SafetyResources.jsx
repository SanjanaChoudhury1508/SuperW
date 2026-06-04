const resources = [
  "Emergency numbers",
  "Self-defense tips",
  "Legal help resources",
];

export default function SafetyResources() {
  return (
    <section className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-5">Safety Resources</h3>

      <ul className="space-y-2">
        {resources.map((item) => (
          <li key={item}>
            <button className="flex items-center gap-2.5 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors flex-shrink-0" />
              {item}
            </button>
          </li>
        ))}
      </ul>

    </section>
  );
}