export default function SupportResources() {
  const links = [
    "24/7 helpline numbers",
    "Professional counselors",
    "Emergency contacts",
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
        <div>
          <h3 className="text-base font-semibold text-white">Support Resources</h3>
          <p className="text-xs text-gray-500 mt-0.5">Always here when you need help</p>
        </div>
      </div>

      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <button className="flex items-center gap-3 w-full text-sm text-gray-400 hover:text-white transition-colors duration-150 group text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors flex-shrink-0" />
              {link}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}