export default function SupportGroups() {
  return (
    <div className="md:col-span-2 p-6 bg-gray-800 rounded-2xl shadow">

      <h3 className="text-lg font-semibold">
        Support Groups
      </h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        <Group name="Pregnancy Support" members="2.1k" />
        <Group name="Mental Wellness" members="1.8k" />
        <Group name="Menopause Circle" members="950" />
        <Group name="Fitness & Nutrition" members="3.4k" />

      </div>

    </div>
  );
}

function Group({ name, members }) {
  return (
    <div className="p-4 bg-gray-700 rounded-lg">

      <div className="font-medium text-gray-200">
        {name}
      </div>

      <div className="text-xs text-gray-100/60">
        {members} members
      </div>

    </div>
  );
}