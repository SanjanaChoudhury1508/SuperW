export default function SupportGroups() {
  return (
    <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-5">Support Groups</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Group name="Pregnancy Support" members="2.1k" emoji="🤰" />
        <Group name="Mental Wellness" members="1.8k" emoji="🧠" />
        <Group name="Menopause Circle" members="950" emoji="🌸" />
        <Group name="Fitness & Nutrition" members="3.4k" emoji="🏃" />
      </div>

    </div>
  );
}

function Group({ name, members, emoji }) {
  return (
    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-between hover:border-white/[0.09] transition-colors duration-200 group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-sm flex-shrink-0">
          {emoji}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{members} members</div>
        </div>
      </div>
      <button className="text-xs text-pink-400 hover:text-pink-300 transition-colors px-2.5 py-1 rounded-lg hover:bg-pink-500/10 border border-transparent hover:border-pink-500/20">
        Join
      </button>
    </div>
  );
}