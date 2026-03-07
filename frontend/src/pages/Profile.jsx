export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <aside className="space-y-4">

          <div className="p-6 bg-gray-800 rounded-2xl border bg-gray-700 text-center">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=User"
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h3 className="mt-3 font-semibold">Sanjana</h3>
            <p className="text-sm text-gray-100/60">Member since 2025</p>

            <button className="mt-4 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition">
              Edit Profile
            </button>
          </div>

          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-4 space-y-3 text-sm">
            <div className="font-semibold">Profile Menu</div>
            <div className="text-gray-100/60">Personal Info</div>
            <div className="text-gray-100/60">Health Preferences</div>
            <div className="text-gray-100/60">Privacy</div>
            <div className="text-gray-100/60">Notifications</div>
            <div className="text-gray-100/60">Security</div>
            <div className="text-gray-100/60">Connected Apps</div>
          </div>

        </aside>

        {/* Main Content */}
        <section className="md:col-span-3 space-y-6">

          {/* Personal Info */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">

              <div>
                <label className="text-gray-100/60">Full Name</label>
                <div className="mt-1">Sanjana</div>
              </div>

              <div>
                <label className="text-gray-100/60">Email</label>
                <div className="mt-1">user@email.com</div>
              </div>

              <div>
                <label className="text-gray-100/60">Age</label>
                <div className="mt-1">26</div>
              </div>

              <div>
                <label className="text-gray-100/60">Location</label>
                <div className="mt-1">India</div>
              </div>

            </div>
          </div>

          {/* Health Overview */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Health Overview</h2>

            <div className="grid md:grid-cols-4 gap-4 mt-4 text-center">

              <div className="p-4 bg-gray-700 rounded-xl">
                <div className="text-xs text-gray-100/60">Cycle</div>
                <div className="font-semibold">28 days</div>
              </div>

              <div className="p-4 bg-gray-700 rounded-xl">
                <div className="text-xs text-gray-100/60">Fitness</div>
                <div className="font-semibold">Active</div>
              </div>

              <div className="p-4 bg-gray-700 rounded-xl">
                <div className="text-xs text-gray-100/60">Mental Wellness</div>
                <div className="font-semibold">Stable</div>
              </div>

              <div className="p-4 bg-gray-700 rounded-xl">
                <div className="text-xs text-gray-100/60">Safety</div>
                <div className="font-semibold">Enabled</div>
              </div>

            </div>
          </div>

          {/* Preferences */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Preferences</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between items-center">
                <span>Daily Health Reminders</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between items-center">
                <span>Community Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between items-center">
                <span>Share Anonymous Data for Research</span>
                <input type="checkbox" />
              </div>

            </div>
          </div>

          {/* Privacy */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Privacy & Security</h2>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Password</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Change
                </button>
              </div>

              <div className="flex justify-between">
                <span>Two-Factor Authentication</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Enable
                </button>
              </div>

              <div className="flex justify-between">
                <span>Download Health Data</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Export
                </button>
              </div>

            </div>
          </div>

        </section>

      </div>

    </div>
  );
}