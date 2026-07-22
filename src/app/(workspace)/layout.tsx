"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  NotebookTabs,
  HeartPulse,
  Settings,
  Sparkles,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Tasks", href: "/tasks", icon: CheckSquare },
    { label: "Study Rooms", href: "/study-rooms", icon: Users },
    { label: "Notes", href: "/notes", icon: NotebookTabs },
    { label: "API Health", href: "/health-check", icon: HeartPulse },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-72 glass-panel border-r border-border-color h-full p-6 transition-transform duration-300 transform lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent-glow">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">
              SyncStudy AI
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 mb-2">
            Workspace
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 border ${
                  isActive
                    ? "bg-accent-light border-accent text-accent font-bold"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-card-hover"
                }`}
              >
                <Icon size={18} className={isActive ? "text-accent" : "text-gray-400"} />
                <span className="text-sm flex-1">{item.label}</span>
                {isActive && <ChevronRight size={14} className="text-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-border-color flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 text-accent font-bold text-sm">
            AD
          </div>
          <div>
            <div className="text-xs font-bold text-white">Aaron Dev</div>
            <div className="text-[10px] text-gray-400">Intern Student</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header navigation bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-border-color bg-background/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu size={22} />
            </button>
            <h2 className="font-extrabold text-lg text-white">
              {menuItems.find((item) => item.href === pathname)?.label || "Workspace"}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="badge text-[10px] py-1 px-2.5">AI Connected</span>
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-white transition duration-200"
            >
              Public Home
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
