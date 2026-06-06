import { useEffect, useState } from "react";
import { createMood, getMoods } from "../../../api/moodApi";

const moods = ["😊 Happy", "😌 Calm", "😔 Sad", "😡 Stressed", "😴 Tired"];

export default function MoodJournal() {
  const [selectedMood, setSelectedMood] = useState("");
  const [journal, setJournal] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchMoods();
  }, []);

  const fetchMoods = async () => {
    try {
      const res = await getMoods();
      setHistory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!selectedMood) {
      alert("Select a mood");
      return;
    }

    try {
      await createMood({
        mood: selectedMood,
        journal,
      });

      alert("Mood saved");

      setSelectedMood("");
      setJournal("");

      fetchMoods();
    } catch (error) {
      console.error(error);
      alert("Failed to save mood");
    }
  };

  return (
    <section className="grid md:grid-cols-3 gap-5">

      <div className="md:col-span-2 p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h3 className="text-base font-semibold text-white mb-5">
          Mood Journal
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`px-3 py-2 rounded-lg text-sm ${
                selectedMood === mood
                  ? "bg-teal-500 text-white"
                  : "bg-[#1a1a1f] text-gray-400"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="How are you feeling today?"
          className="w-full h-32 p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white resize-none"
        />

        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-teal-500 rounded-lg text-white"
        >
          Save Mood
        </button>

      </div>

      <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

        <h3 className="text-base font-semibold text-white mb-4">
          Recent Moods
        </h3>

        <div className="space-y-3">
          {history.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#1a1a1f] rounded-lg"
            >
              <div className="text-sm text-white">
                {item.mood}
              </div>

              <div className="text-xs text-gray-400 mt-1">
                {item.journal}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}