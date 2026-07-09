import { useState, useRef, useEffect } from "react";
import { analyzeMood } from "../../../api/moodApi";
import {
  RiMentalHealthLine,
  RiSendPlaneFill,
  RiCloseLine,
  RiEmotionHappyLine,
} from "react-icons/ri";

// ─── Constants ────────────────────────────────────────────────────────────────

const SUGGESTED_PROMPTS = [
  "I'm feeling stressed",
  "I feel anxious",
  "I'm feeling happy today",
  "I feel exhausted",
];

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "bot",
  text: "Hi, I'm your Mental Wellness Assistant 🌿\n\nTell me how you're feeling and I'll help identify your mood and offer some gentle support.",
  timestamp: new Date(),
};

// ─── Mock response engine (replace with API call later) ───────────────────────
// To connect to backend: replace getMockResponse() body with:
//   const { data } = await axios.post("/api/mood/analyze", { message });
//   return data.reply;

function getMockResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes("stress") || lower.includes("overwhelm"))
    return "It sounds like you're carrying a lot right now. Stress can feel heavy — you're not alone in this. Try taking three slow, deep breaths. Would you like a short grounding exercise?";
  if (
    lower.includes("anxi") ||
    lower.includes("worry") ||
    lower.includes("nervous")
  )
    return "Anxiety can make everything feel more intense. Acknowledging it is already a brave first step. Would it help to talk through what's on your mind, or would you prefer a quick calming technique?";
  if (
    lower.includes("happy") ||
    lower.includes("great") ||
    lower.includes("good") ||
    lower.includes("excited")
  )
    return "That's wonderful to hear! 🌟 Positive moments deserve to be celebrated. What's been making you feel this way? Savoring the details can help extend that feeling.";
  if (
    lower.includes("exhaust") ||
    lower.includes("tired") ||
    lower.includes("drain")
  )
    return "Exhaustion is your body's way of asking for care. Rest is productive — please don't feel guilty about it. When did you last take some time just for yourself?";
  if (
    lower.includes("sad") ||
    lower.includes("depress") ||
    lower.includes("cry") ||
    lower.includes("low")
  )
    return "I hear you. Feeling sad is a valid human experience, and it's okay to sit with it for a moment. You don't have to push through alone. Would you like to talk about what's weighing on you?";
  if (
    lower.includes("angry") ||
    lower.includes("frustrated") ||
    lower.includes("furious")
  )
    return "Anger often signals that something important to you has been affected. That's worth paying attention to. Would it help to talk through what triggered this feeling?";
  return "Thank you for sharing that with me. Your feelings are valid and I'm here to listen. Could you tell me a bit more about how you're feeling right now?";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
        <RiMentalHealthLine size={14} className="text-teal-400" />
      </div>
      <div className="bg-[#1a1a1f] border border-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-teal-400/60"
              style={{
                animation: "bounce 1.2s infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Message bubble ────────────────────────────────────────────────────────────

function MessageBubble({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div
      className={`flex items-end gap-2 mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mb-5">
          <RiMentalHealthLine size={14} className="text-teal-400" />
        </div>
      )}

      <div
        className={`flex flex-col gap-1 max-w-[78%] ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
            isUser
              ? "bg-teal-500 text-white rounded-br-sm"
              : "bg-[#1a1a1f] border border-white/[0.06] text-gray-200 rounded-bl-sm"
          }`}
        >
          {msg.text}
        </div>
        <span className="text-[10px] text-gray-600 px-1">
          {formatTime(msg.timestamp)}
        </span>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function MentalWellnessChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, open]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // ── Send message ────────────────────────────────────────────────────────────
  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setShowPrompts(false);
    setInput("");

    const userMsg = {
      id: Date.now(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    // ── Replace this block with your API call ─────────────────────────────
    // Example:
    // try {
    //   const { data } = await axios.post("/api/mood/analyze", { message: trimmed });
    //   const reply = data.reply;
    // } catch { const reply = "I'm having trouble connecting right now. Please try again."; }

    let reply = "";

    try {
      const res = await analyzeMood(trimmed);

      reply = `
Mood Detected: ${res.data.mood}

${res.data.response}
`;
    } catch (error) {
      reply = "Sorry, I'm having trouble analyzing your mood right now.";
    }
    // ─────────────────────────────────────────────────────────────────────

    setTyping(false);
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + 1, role: "bot", text: reply, timestamp: new Date() },
    ]);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const hasOnlyWelcome = messages.length === 1 && messages[0].id === "welcome";

  return (
    <>
      {/* ── Bounce keyframe (injected once) ────────────────────────────────── */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        .chat-panel { animation: slideUp 0.22s ease-out forwards; }
      `}</style>

      {/* ── Floating trigger button ─────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Mental Wellness Chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-400 active:scale-95 shadow-xl shadow-teal-500/30 flex items-center justify-center transition-all duration-200"
      >
        {open ? (
          <RiCloseLine size={24} className="text-white" />
        ) : (
          <RiMentalHealthLine size={24} className="text-white" />
        )}

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-teal-400 opacity-30 animate-ping" />
        )}
      </button>

      {/* ── Chat panel ─────────────────────────────────────────────────────── */}
      {open && (
        <div
          className="chat-panel fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/[0.07]"
          style={{ height: "520px", background: "#141418" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06] flex-shrink-0"
            style={{ background: "#141418" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                <RiMentalHealthLine size={16} className="text-teal-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white leading-tight">
                  Mental Wellness Assistant
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-gray-500">
                    Online · Here for you
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.07] transition-all duration-150"
              aria-label="Close chat"
            >
              <RiCloseLine size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {/* Empty / welcome state */}
            {hasOnlyWelcome && (
              <div className="flex flex-col items-center text-center pt-2 pb-5">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center mb-3">
                  <RiEmotionHappyLine size={28} className="text-teal-400" />
                </div>
                <p className="text-xs text-gray-500 max-w-[220px] leading-relaxed">
                  A safe space to check in with yourself.
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}

            {typing && <TypingIndicator />}

            <div ref={bottomRef} />
          </div>

          {/* Suggested prompts */}
          {showPrompts && (
            <div className="px-4 pb-3 flex-shrink-0">
              <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-wider">
                Suggested
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1a1a1f] border border-white/[0.07] text-gray-400 hover:text-teal-300 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-150"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="px-4 pb-4 flex-shrink-0 border-t border-white/[0.05] pt-3">
            <div className="flex items-center gap-2 bg-[#1a1a1f] border border-white/[0.08] rounded-xl px-4 py-2.5 focus-within:border-teal-500/40 focus-within:ring-1 focus-within:ring-teal-500/15 transition-all duration-150">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tell me how you're feeling today..."
                className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-600 focus:outline-none"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || typing}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500 hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 flex-shrink-0"
                aria-label="Send message"
              >
                <RiSendPlaneFill size={15} className="text-white" />
              </button>
            </div>
            <p className="text-[10px] text-gray-700 text-center mt-2">
              Not a substitute for professional care.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
