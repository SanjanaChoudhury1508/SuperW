export default function DirectChat() {
  return (
    <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <h3 className="text-base font-semibold text-white mb-4">Direct Chat</h3>

      {/* Chat messages */}
      <div className="h-52 bg-[#0d0d0f] border border-white/[0.05] rounded-xl p-4 overflow-y-auto space-y-3">

        <div className="flex gap-2.5">
          <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/25 flex items-center justify-center text-[10px] font-semibold text-purple-400 flex-shrink-0 mt-0.5">
            S
          </div>
          <div className="bg-[#1a1a1f] border border-white/[0.05] rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]">
            <div className="text-[11px] text-gray-500 mb-1 font-medium">Support Buddy</div>
            <p className="text-sm text-gray-300">Hi, how are you feeling today?</p>
          </div>
        </div>

        <div className="flex gap-2.5 justify-end">
          <div className="bg-pink-500/15 border border-pink-500/20 rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <div className="text-[11px] text-pink-400/70 mb-1 font-medium text-right">You</div>
            <p className="text-sm text-gray-300">A bit overwhelmed, but trying to stay positive.</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/25 flex items-center justify-center text-[10px] font-semibold text-pink-400 flex-shrink-0 mt-0.5">
            Y
          </div>
        </div>

      </div>

      {/* Message input */}
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#1a1a1f] border border-white/[0.07] text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/40 transition-colors duration-150"
          placeholder="Type a message..."
        />
        <button className="px-4 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 active:scale-[0.98] transition-all duration-150 text-white text-sm font-medium shadow-lg shadow-pink-500/10">
          Send
        </button>
      </div>

    </div>
  );
}