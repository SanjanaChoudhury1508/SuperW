import { useEffect, useState } from "react";
import {
  createWorkout,
  getWorkouts,
} from "../../../api/workoutApi";

export default function Workouts() {
  const [workout, setWorkout] = useState("");
  const [duration, setDuration] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await getWorkouts();
      setWorkouts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!workout || !duration) {
      alert("Enter workout and duration");
      return;
    }

    try {
      await createWorkout({
        workout,
        duration,
      });

      alert("Workout saved");

      setWorkout("");
      setDuration("");

      fetchWorkouts();
    } catch (error) {
      console.error(error);
      alert("Failed to save workout");
    }
  };

  return (
    <div className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">
          Workouts
        </h3>

        <span className="text-xs text-gray-500 bg-[#1e1e24] border border-white/[0.06] px-2.5 py-1 rounded-md">
          Workout Tracker
        </span>
      </div>

      <div className="space-y-3 mb-5">

        <input
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="Workout Name"
          className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white"
        />

        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (minutes)"
          type="number"
          className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-white/[0.05] text-white"
        />

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-violet-500 rounded-lg text-white"
        >
          Save Workout
        </button>

      </div>

      <div className="space-y-3">
        {workouts.slice(0, 5).map((w) => (
          <div
            key={w.id}
            className="p-4 bg-[#1a1a1f] border border-white/[0.05] rounded-xl flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-medium text-white">
                {w.workout}
              </div>

              <div className="text-xs text-gray-500 mt-1">
                {w.duration} min
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}