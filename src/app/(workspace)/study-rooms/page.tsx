import React from "react";
import { Users, Plus, Video, MessageSquare, Headphones } from "lucide-react";

export default function StudyRooms() {
  const rooms = [
    { name: "Algorithms & Complexities", count: 4, type: "video" },
    { name: "Systems Programming Study", count: 2, type: "audio" },
    { name: "UI/UX Design Review", count: 5, type: "chat" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Study Rooms</h1>
          <p className="text-gray-400 text-sm">Join real-time cooperative sessions with your cohort mates.</p>
        </div>
        <button className="btn-primary py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-accent to-accent-hover text-white flex items-center gap-2 hover:translate-y-[-1px] transition">
          <Plus size={16} />
          Create Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((r, idx) => {
          return (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-glow rounded-full blur-[50px] pointer-events-none" />
              
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent-light border border-accent/20 text-accent">
                    Active Room
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
                    <Users size={14} />
                    {r.count} online
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-white line-clamp-1 mb-2">
                  {r.name}
                </h3>
                <p className="text-xs text-gray-500">
                  Shared board and group conversation enabled.
                </p>
              </div>

              <div className="z-10 flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-accent text-white font-bold text-xs hover:bg-accent-hover transition duration-200 flex items-center justify-center gap-1.5">
                  {r.type === "video" && <Video size={14} />}
                  {r.type === "audio" && <Headphones size={14} />}
                  {r.type === "chat" && <MessageSquare size={14} />}
                  Join Session
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
