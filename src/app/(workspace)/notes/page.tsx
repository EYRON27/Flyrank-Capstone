import React from "react";
import { NotebookTabs, Plus, Search, FileText } from "lucide-react";

export default function Notes() {
  const noteList = [
    { title: "React Server Components Architecture", date: "July 20, 2026", length: "4 mins read" },
    { title: "FlyRank Backend API Specification", date: "July 18, 2026", length: "8 mins read" },
    { title: "Next.js Custom Layouts and Route Groups", date: "July 15, 2026", length: "5 mins read" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Notes Manager</h1>
          <p className="text-gray-400 text-sm">Write, organize, and sync your study documentation.</p>
        </div>
        <button className="btn-primary py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-accent to-accent-hover text-white flex items-center gap-2 hover:translate-y-[-1px] transition">
          <Plus size={16} />
          New Note
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar notes list */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-background/50 border border-border-color text-xs text-white placeholder-gray-500 outline-none focus:border-accent"
            />
            <Search size={14} className="text-gray-500 absolute left-3.5 top-3" />
          </div>

          <div className="flex flex-col gap-2.5">
            {noteList.map((n, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex flex-col gap-1.5 cursor-pointer transition ${
                  idx === 0
                    ? "bg-accent-light/50 border-accent/40"
                    : "bg-background/30 border-border-color hover:bg-card-hover"
                }`}
              >
                <div className="text-xs font-bold text-white line-clamp-1">{n.title}</div>
                <div className="flex justify-between text-[10px] text-gray-500 font-semibold">
                  <span>{n.date}</span>
                  <span>{n.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note editor viewport mockup */}
        <div className="lg:col-span-2 glass-panel p-8 rounded-2xl flex flex-col gap-6">
          <div className="border-b border-border-color pb-4">
            <h2 className="text-xl font-extrabold text-white">
              React Server Components Architecture
            </h2>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 font-semibold">
              <span>Author: Aaron Dev</span>
              <span>Updated: July 20, 2026</span>
              <span className="badge text-[9px] py-0.5 px-2">Published</span>
            </div>
          </div>

          <article className="prose prose-invert text-sm text-gray-400 leading-relaxed flex flex-col gap-4">
            <p>
              React Server Components (RSC) represent a fundamental shift in how we build React applications. By default, components in the Next.js App Router are Server Components.
            </p>
            <p>
              This allows them to be rendered on the server, reducing the amount of JavaScript sent to the client and improving initial page load times.
            </p>
            <h4 className="font-bold text-white text-base mt-2">Key Advantages:</h4>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-xs">
              <li>Zero client-side JS bundle impact for server rendering logic.</li>
              <li>Direct server-side resources access (database, filesystems).</li>
              <li>Preserved client-side state during navigation updates.</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
