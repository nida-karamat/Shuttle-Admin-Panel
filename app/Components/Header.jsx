"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between fixed top-0 left-64 right-0 z-10">
      {/* Left - Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800"></h1>
      </div>

      {/* Right - Search, Notification, Profile */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search shuttles, drivers, routes..."
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Bell className="text-gray-600 w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Ayesha</p>
            <p className="text-xs text-gray-500">Fleet Manager</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
