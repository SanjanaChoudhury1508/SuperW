export default function CreateGroup() {
  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl flex flex-col">

      <h3 className="text-base font-semibold text-white">Create Group</h3>

      <p className="mt-1.5 text-xs text-gray-500 leading-relaxed flex-1">
        Start a private or public support group for your community.
      </p>

      <button className="mt-5 w-full py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-pink-500/10">
        Create Group
      </button>

    </div>
  );
}