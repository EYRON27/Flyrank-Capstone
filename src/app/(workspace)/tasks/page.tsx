import React from "react";
import { CheckSquare, Clock, Plus, Trash } from "lucide-react";

export default function Tasks() {
  const dummyTasks = [
    { id: 1, title: "Initialize Capstone Next.js skeleton and router", status: "completed", tag: "Dev" },
    { id: 2, title: "Configure Tailwind v4 design custom properties", status: "completed", tag: "Design" },
    { id: 3, title: "Connect repository to Vercel and check deployment", status: "pending", tag: "DevOps" },
    { id: 4, title: "Set up mockup API health check data fetching", status: "pending", tag: "API" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Task Management</h1>
          <p className="text-gray-400 text-sm">Organize your milestone steps and pomodoro sessions.</p>
        </div>
        <button className="btn-primary py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-accent to-accent-hover text-white flex items-center gap-2 hover:translate-y-[-1px] transition">
          <Plus size={16} />
          Create Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task List Panel */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-lg text-white mb-2">Milestone List</h3>
          
          <div className="flex flex-col gap-3">
            {dummyTasks.map((t) => (
              <div key={t.id} className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={t.status === "completed"}
                    readOnly
                    className="w-4 h-4 rounded border-gray-600 bg-background text-accent accent-accent focus:ring-accent"
                  />
                  <div>
                    <div className={`text-sm font-bold ${t.status === "completed" ? "line-through text-gray-500" : "text-white"}`}>
                      {t.title}
                    </div>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent-light border border-accent/20 text-accent">
                      {t.tag}
                    </span>
                  </div>
                </div>

                <button className="text-gray-500 hover:text-red-400 p-2 transition">
                  <Trash size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Timer Panel */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
          <h3 className="font-bold text-lg text-white self-start">Focus Timer</h3>
          
          <div className="w-40 h-40 rounded-full border-4 border-accent-glow flex flex-col items-center justify-center relative">
            <div className="absolute inset-0.5 rounded-full border-2 border-accent border-t-transparent animate-spin duration-[10s]" />
            <span className="text-3xl font-extrabold text-white">25:00</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Pomodoro</span>
          </div>

          <div className="flex gap-3 w-full">
            <button className="flex-1 py-3 rounded-xl bg-accent text-white font-bold text-xs hover:bg-accent-hover transition duration-200">
              Start
            </button>
            <button className="flex-1 py-3 rounded-xl bg-card-bg border border-border-color text-gray-400 font-bold text-xs hover:text-white transition duration-200">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
