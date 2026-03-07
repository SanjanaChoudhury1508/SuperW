export default function Settings() {
  return (
    <div className="glass card-border rounded-2xl p-6">

      <h3 className="text-lg font-semibold mb-4">
        Settings
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between items-center">
          <span className="text-gray-300">
            Notifications
          </span>

          <button className="px-3 py-1 bg-rose-500 text-white rounded-lg hover:bg-rose-400 transition">
            Enable
          </button>
        </div>

      </div>

    </div>
  );
}