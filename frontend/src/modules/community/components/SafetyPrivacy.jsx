export default function SafetyPrivacy() {
  const items = [
    { icon: "🕵️", label: "Anonymous chats" },
    { icon: "🚫", label: "Block & report" },
    { icon: "🛡️", label: "Moderation" },
  ];

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl flex flex-col">

      <h3 className="text-base font-semibold text-white mb-1.5">Safety & Privacy</h3>
      <p className="text-xs text-gray-500 mb-5">Your safety is our priority.</p>

      <div className="space-y-2.5 flex-1">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 p-3 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <span className="text-sm">{item.icon}</span>
            <span className="text-sm text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}