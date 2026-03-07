export default function CreateGroup() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow">

      <h3 className="text-lg font-semibold">
        Create Group
      </h3>

      <p className="mt-3 text-sm text-gray-100/60">
        Start a private or public support group.
      </p>

      <button className="mt-4 w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition">
        Create
      </button>

    </div>
  );
}