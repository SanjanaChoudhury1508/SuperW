export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <aside className="space-y-4">

          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-4 space-y-3 text-sm">
            <div className="font-semibold">Settings Menu</div>
            <div className="text-gray-100/60">General</div>
            <div className="text-gray-100/60">Notifications</div>
            <div className="text-gray-100/60">Privacy</div>
            <div className="text-gray-100/60">Security</div>
            <div className="text-gray-100/60">Health Data</div>
            <div className="text-gray-100/60">Accessibility</div>
            <div className="text-gray-100/60">Connected Apps</div>
            <div className="text-gray-100/60">Account</div>
          </div>

        </aside>

        {/* Main Settings */}
        <section className="md:col-span-3 space-y-6">

          {/* General */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">General Settings</h2>

            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">

              <div className="flex justify-between items-center">
                <span>Dark Mode</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between items-center">
                <span>Language</span>
                <select className="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <span>Timezone</span>
                <select className="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                  <option>GMT+5:30</option>
                </select>
              </div>

            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Notifications</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Cycle reminders</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between">
                <span>Fitness updates</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between">
                <span>Community replies</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between">
                <span>Emergency alerts</span>
                <input type="checkbox" defaultChecked />
              </div>

            </div>
          </div>

          {/* Privacy */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Privacy</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Anonymous community posting</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between">
                <span>Share data for research</span>
                <input type="checkbox" />
              </div>

              <div className="flex justify-between">
                <span>Location sharing</span>
                <input type="checkbox" defaultChecked />
              </div>

            </div>
          </div>

          {/* Security */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Security</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Change Password</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Update
                </button>
              </div>

              <div className="flex justify-between">
                <span>Two Factor Authentication</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Enable
                </button>
              </div>

              <div className="flex justify-between">
                <span>Active Sessions</span>
                <button className="text-purple-400 hover:text-purple-300">
                  View
                </button>
              </div>

            </div>
          </div>

          {/* Health Data */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Health Data</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Download health data</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Export
                </button>
              </div>

              <div className="flex justify-between">
                <span>Delete specific records</span>
                <button className="text-purple-400 hover:text-purple-300">
                  Manage
                </button>
              </div>

            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Accessibility</h2>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Large text mode</span>
                <input type="checkbox" />
              </div>

              <div className="flex justify-between">
                <span>Reduced motion</span>
                <input type="checkbox" />
              </div>

              <div className="flex justify-between">
                <span>High contrast</span>
                <input type="checkbox" />
              </div>

            </div>
          </div>

          {/* Account actions */}
          <div className="bg-gray-800 border bg-gray-700 rounded-2xl p-6">
            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Deactivate account</span>
                <button className="text-red-400 hover:text-red-300">
                  Deactivate
                </button>
              </div>

              <div className="flex justify-between">
                <span>Delete account permanently</span>
                <button className="text-red-400 hover:text-red-300">
                  Delete
                </button>
              </div>

            </div>
          </div>

        </section>

      </div>

    </div>
  );
}