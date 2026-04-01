export default function CommunityFeed() {
  return (
    <div className="md:col-span-2 bg-[#141418] border border-white/[0.06] p-6 rounded-2xl">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          Community Feed
        </h2>
        <button className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-400 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-pink-500/10">
          New Post
        </button>
      </div>

      <div className="space-y-3">
        <Post
          user="Anonymous User"
          time="2 hrs ago"
          text="Is it normal to feel anxious during early pregnancy? Any tips that helped you?"
          supports="12"
          replies="5"
        />
        <Post
          user="Health Mentor"
          time="5 hrs ago"
          text="Remember to be kind to yourself. Small daily routines can make a big difference."
          supports="30"
          replies="10"
        />
      </div>

    </div>
  );
}

function Post({ user, time, text, supports, replies }) {
  return (
    <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl hover:border-white/[0.09] transition-colors duration-200">

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/25 flex items-center justify-center text-[10px] font-semibold text-pink-400 flex-shrink-0">
            {user.charAt(0)}
          </div>
          <div className="text-sm font-medium text-gray-200">{user}</div>
        </div>
        <div className="text-xs text-gray-500">{time}</div>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">{text}</p>

      <div className="mt-3 flex gap-4 text-xs text-gray-500">
        <button className="flex items-center gap-1.5 hover:text-pink-400 transition-colors duration-150">
          <span>💗</span> {supports} Support
        </button>
        <button className="flex items-center gap-1.5 hover:text-gray-300 transition-colors duration-150">
          <span>💬</span> {replies} Replies
        </button>
      </div>

    </div>
  );
}