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
    <section className="p-6 bg-[#141418] border border-white/[0.06] rounded-2xl flex flex-col">

      <h3 className="text-base font-semibold text-white mb-1">Fake Call</h3>
      <p className="text-xs text-gray-500 mb-5 leading-relaxed">
        Simulate an incoming call to escape uncomfortable situations.
      </p>

      <div className="mt-auto">
        <button
          onClick={startFakeCall}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.98] shadow-lg ${
            calling
              ? "bg-sky-500/20 border border-sky-500/30 text-sky-300"
              : "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/10"
          }`}
        >
          {calling ? "Calling..." : "Start Fake Call"}
        </button>
      </div>

    </section>
  );
}