export default function Sidebar() {
  return (
    <aside className="space-y-3">
      <Card title="Your Activity">
        Posts: 3 · Replies: 12
      </Card>
      <Card title="Trending Topics">
        <span className="text-pink-400/80">#mentalhealth</span>{" "}
        <span className="text-pink-400/80">#pregnancy</span>{" "}
        <span className="text-pink-400/80">#menopause</span>
      </Card>
      <Card title="Community Guidelines">
        Respect · Support · Privacy
      </Card>
    </aside>
  );
}

function Card({ title, children }) {
  return (
    <div className="p-4 bg-[#141418] border border-white/[0.06] rounded-2xl">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2.5">{title}</div>
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}