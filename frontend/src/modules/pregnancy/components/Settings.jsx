export default function Settings() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Reminders</span>
        <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-emerald-500/40 transition-colors cursor-pointer">
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Sync Calendar</span>
        <input type="checkbox" className="w-4 h-4 accent-emerald-500 cursor-pointer" />
      </div>
    </div>
  );
}