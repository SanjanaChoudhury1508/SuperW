import Support from "./Support";

export default function WellnessTools() {
  return (
    <section className="grid md:grid-cols-3 gap-6">

      <div className="md:col-span-2 p-6 bg-gray-800/5 rounded-2xl">

        <h3 className="font-semibold text-lg">
          Wellness Tools
        </h3>

        <div className="grid md:grid-cols-3 gap-3 mt-4">
          <Tool text="Breathing Exercise (5 min)" />
          <Tool text="Guided Meditation" />
          <Tool text="Sleep Sounds" />
        </div>

      </div>

      <Support />

    </section>
  );
}

function Tool({ text }) {
  return (
    <div className="p-3 bg-black/30 rounded-lg text-sm text-gray-200">
      {text}
    </div>
  );
}