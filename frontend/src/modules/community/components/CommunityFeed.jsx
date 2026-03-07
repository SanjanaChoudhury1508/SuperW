export default function CommunityFeed() {
  return (
    <div className="md:col-span-2 bg-gray-800 p-6 rounded-2xl shadow">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold">
          Community Feed
        </h2>

        <button className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition">
          New Post
        </button>

      </div>

      <div className="mt-6 space-y-4">

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
    <div className="p-4 bg-gray-700 rounded-xl shadow">

      <div className="flex justify-between">

        <div className="font-medium text-gray-200">
          {user}
        </div>

        <div className="text-xs text-gray-100/60">
          {time}
        </div>

      </div>

      <p className="mt-2 text-sm text-gray-200">
        {text}
      </p>

      <div className="mt-3 flex gap-4 text-xs text-gray-100/60">
        <span>💗 {supports} Support</span>
        <span>💬 {replies} Replies</span>
      </div>

    </div>
  );
}