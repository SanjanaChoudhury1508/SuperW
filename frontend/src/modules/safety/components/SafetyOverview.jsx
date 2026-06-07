import { useEffect, useState } from "react";
import {
  createSafetyLog,
  getSafetyLogs,
} from "../../../api/safetyApi";

export default function SafetyOverview() {
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await getSafetyLogs();
      setLogs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!status) {
      alert("Select a status");
      return;
    }

    try {
      await createSafetyLog({
        status,
        notes,
      });

      alert("Safety check-in saved");

      setStatus("");
      setNotes("");

      fetchLogs();
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    }
  };

  return (
    <section className="grid md:grid-cols-3 gap-5">

      {/* LEFT SECTION */}
      <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h2 className="text-xl font-semibold text-white tracking-tight">
          Safety Overview
        </h2>

        <p className="text-sm text-gray-500 mt-0.5">
          Your current safety status at a glance
        </p>

        {/* Overview Cards */}
        <div className="mt-5 grid sm:grid-cols-3 gap-3">

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
              Status
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/50" />
              <span className="text-base font-semibold text-green-400">
                Safe
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
              Location Sharing
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-base font-semibold text-white">
                Enabled
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
              Emergency Contacts
            </div>

            <div className="text-base font-semibold text-white">
              3 Added
            </div>
          </div>

        </div>

        {/* Safety Check-In */}
        <div className="mt-6 border-t border-white/[0.05] pt-5">

          <div className="text-sm font-medium text-white mb-3">
            Safety Check-In
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {["Safe", "Need Support", "Emergency"].map((item) => (
              <button
                key={item}
                onClick={() => setStatus(item)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  status === item
                    ? "bg-sky-500 text-white"
                    : "bg-[#1a1a1f] text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-3 items-start">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional notes..."
              rows={3}
              className="flex-1 p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white resize-none"
            />

            <button
              onClick={handleSave}
              className="px-4 py-3 bg-sky-500 rounded-lg text-white whitespace-nowrap"
            >
              Save
            </button>
          </div>

        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="p-5 bg-[#141418] border border-sky-500/20 rounded-2xl">

        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <div className="text-xs text-sky-400 uppercase tracking-wider font-medium">
            Quick Tip
          </div>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">
          Keep your phone charged and location sharing on when traveling alone.
        </p>

        {logs.length > 0 && (
          <div className="mt-5 border-t border-white/[0.05] pt-4">

            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
              Recent Check-Ins
            </div>

            <div className="space-y-2">
              {logs.slice(0, 3).map((log) => (
                <div
                  key={log.id}
                  className="p-2 bg-[#1a1a1f] rounded-lg"
                >
                  <div className="text-sm text-white">
                    {log.status}
                  </div>

                  {log.notes && (
                    <div className="text-xs text-gray-400 mt-1">
                      {log.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

    </section>
  );
}