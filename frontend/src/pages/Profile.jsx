import { useEffect, useState } from "react";
export default function Profile() {
  const menuItems = [
    "Personal Info",
    "Health Preferences",
    "Privacy",
    "Notifications",
    "Security",
    "Connected Apps",
  ];

  const healthStats = [
    { label: "Cycle", value: "28 days" },
    { label: "Fitness", value: "Active" },
    { label: "Mental Wellness", value: "Stable" },
    { label: "Safety", value: "Enabled" },
  ];

  const preferences = [
    { label: "Daily Health Reminders", defaultChecked: true },
    { label: "Share Anonymous Data for Research", defaultChecked: false },
  ];

  const privacyActions = [
    { label: "Password", action: "Change" },
    { label: "Two-Factor Authentication", action: "Enable" },
    { label: "Download Health Data", action: "Export" },
  ];

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-gray-100 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Sidebar */}
        <aside className="space-y-4">
          {/* Avatar card */}
          <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl text-center">
            <div className="relative inline-block">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=User"
                className="w-18 h-18 rounded-full mx-auto border-2 border-white/[0.08]"
                style={{ width: 72, height: 72 }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#141418]" />
            </div>

            <h3 className="mt-3 font-semibold text-white">
              {user?.name || "User"}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Member since 2025</p>

            <button className="mt-4 w-full px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/[0.08] text-sm text-gray-300 hover:text-white hover:bg-[#26262e] transition-all duration-150">
              Edit Profile
            </button>
          </div>

          {/* Nav menu */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">
              Menu
            </div>
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

        {/* Main Content */}
        <section className="md:col-span-3 space-y-5">
          {/* Personal Info */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-white">
                Personal Information
              </h2>
              <button className="text-xs text-gray-400 hover:text-white border border-white/[0.08] bg-[#1e1e24] px-3 py-1.5 rounded-lg transition-all duration-150">
                Edit
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Full Name", value: user?.name || "User" },
                { label: "Email", value: user?.email || "Not Available" },
                { label: "Age", value: "26" },
                { label: "Location", value: "India" },
              ].map((field) => (
                <div
                  key={field.label}
                  className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    {field.label}
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Overview */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">
              Health Overview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {healthStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl text-center"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">
              Preferences
            </h2>

            <div className="space-y-3">
              {preferences.map((pref) => (
                <div
                  key={pref.label}
                  className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-sm text-gray-300">{pref.label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={pref.defaultChecked}
                    className="w-4 h-4 accent-indigo-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-5">
              Privacy & Security
            </h2>

            <div className="space-y-3">
              {privacyActions.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <button className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/15 px-3 py-1.5 rounded-lg transition-all duration-150">
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
