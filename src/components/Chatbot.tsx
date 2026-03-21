"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslate } from "@tolgee/react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Chatbot() {
  const { t } = useTranslate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t("chatbot.empty_state") },
  ]);
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
      setError(t("chatbot.error"));
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t("chatbot.error_reply"),
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
              <div className="chatbot__eyebrow-row">
                <p className="chatbot__eyebrow">{t("chatbot.eyebrow")}</p>
                <span className="chatbot__beta-tag">Beta</span>
              </div>
            </div>
            <button
              className="chatbot__close-btn"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t("chatbot.close")}
            >
              <span aria-hidden="true">+</span>
            </button>
          </header>

          <div className="chatbot__messages" role="log" aria-live="polite">
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
                  aria-label={t("chatbot.typing")}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {error && <p className="chatbot__error">{error}</p>}

          <div className="chatbot__input-wrap">
            <input
              ref={inputRef}
              className="chatbot__input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={t("chatbot.input_placeholder")}
              disabled={isLoading}
            />
            <button
              className="chatbot__send-btn"
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
            >
              {t("chatbot.send")}
            </button>
          </div>
        </section>
      )}

      <button
        className={`chatbot__toggle-btn ${isOpen ? "chatbot__toggle-btn--active" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t("chatbot.close") : t("chatbot.open")}
      >
        <span className="chatbot__toggle-icon" aria-hidden="true">
          {isOpen ? "x" : "AI"}
        </span>
      </button>
    </div>
  );
}
