export default function Sidebar() {
  return (
    <aside className="space-y-4">

      <Card title="Your Activity">
        Posts: 3 • Replies: 12
      </Card>

      <Card title="Trending Topics">
        #mentalhealth #pregnancy #menopause
      </Card>

      <Card title="Community Guidelines">
        Respect • Support • Privacy
      </Card>

    </aside>
  );
}

function Card({ title, children }) {
  return (
    <div className="p-4 bg-gray-800 rounded-2xl shadow">

      <div className="text-xs text-gray-100/60">
        {title}
      </div>

      <div className="mt-2 text-sm text-gray-200">
        {children}
      </div>

    </div>
  );
}