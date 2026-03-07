export default function SafetyOverview() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      
      <div className="md:col-span-2 p-6 bg-gray-800 rounded-2xl border bg-gray-700">
        <h2 className="text-xl font-semibold">Safety Overview</h2>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          
          <div className="p-4 bg-gray-700 rounded-xl text-center">
            <div className="text-xs text-gray-100/60">Status</div>
            <div className="text-lg font-semibold text-green-400">Safe</div>
          </div>

          <div className="p-4 bg-gray-700 rounded-xl text-center">
            <div className="text-xs text-gray-100/60">Location Sharing</div>
            <div className="text-lg font-semibold">Enabled</div>
          </div>

          <div className="p-4 bg-gray-700 rounded-xl text-center">
            <div className="text-xs text-gray-100/60">Emergency Contacts</div>
            <div className="text-lg font-semibold">3 Added</div>
          </div>

        </div>
      </div>

      <div className="p-6 bg-gray-800 rounded-2xl border bg-gray-700">
        <div className="text-xs text-gray-100/60">Quick Tip</div>

        <p className="mt-2 text-sm text-gray-300">
          Keep your phone charged and location sharing on when traveling alone.
        </p>
      </div>

    </section>
  );
}