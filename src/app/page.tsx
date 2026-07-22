import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Users, CheckSquare, BrainCircuit } from "lucide-react";

export default function Home() {
  const features = [
    { title: "Collaborative Study Rooms", desc: "Interact in real-time rooms with audio, chat, and shared whiteboards.", icon: Users },
    { title: "AI-Powered Notes", desc: "Summarize, query, and expand your notes with local or cloud AI models.", icon: BrainCircuit },
    { title: "Smart Task Management", desc: "Organize workflows, sets, and study timelines with active pomodoro tracking.", icon: CheckSquare },
    { title: "Resource Hub", desc: "Store resources, PDF documents, and study trackers all in one secure vault.", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="glass-panel sticky top-4 mx-auto max-w-7xl w-[95%] z-50 flex items-center justify-between px-6 py-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent-glow">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              SyncStudy AI
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-semibold text-gray-400 hover:text-white transition">Features</Link>
          <Link href="/health-check" className="text-sm font-semibold text-gray-400 hover:text-white transition">Health Status</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-hover text-white text-sm font-bold shadow-md shadow-accent-glow hover:translate-y-[-1px] transition duration-200">
            Enter Workspace
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-glow rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl z-10">
          <span className="px-4 py-1.5 rounded-full bg-accent-light border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            Next-Gen Study Platform
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Unify Your Study Workflows <br className="hidden sm:inline" />
            With Collaborative AI
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-medium">
            SyncStudy AI consolidates study rooms, project notes, task boards, and advanced AI assistants in a unified, premium workspace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-hover text-white text-base font-extrabold shadow-lg shadow-accent-glow flex items-center justify-center gap-2 hover:translate-y-[-2px] transition duration-200">
              Go to Dashboard
              <ArrowRight size={18} />
            </Link>
            <Link href="/health-check" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card-bg border border-border-color text-foreground text-base font-bold flex items-center justify-center gap-2 hover:bg-card-hover transition duration-200">
              Check API Health
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-border-color bg-background/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">Core Ecosystem</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything you need to accelerate your learning and coordinate study groups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center border border-accent/20">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border-color text-center text-sm text-gray-500 bg-background">
        <p>© 2026 SyncStudy AI. Built independently using advanced AI assistance for the FlyRank Internship track.</p>
      </footer>
    </div>
  );
}
