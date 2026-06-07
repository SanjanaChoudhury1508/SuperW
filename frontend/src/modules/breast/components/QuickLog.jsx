import { useState, useEffect } from "react";
import {
  createBreastLog,
  getBreastLogs,
} from "../../../api/breastApi";

export default function QuickLog() {
  const items = ["Lump", "Pain", "Discharge", "None"];

  const [logs, setLogs] = useState([]);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await getBreastLogs();
      setLogs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLog = async (status) => {
    try {
      await createBreastLog({
        status,
        notes,
      });

      alert(`${status} logged`);

      fetchLogs();
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    }
  };

  return (
    <div>
      <div className="flex gap-2 items-center flex-wrap">
        {items.map((it) => (
          <button
            key={it}
            onClick={() => handleLog(it)}
            title={it}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
              it === "None"
                ? "bg-[#1e1e24] border-white/[0.08] text-gray-300 hover:bg-[#252530] hover:text-white"
                : "bg-[#1e1e24] border-white/[0.08] text-gray-300 hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-300"
            }`}
          >
            {it}
          </button>
        ))}
      </div>
      <textarea
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  placeholder="Optional notes..."
  className="w-full mt-3 p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white resize-none"
/>

      {logs.length > 0 && (
        <div className="mt-4 space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Recent Logs
          </div>

          {logs.slice(0, 3).map((log) => (
            <div
              key={log.id}
              className="text-sm text-gray-300 bg-[#1a1a1f] px-3 py-2 rounded-lg"
            >
              {log.status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}