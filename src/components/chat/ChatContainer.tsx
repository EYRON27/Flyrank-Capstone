"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Send, Square, ArrowDown, Sparkles, User } from "lucide-react";

export default function ChatContainer() {
  // Destructure headless hooks from @ai-sdk/react v4
  const {
    messages,
    sendMessage,
    stop,
    status,
  } = useChat({
    api: "/api/chat",
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPinnedRef = useRef(true);
  const [showJumpToBottom, setShowJumpToBottom] = useState(false);

  // Derived loading state from status
  const isLoading = status === "streaming" || status === "submitted";

  // Monitor scroll updates to toggle scroll pinning
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    
    // Check if user is scrolled within 30px of the bottom
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    const isAtBottom = distanceFromBottom < 30;

    isPinnedRef.current = isAtBottom;
    setShowJumpToBottom(!isAtBottom);
  };

  // Keep pinned scroll to bottom as messages arrive
  useEffect(() => {
    if (scrollRef.current && isPinnedRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const jumpToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
      isPinnedRef.current = true;
      setShowJumpToBottom(false);
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  // Determine if assistant is "thinking" (sent prompt but no tokens generated yet)
  const isThinking =
    isLoading &&
    messages.length > 0 &&
    (messages[messages.length - 1].role === "user" ||
      (messages[messages.length - 1].role === "assistant" &&
        !messages[messages.length - 1].content));

  return (
    <div className="flex flex-col h-[600px] w-full glass-panel rounded-2xl overflow-hidden relative border border-border-color">
      {/* Chat header banner */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-color bg-card-bg/50 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent-glow">
            <Sparkles size={16} className="text-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-none">FlyRank AI Advisor</h3>
            <span className="text-[10px] text-gray-500 font-semibold">Online • Streaming Chat</span>
          </div>
        </div>
        {isLoading && (
          <button
            onClick={stop}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/30 hover:border-red-500/60 bg-red-950/20 hover:bg-red-950/40 text-red-400 text-xs font-bold transition duration-200"
          >
            <Square size={10} className="fill-red-400" />
            Stop
          </button>
        )}
      </div>

      {/* Messages viewport container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 gap-3">
            <div className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center border border-accent/20">
              <Sparkles size={24} className="text-accent" />
            </div>
            <h4 className="text-sm font-bold text-white">Start a study conversation</h4>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Ask about task planning, co-study setups, custom workspace configurations, or dashboard metrics diagnostics.
            </p>
          </div>
        ) : (
          messages.map((message) => {
            const isUser = message.role === "user";
            return (
              <div
                key={message.id}
                className={`flex gap-3 max-w-[85%] ${
                  isUser ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center border text-[10px] font-bold ${
                    isUser
                      ? "bg-accent-light border-accent/20 text-accent"
                      : "bg-card-bg border-border-color text-gray-400"
                  }`}
                >
                  {isUser ? <User size={12} /> : "AI"}
                </div>

                {/* Message Bubble */}
                <div
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? "bg-accent text-white rounded-tr-none shadow-md shadow-accent-glow"
                      : "bg-card-bg/60 border border-border-color text-gray-300 rounded-tl-none whitespace-pre-wrap"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            );
          })
        )}

        {/* Thinking Transition Indicator Bubble */}
        {isThinking && (
          <div className="flex gap-3 max-w-[80%] mr-auto items-center animate-in fade-in slide-in-from-left-2 duration-300">
            <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center bg-card-bg border border-border-color text-[10px] text-gray-400 font-bold">
              AI
            </div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-card-bg/60 border border-border-color text-xs text-gray-500 flex items-center gap-2">
              <span className="flex space-x-1">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-200"></span>
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-300"></span>
              </span>
              <span>Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Jump to bottom hovering affordance */}
      {showJumpToBottom && messages.length > 0 && (
        <button
          onClick={jumpToBottom}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-bold shadow-lg shadow-accent-glow transition duration-200 border border-accent/20"
        >
          <ArrowDown size={12} />
          Jump to latest
        </button>
      )}

      {/* Message input panel */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border-color bg-card-bg/30 backdrop-blur-md flex items-end gap-3"
      >
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Ask FlyRank AI study companion..."
          rows={1}
          className="flex-1 min-h-[44px] max-h-[120px] bg-background/50 border border-border-color rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-accent resize-none transition duration-200"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="h-[44px] w-[44px] shrink-0 rounded-xl bg-accent hover:bg-accent-hover disabled:bg-gray-800 disabled:text-gray-600 disabled:shadow-none text-white flex items-center justify-center shadow-md shadow-accent-glow transition duration-200"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
