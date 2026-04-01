export default function SafetyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gray-900 border-b border-gray-800 z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500">
          🛡️
        </div>

        <div>
          <div className="text-lg font-semibold">Personal Safety & Emergency Tools</div>
        </div>
      </div>

      <div className="text-sm text-gray-100/60 hidden md:block">
        {new Date().toDateString()}
      </div>
    </header>
  );
}