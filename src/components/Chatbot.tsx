// components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmedInput },
    ];

    setError(null);
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      const reply = typeof data.reply === "string" ? data.reply.trim() : "";

      if (reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      } else {
        throw new Error("Missing reply from assistant");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Connection issue. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I ran into an issue while answering. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot">
      {isOpen && (
        <section className="chatbot__window" aria-label="Portfolio assistant">
          <header className="chatbot__header">
            <div className="chatbot__header-content">
              <p className="chatbot__eyebrow">AI Assistant</p>
              <h2 className="chatbot__title">Ask about my work</h2>
            </div>
            <button
              className="chatbot__close-btn"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <span aria-hidden="true">+</span>
            </button>
          </header>

          <div className="chatbot__messages" role="log" aria-live="polite">
            {messages.length === 0 && (
              <p className="chatbot__empty-state">
                Hi! Ask me anything about my experience or projects.
              </p>
            )}

            {messages.map((msg, idx) => (
              <article
                key={idx}
                className={`chatbot__bubble chatbot__bubble--${msg.role}`}
              >
                {msg.content}
              </article>
            ))}

            {isLoading && (
              <div className="chatbot__bubble chatbot__bubble--assistant chatbot__bubble--typing">
                <div
                  className="chatbot__typing"
                  aria-label="Assistant is typing"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot__input-wrap">
            <input
              ref={inputRef}
              className="chatbot__input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button
              className="chatbot__send-btn"
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </div>

          {error && <p className="chatbot__error">{error}</p>}
        </section>
      )}

      <button
        className={`chatbot__toggle-btn ${isOpen ? "chatbot__toggle-btn--active" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="chatbot__toggle-icon" aria-hidden="true">
          {isOpen ? "+" : "AI"}
        </span>
      </button>
    </div>
  );
}
