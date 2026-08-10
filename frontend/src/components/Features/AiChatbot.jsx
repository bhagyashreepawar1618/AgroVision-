import { useState } from "react";
import axios from "axios";

function AiChatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/v1/ai/aichatbot",
        {
          message,
        },
      );

      console.log("res is=", res.data.reply);
      setReply(res.data.reply);
    } catch (error) {
      console.log(error);
      setReply("Unable to connect with AgroVision AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🤖 AgroVision AI
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-800">
            AI Farming Assistant
          </h1>

          <p className="mt-3 text-slate-500">
            Ask anything about farming, crops, irrigation and more.
          </p>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-2xl">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your farming question..."
            rows="5"
            className="w-full resize-none rounded-2xl border border-slate-200 p-5 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
          />

          <button
            onClick={askAI}
            disabled={loading}
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? "Thinking..." : "Ask AgroVision AI 🤖"}
          </button>

          {reply && (
            <div className="mt-8 rounded-2xl bg-emerald-50 p-6">
              <h2 className="font-bold text-emerald-700">🌱 AgroVision AI</h2>

              <p className="mt-4 whitespace-pre-line leading-7 text-slate-700">
                {reply}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiChatbot;
