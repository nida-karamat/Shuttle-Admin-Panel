"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className=" bg-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between fixed top-0 left-0 md:left-64 right-0 z-10">
      {/* Left - Title */}
      <div>
        <h1 className="text-lg sm:text-2xl font-bold text-gray-800"></h1>
      </div>

      {/* Right - Search, Notification, Profile */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-6 shrink-0">
        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-white rounded-2xl px-2 sm:px-4 py-2 w-40 sm:w-48 md:w-64 border border-gray-300">
          <Search className="text-gray-400 w-4 h-4 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-xs sm:text-sm w-full placeholder-gray-400"
          />
        </div>

        {/* Mobile Search Icon */}
        <button className="sm:hidden flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-2">
          <Search className="text-gray-400 w-4 h-4" />
        </button>

        {/* Notification Icon */}
        <button className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0">
          <Bell className="text-gray-600 w-4 sm:w-5 h-4 sm:h-5" />
          {/* <span className="absolute -top-0 right-2 bg-red-500 text-white text-[8px] sm:text-[10px] rounded-full w-3.5 sm:w-2 h-3.5 sm:h-2 flex items-center justify-center">
            
          </span> */}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-1 sm:gap-3 pl-2 sm:pl-3 md:pl-6 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#127E88] flex items-center justify-center text-white text-xs sm:text-sm font-semibold shrink-0">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-xs sm:text-sm font-semibold text-gray-800">Ayesha</p>
            <p className="text-[10px] text-gray-500">Fleet Manager</p>
          </div>
          <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400 shrink-0" />
        </div>
      </div>
    </div>
  );
}
