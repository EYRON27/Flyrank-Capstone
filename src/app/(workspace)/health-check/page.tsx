import React from "react";
import { HeartPulse, Activity, Cpu, Server, Wifi, RefreshCw } from "lucide-react";

export const dynamic = "force-dynamic";

interface HealthData {
  status: string;
  statusCode: number;
  latency: string;
  apiProvider: string;
  data: {
    name: string;
    email: string;
    company: string;
  } | null;
  timestamp: string;
}

async function getHealthData(): Promise<HealthData> {
  const startTime = Date.now();
  try {
    // Fetch user 1 as a live API test payload
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: "no-store",
    });
    const latency = Date.now() - startTime;
    
    if (!res.ok) {
      throw new Error(`API responded with code ${res.status}`);
    }
    
    const data = await res.json();
    return {
      status: "Optimal",
      statusCode: res.status,
      latency: `${latency}ms`,
      apiProvider: "External JSONPlaceholder Mock Gateway",
      data: {
        name: data.name,
        email: data.email,
        company: data.company?.name || "N/A",
      },
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    return {
      status: "Degraded / Unresponsive",
      statusCode: 503,
      latency: "Timeout",
      apiProvider: "External JSONPlaceholder Mock Gateway",
      data: null,
      timestamp: new Date().toISOString(),
    };
  }
}

export default async function HealthCheck() {
  const health = await getHealthData();
  const isHealthy = health.statusCode === 200;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">System Status</h1>
        <p className="text-gray-400 text-sm">Real-time health checking and endpoint verification diagnostic dashboard.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status Indicator Card */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow rounded-full blur-[60px] pointer-events-none" />
          
          <div className="z-10 flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Workspace Gateway</span>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg ${
                isHealthy 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10" 
                  : "bg-red-500/10 border-red-500/30 text-red-400 shadow-red-500/10"
              }`}>
                <HeartPulse size={24} className={isHealthy ? "animate-pulse" : ""} />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white">{health.status}</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  HTTP Status {health.statusCode}
                </span>
              </div>
            </div>
          </div>

          <div className="z-10 flex items-center gap-1.5 text-xs text-gray-500 font-semibold border-t border-border-color pt-4">
            <Activity size={14} />
            Latency: <strong className="text-accent">{health.latency}</strong>
          </div>
        </div>

        {/* System Diagnostics Specs */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-base text-white">Node Specifications & Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-3">
              <Server size={18} className="text-accent" />
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">Gateway Provider</div>
                <div className="text-xs font-bold text-white mt-0.5">{health.apiProvider}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-3">
              <Cpu size={18} className="text-accent" />
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">Execution Model</div>
                <div className="text-xs font-bold text-white mt-0.5">Next.js Dynamic Server Component</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-3">
              <Wifi size={18} className="text-accent" />
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">Network Sync</div>
                <div className="text-xs font-bold text-white mt-0.5">Vercel Edge Network Router</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background/50 border border-border-color flex items-center gap-3">
              <RefreshCw size={18} className="text-accent animate-spin duration-[6s]" />
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase">Check Timestamp</div>
                <div className="text-[10px] font-bold text-white mt-0.5">{health.timestamp}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Fetched Payload Container */}
        <div className="lg:col-span-3 glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-base text-white">Live Fetched Diagnostics Payload</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            The data payload rendered below is fetched live in real-time on the server on every page request directly from the mock data gateway:
          </p>

          <pre className="p-4 rounded-xl bg-background/80 border border-border-color text-xs font-mono text-accent leading-relaxed overflow-x-auto">
            {JSON.stringify(health, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
