export default function Settings() {
  const menuItems = [
    "General",
    "Notifications",
    "Privacy",
    "Security",
    "Health Data",
    "Accessibility",
    "Connected Apps",
    "Account",
  ];

  const notifications = [
    { label: "Cycle reminders", defaultChecked: true },
    { label: "Fitness updates", defaultChecked: true },
    { label: "Emergency alerts", defaultChecked: true },
  ];

  const privacy = [
    { label: "Share data for research", defaultChecked: false },
    { label: "Location sharing", defaultChecked: true },
  ];

  const accessibility = [
    { label: "Large text mode", defaultChecked: false },
    { label: "Reduced motion", defaultChecked: false },
    { label: "High contrast", defaultChecked: false },
  ];

  const securityActions = [
    { label: "Change Password", action: "Update" },
    { label: "Two-Factor Authentication", action: "Enable" },
    { label: "Active Sessions", action: "View" },
  ];

  const healthActions = [
    { label: "Download health data", action: "Export" },
    { label: "Delete specific records", action: "Manage" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">

        {/* Sidebar */}
        <aside>
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-4 sticky top-8">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Settings Menu</div>
            <nav className="space-y-0.5">
              {menuItems.map((item, i) => (
                <button
                  key={item}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    i === 0
                      ? "bg-white/[0.06] text-white font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main */}
        <section className="md:col-span-3 space-y-5">

          {/* General */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">General Settings</h2>

            <div className="space-y-3">

              <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
                <span className="text-sm text-gray-300">Dark Mode</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-500 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
                <span className="text-sm text-gray-300">Language</span>
                <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500/40 transition-colors cursor-pointer">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-300">Timezone</span>
                <select className="bg-[#1e1e24] border border-white/[0.08] text-gray-300 text-sm px-3 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500/40 transition-colors cursor-pointer">
                  <option>GMT+5:30</option>
                </select>
              </div>

            </div>
          </div>

          {/* Notifications */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">Notifications</h2>
            <div className="space-y-0">
              {notifications.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i < notifications.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-4 h-4 accent-indigo-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">Privacy</h2>
            <div className="space-y-0">
              {privacy.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i < privacy.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-4 h-4 accent-indigo-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">Security</h2>
            <div className="space-y-0">
              {securityActions.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i < securityActions.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <button className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/15 px-3 py-1.5 rounded-lg transition-all duration-150">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Health Data */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">Health Data</h2>
            <div className="space-y-0">
              {healthActions.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i < healthActions.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <button className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/15 px-3 py-1.5 rounded-lg transition-all duration-150">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">Accessibility</h2>
            <div className="space-y-0">
              {accessibility.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i < accessibility.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-4 h-4 accent-indigo-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Account — danger zone */}
          <div className="bg-[#141418] border border-red-500/10 rounded-2xl p-6">
            <h2 className="text-base font-semibold text-red-400/80 mb-5">Account</h2>
            <div className="space-y-0">
              {[
                { label: "Deactivate account", action: "Deactivate" },
                { label: "Delete account permanently", action: "Delete" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i === 0 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <button className="text-xs text-red-400 hover:text-red-300 border border-red-500/20 bg-red-500/10 hover:bg-red-500/15 px-3 py-1.5 rounded-lg transition-all duration-150">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}