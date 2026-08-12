import { useEffect, useRef, useState } from "react";
import axios from "axios";

function AiChatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      content:
        "Hello! 👋 I'm AgroVision AI. I can help you with crops, irrigation, soil, fertilizers, diseases and general farming questions.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto scroll whenever new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Send message
  const askAI = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/ai/aichatbot",
        {
          message: userMessage,
        },
      );

      console.log("AI Response =", res.data.data.reasoning);

      const aiReply =
        res.data?.data?.reasoning ||
        res.data?.data?.response ||
        res.data?.reply ||
        res.data?.response;

      if (!aiReply) {
        throw new Error("AI response not found");
      }

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          content: aiReply,
        },
      ]);
    } catch (error) {
      console.error("AI Error =", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          content:
            "Sorry 😔 I couldn't process your request right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);

      // Focus input again
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  // Enter = send
  // Shift + Enter = new line
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  // Clear conversation
  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: "ai",
        content:
          "Hello! 👋 I'm AgroVision AI. How can I help you with your farming question?",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-3 py-4 sm:px-5 sm:py-6">
      <div className="mx-auto flex h-[calc(100vh-2rem)] max-w-5xl flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl sm:h-[calc(100vh-3rem)]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* AI Avatar */}
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-xl shadow-lg">
              🌱
            </div>

            <div>
              <h1 className="text-base font-bold text-slate-800 sm:text-lg">
                AgroVision AI
              </h1>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                <span className="text-xs text-slate-500">
                  AI Farming Assistant
                </span>
              </div>
            </div>
          </div>

          {/* Clear button */}
          <button
            onClick={clearChat}
            className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-500 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 sm:px-4"
          >
            Clear Chat
          </button>
        </div>

        {/* =====================================================
            CHAT AREA
        ====================================================== */}

        <div className="flex-1 overflow-y-auto bg-slate-50/70 px-3 py-5 sm:px-6 sm:py-7">
          <div className="mx-auto max-w-3xl space-y-5">
            {messages.map((msg) => {
              const isUser = msg.role === "user";

              return (
                <div
                  key={msg.id}
                  className={`flex w-full ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[88%] items-end gap-2 sm:max-w-[75%] ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm shadow-sm sm:h-9 sm:w-9 ${
                        isUser ? "bg-sky-100" : "bg-emerald-100"
                      }`}
                    >
                      {isUser ? "👤" : "🌱"}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-sm sm:px-5 sm:py-3.5 ${
                        isUser
                          ? "rounded-br-md bg-gradient-to-r from-sky-500 to-emerald-500 text-white"
                          : "rounded-bl-md border border-slate-100 bg-white text-slate-700"
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words text-sm leading-6 sm:text-[15px]">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* =================================================
                AI TYPING
            ================================================== */}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-end gap-2">
                  {/* AI avatar */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm shadow-sm sm:h-9 sm:w-9">
                    🌱
                  </div>

                  {/* Typing bubble */}
                  <div className="rounded-2xl rounded-bl-md border border-slate-100 bg-white px-5 py-4 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"></span>

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{
                          animationDelay: "150ms",
                        }}
                      ></span>

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{
                          animationDelay: "300ms",
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Auto scroll target */}
            <div ref={messagesEndRef}></div>
          </div>
        </div>

        {/* =====================================================
            INPUT AREA
        ====================================================== */}

        <div className="border-t border-slate-100 bg-white px-3 py-3 sm:px-5 sm:py-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-50">
              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask AgroVision AI anything..."
                rows={1}
                className="max-h-32 min-h-[46px] flex-1 resize-none bg-transparent px-3 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-[15px]"
              />

              {/* Send Button */}
              <button
                onClick={askAI}
                disabled={loading || !message.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-lg text-white shadow-md transition hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
                title="Send message"
              >
                ➤
              </button>
            </div>

            {/* Bottom info */}
            <div className="mt-2 flex items-center justify-between px-1">
              <p className="text-[10px] text-slate-400 sm:text-xs">
                Enter to send • Shift + Enter for new line
              </p>

              <p className="hidden text-[10px] text-slate-400 sm:block sm:text-xs">
                Powered by AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiChatbot;
