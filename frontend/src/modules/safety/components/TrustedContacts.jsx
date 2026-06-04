const contacts = [
  { name: "Mom", number: "+91 XXXXXXXX" },
  { name: "Best Friend", number: "+91 XXXXXXXX" },
  { name: "Partner", number: "+91 XXXXXXXX" },
];

export default function TrustedContacts() {
  return (
    <section className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Trusted Contacts</h3>
        <span className="text-xs text-gray-500">{contacts.length} added</span>
      </div>

      <div className="space-y-2">
        {contacts.map((c) => (
          <div
            key={c.name}
            className="p-3.5 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-sky-500/15 border border-sky-500/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-sky-400">{c.name[0]}</span>
              </div>
              <span className="text-sm text-gray-300 font-medium">{c.name}</span>
            </div>
            <span className="text-xs text-gray-500 tabular-nums">{c.number}</span>
          </div>
        ))}
      </div>

    </section>
  );
}