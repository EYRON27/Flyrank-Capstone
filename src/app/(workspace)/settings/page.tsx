import React from "react";
import { Settings, User, Sliders, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Workspace Settings</h1>
        <p className="text-gray-400 text-sm">Configure your personal profile details and study parameters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent-light text-accent border border-accent/20 text-sm font-bold w-full text-left">
            <User size={16} />
            Profile & Info
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-card-hover text-sm font-semibold w-full text-left">
            <Sliders size={16} />
            Preferences
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-card-hover text-sm font-semibold w-full text-left">
            <Bell size={16} />
            Notifications
          </button>
        </div>

        {/* Configuration Form */}
        <div className="lg:col-span-2 glass-panel p-8 rounded-2xl flex flex-col gap-6">
          <h3 className="font-bold text-lg text-white">Profile Information</h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Aaron Dev"
                className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border-color text-sm text-white placeholder-gray-500 outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="aaron@flyrank.ai"
                className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border-color text-sm text-white placeholder-gray-500 outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Workspace Role
              </label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border-color text-sm text-white outline-none focus:border-accent">
                <option value="intern">Frontend AI Engineer Intern</option>
                <option value="student">Student / Cohort Member</option>
                <option value="moderator">Workspace Moderator</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-border-color flex justify-end">
            <button className="btn-primary py-2.5 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-accent to-accent-hover text-white">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
