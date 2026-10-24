"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import {
  ChatMessage,
  INITIAL_BOT_MESSAGE,
  SUGGESTED_QUESTIONS,
  getChatbotResponse,
} from "@/lib/chatbot/rules";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

let messageCounter = 0;
function createMessageId(prefix: string) {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

export function FloatingActions() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    INITIAL_BOT_MESSAGE,
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: createMessageId("user"),
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) {
      setInputValue("");
    }
    setIsTyping(true);

    // Simulate natural brief delay for rule lookup
    setTimeout(async () => {
      const botResponse = await getChatbotResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([INITIAL_BOT_MESSAGE]);
    setInputValue("");
  };

  // WhatsApp wa.me URL
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <aside
      aria-label="Interactive Floating Actions"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none"
    >
      {/* Chatbot Window Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="chatbot-heading"
          className="w-[calc(100vw-2.5rem)] sm:w-[390px] h-[520px] max-h-[calc(100vh-140px)] bg-ivory rounded-xl border border-sand shadow-2xl flex flex-col overflow-hidden mb-1 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-forest text-white px-4 py-3.5 flex items-center justify-between border-b border-forest-light shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D4A359] text-[#0C1E15] flex items-center justify-center font-bold shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3
                  id="chatbot-heading"
                  className="font-serif text-sm font-bold tracking-wide text-white"
                >
                  Yogi Goals Assistant
                </h3>
                <p className="text-[10px] text-[#F7E7CD] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Mandrem Shala • Rule-Based Demo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                aria-label="Reset chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-[#FAF8F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-forest/15 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl p-3 leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-forest text-white rounded-tr-none font-medium"
                      : "bg-white text-[#18201A] border border-border/80 rounded-tl-none font-normal"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Quick Link Pills */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-border/60 flex flex-wrap gap-1.5">
                      {msg.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-forest/10 hover:bg-forest hover:text-white text-[11px] font-bold text-forest transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}

                  <span
                    className={`block text-[9px] mt-1.5 ${
                      msg.sender === "user" ? "text-white/70 text-right" : "text-[#4F5B51]"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[11px] text-sage-dark pl-8">
                <span className="inline-flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-bounce [animation-delay:0.3s]" />
                </span>
                <span>Yogi Goals is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions Chips */}
          <div className="px-3 py-2 bg-sand/30 border-t border-sand/50 overflow-x-auto no-scrollbar shrink-0">
            <p className="text-[10px] uppercase font-semibold text-charcoal/60 tracking-wider mb-1.5">
              Suggested Questions:
            </p>
            <div className="flex items-center gap-1.5 whitespace-nowrap overflow-x-auto pb-1">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 text-[11px] bg-white border border-sand text-charcoal hover:bg-forest hover:text-ivory rounded-full transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-sand flex items-center gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about classes, YTTC, or retreats..."
              className="flex-1 bg-ivory/50 border border-sand rounded-md px-3 py-2 text-xs text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
              aria-label="Type your message to Yogi Goals Assistant"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="p-2 rounded-md bg-forest text-ivory hover:bg-forest-light disabled:opacity-40 disabled:cursor-not-allowed transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label="Send question"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 
        Two Floating Action Buttons in exact vertical order:
        1. Chatbot (Top)
        2. WhatsApp (Bottom)
      */}
      <div className="flex flex-col items-center gap-2.5">
        {/* 1. Chatbot Button (Top) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-forest text-ivory hover:bg-forest-light shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 border border-sand/40 relative group"
          aria-label={
            isOpen ? "Close Yogi Goals chat assistant" : "Open Yogi Goals chat assistant"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-sand" />
          ) : (
            <MessageSquare className="w-5 h-5 text-sand group-hover:rotate-6 transition-transform" />
          )}
          <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-charcoal text-ivory text-[11px] font-medium px-2.5 py-1 rounded shadow-md pointer-events-none">
            {isOpen ? "Close Assistant" : "Ask Yogi Goals"}
          </span>
        </button>

        {/* 2. WhatsApp Button (Bottom) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 border border-white/30 relative group"
          aria-label="Chat with Yogi Goals on WhatsApp (Opens in new tab)"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.9 8 8.5 8 9.73C8 10.96 8.89 12.14 9.01 12.31C9.14 12.47 10.77 14.97 13.25 16.05C13.84 16.31 14.3 16.46 14.66 16.58C15.26 16.77 15.8 16.74 16.23 16.68C16.71 16.61 17.7 16.08 17.91 15.5C18.12 14.92 18.12 14.42 18.06 14.32C18 14.22 17.86 14.16 17.63 14.05C17.41 13.94 16.3 13.4 16.1 13.32C15.89 13.25 15.74 13.21 15.59 13.44C15.44 13.67 15.01 14.18 14.88 14.33C14.76 14.48 14.63 14.5 14.41 14.39C14.18 14.27 13.45 14.03 12.59 13.26C11.92 12.66 11.46 11.92 11.34 11.7C11.21 11.47 11.32 11.36 11.44 11.24C11.54 11.14 11.67 10.97 11.78 10.83C11.89 10.69 11.93 10.59 12.01 10.42C12.09 10.26 12.05 10.11 11.99 10C11.93 9.89 11.48 8.78 11.29 8.33C11.11 7.89 10.92 7.95 10.78 7.94C10.65 7.94 10.5 7.94 10.35 7.94C10.2 7.94 9.95 8 9.74 8.23C9.53 8.46 8.94 9.01 8.94 10.13C8.94 11.25 9.76 12.33 9.87 12.49L9.53 7.34Z" />
          </svg>
          <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-charcoal text-ivory text-[11px] font-medium px-2.5 py-1 rounded shadow-md pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
}
