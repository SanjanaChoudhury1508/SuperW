export default function EmergencyActions() {
  return (
    <section className="p-6 bg-gray-800 rounded-2xl border bg-gray-700">
      <h3 className="text-lg font-semibold">Emergency Actions</h3>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <button className="p-6 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold">
          SOS
        </button>

        <button className="p-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition">
          Call Emergency Services
        </button>

        <button className="p-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition">
          Alert Trusted Contacts
        </button>
      </div>
    </section>
  );
}