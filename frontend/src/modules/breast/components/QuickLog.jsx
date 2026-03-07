export default function QuickLog() {
  const items = ["Lump", "Pain", "Discharge", "None"];

  return (
    <div className="flex gap-3 items-center">

      {items.map((it) => (
        <button
          key={it}
          onClick={() => {
            console.log("Quick log:", it);
          }}
          title={it}
          className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 hover:scale-105 transition transform text-sm"
        >
          {it}
        </button>
      ))}

    </div>
  );
}