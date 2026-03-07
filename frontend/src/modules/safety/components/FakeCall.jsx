import { useState } from "react";

export default function FakeCall() {
  const [calling, setCalling] = useState(false);

  const startFakeCall = () => {
    setCalling(true);

    setTimeout(() => {
      alert("Incoming Call from 'Friend'");
      setCalling(false);
    }, 3000);
  };

  return (
    <section className="p-6 bg-gray-800 rounded-2xl border bg-gray-700">
      <h3 className="text-lg font-semibold">Fake Call</h3>

      <p className="mt-3 text-sm text-gray-100/60">
        Simulate an incoming call to escape uncomfortable situations.
      </p>

      <button
        onClick={startFakeCall}
        className="mt-4 w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-medium"
      >
        {calling ? "Calling..." : "Start Fake Call"}
      </button>
    </section>
  );
}