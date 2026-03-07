export default function DirectChat() {
  return (
    <div className="md:col-span-2 p-6 bg-gray-800 rounded-2xl shadow">

      <h3 className="text-lg font-semibold">
        Direct Chat
      </h3>

      {/* Chat messages */}
      <div className="mt-4 h-56 bg-gray-700 rounded-lg p-3 overflow-y-auto space-y-2">

        <p className="text-sm text-gray-200">
          <strong>Support Buddy:</strong> Hi, how are you feeling today?
        </p>

        <p className="text-sm text-right text-gray-200">
          <strong>You:</strong> A bit overwhelmed, but trying to stay positive.
        </p>

      </div>

      {/* Message input */}
      <div className="mt-3 flex gap-2">

        <input
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-sm"
          placeholder="Type a message..."
        />

        <button className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition">
          Send
        </button>

      </div>

    </div>
  );
}