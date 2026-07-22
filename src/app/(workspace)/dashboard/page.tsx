import React from "react";
import { LayoutDashboard, Users, BookOpen, Clock, AlertCircle } from "lucide-react";

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

      {/* Placeholder Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <h3 className="font-bold text-lg text-white mb-4">Workspace Activities</h3>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <div className="flex-1">
                <div className="text-sm font-bold text-white">Algorithms Study Group Session</div>
                <div className="text-xs text-gray-500">Group Room #4 • Started 15 minutes ago</div>
              </div>
              <button className="px-4 py-2 rounded-xl bg-accent-light text-accent border border-accent/30 text-xs font-bold hover:bg-accent hover:text-white transition duration-200">
                Join Room
              </button>
            </div>

            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
              <div className="flex-1">
                <div className="text-sm font-bold text-white">Completed Task: System Architecture Review</div>
                <div className="text-xs text-gray-500">Marked complete by Aaron • 2 hours ago</div>
              </div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Closed</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-lg text-white">AI Quick Guide</h3>
          <div className="p-4 rounded-xl bg-accent-light border border-accent/20 flex gap-3">
            <AlertCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Interactive Feature</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Click any tab in the sidebar navigation to toggle routes. Each view includes responsive layouts and Tailwind styling variables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
