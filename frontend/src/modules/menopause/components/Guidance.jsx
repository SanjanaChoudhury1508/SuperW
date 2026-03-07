export default function Guidance() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 rounded-2xl bg-gray-800 shadow">

        <h3 className="text-lg font-semibold">
          Lifestyle & Guidance
        </h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card text="Nutrition for menopause" />
          <Card text="Strength & balance exercises" />
          <Card text="Stress management" />
        </div>

        <p className="mt-6 text-sm text-gray-100/60">
          Mindfulness & emotional balance are key during transition.
        </p>

      </div>

      <div className="p-6 rounded-2xl bg-gray-800 shadow">

        <h3 className="text-lg font-semibold">
          Resources
        </h3>

        <p className="mt-3 text-sm text-gray-300">
          Doctors • Support groups • Articles
        </p>

      </div>

    </section>
  );
}

function Card({ text }) {
  return (
    <div className="p-3 rounded-lg bg-gray-700">
      {text}
    </div>
  );
}