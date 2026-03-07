import React, { useState, useRef } from "react";

export default function ContractionTimer() {
  const [running, setRunning] = useState(false);
  const [secs, setSecs] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (running) return;

    setRunning(true);

    const startAt = Date.now();

    timerRef.current = setInterval(() => {
      setSecs(Math.floor((Date.now() - startAt) / 1000));
    }, 500);
  };

  const stop = () => {
    if (!running) return;

    clearInterval(timerRef.current);
    timerRef.current = null;

    setRunning(false);
    setSecs(0);
  };

  return (
    <div className="mt-4">

      <div className="flex gap-2">

        <button
          onClick={start}
          className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-400/30 to-pink-400/30 hover:from-purple-400/50 hover:to-pink-400/50 transition"
        >
          Start
        </button>

        <button
          onClick={stop}
          className="py-2 px-3 rounded-lg bg-gray-800/10 hover:bg-gray-800/20 transition"
        >
          Stop
        </button>

      </div>

      <div className="mt-4 text-sm text-gray-100/60">
        {running ? `Running: ${secs}s` : "Not running"}
      </div>

    </div>
  );
}