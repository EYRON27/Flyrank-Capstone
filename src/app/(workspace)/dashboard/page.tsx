import React from "react";
import { Clock, Users, BookOpen, AlertCircle } from "lucide-react";
import ChatContainer from "@/components/chat/ChatContainer";

export default function Dashboard() {
  const stats = [
    { label: "Today's Study Target", value: "4 hours", detail: "2.5h completed", icon: Clock },
    { label: "Active Study Groups", value: "3 Rooms", detail: "5 mates online", icon: Users },
    { label: "AI Suggestions Used", value: "18 prompts", detail: "Avg 96% helpful", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Banner */}
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-glow rounded-full blur-[100px] pointer-events-none" />
        <div className="z-10 relative">
          <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
            Workspace Hub
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Welcome back, Aaron!
          </h1>
          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            Your study rooms are active, and the AI assistant is fully synchronized with your current note folders.
          </p>
        </div>
      </div>

      {/* Grid of Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</span>
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center border border-accent/20">
                  <Icon size={20} className="text-accent" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-accent font-semibold mt-1">{s.detail}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Workspace Activity & Streaming Chat UI Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Workspace Activities List */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-bold text-lg text-white mb-4">Workspace Activities</h3>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border-color flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div className="text-xs font-bold text-white">Algorithms Group Session</div>
                </div>
                <p className="text-[11px] text-gray-500">Group Room #4 • Active co-study room with 5 peers.</p>
                <button className="w-full py-2 rounded-xl bg-accent-light text-accent border border-accent/20 text-xs font-bold hover:bg-accent hover:text-white transition duration-200">
                  Join Room
                </button>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-border-color flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                  <div className="text-xs font-bold text-gray-400">Task: System Architecture Review</div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Completed 2 hours ago</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
            <h3 className="font-bold text-base text-white">AI Assistant Info</h3>
            <div className="p-4 rounded-xl bg-accent-light border border-accent/10 flex gap-3">
              <AlertCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Streaming Mode</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our system calls Claude 3.5 Sonnet using Next.js route streaming. Responses visibly render token-by-token.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Central Chat Interaction Widget */}
        <div className="lg:col-span-2">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}
