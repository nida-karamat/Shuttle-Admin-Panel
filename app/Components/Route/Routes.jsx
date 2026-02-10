"use client";

import React, { useState } from "react";
import StopManagement from "./StopManagement";
import ViewRouteAnalytics from "./ViewRouteAnalytics";

export default function RoutesPanel({ routes = [], selectedIndex = 0, onSelect = () => {} }) {
  const selected = routes[selectedIndex] || null;
  const [activeTab, setActiveTab] = useState("basics");

  return (
    <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 items-stretch">
      {/* Left: compact vertical route list */}
      <aside className="w-full lg:w-40 h-fit px-2 sm:px-0 lg:px-0">
        <div className="space-y-1 sm:space-y-2 sticky top-6 flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto pb-2 lg:pb-0">
          {routes.map((r, i) => (
            <button
              key={r.name + i}
              onClick={() => onSelect(i)}
              className={`shrink-0 lg:shrink text-left px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition flex flex-col gap-0.5 sm:gap-1 items-start whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                i === selectedIndex
                  ? "bg-[#127E88] text-white shadow"
                  : "bg-white text-gray-700 border border-transparent hover:border-gray-100"
              }`}
            >
              <span className="font-medium text-xs sm:text-sm">{r.name}</span>
              <span
                className={`text-[10px] sm:text-xs ${i === selectedIndex ? "text-emerald-200" : "text-gray-400"}`}
              >{`${r.stop}`}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main detail area */}
      <main className="flex-1 bg-white rounded-lg sm:rounded-2xl p-3 sm:p-4 shadow-sm mx-2 sm:mx-0 lg:mx-0">
        {selected ? (
          <div className="space-y-3 sm:space-y-4">
            {/* Header: title + summary cards inline + close button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">
                    {selected.name}
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    Route ID: R1
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shrink-0 whitespace-nowrap">
                  Active
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-0">
                <div className="bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs whitespace-nowrap shrink-0">
                  <div className="text-[10px] sm:text-xs text-gray-400">DISTANCE</div>
                  <div className="font-semibold text-xs sm:text-sm">7.8 km</div>
                </div>
                <div className="bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs whitespace-nowrap shrink-0">
                  <div className="text-[10px] sm:text-xs text-gray-400">DURATION</div>
                  <div className="font-semibold text-xs sm:text-sm">18 mins</div>
                </div>
                <div className="bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs whitespace-nowrap shrink-0">
                  <div className="text-[10px] sm:text-xs text-gray-400">STOPS</div>
                  <div className="font-semibold text-xs sm:text-sm">{selected.stops.length}</div>
                </div>
                <div className="hidden sm:block bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs whitespace-nowrap shrink-0">
                  <div className="text-[10px] sm:text-xs text-gray-400">ON-TIME RATE</div>
                  <div className="font-semibold text-xs sm:text-sm">98%</div>
                </div>
                <div className="hidden sm:block bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs whitespace-nowrap shrink-0">
                  <div className="text-[10px] sm:text-xs text-gray-400">COMPLAINT</div>
                  <div className="font-semibold text-xs sm:text-sm">96%</div>
                </div>
                <button
                  onClick={() => onSelect(null)}
                  className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="pt-1 border-b border-gray-100 flex items-center justify-between overflow-x-auto pb-1">
              <nav className="flex items-center gap-2 sm:gap-4">
                <button 
                  onClick={() => setActiveTab("basics")}
                  className={`flex items-center gap-2 py-2 px-2 text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "basics"
                      ? "text-teal-700 border-b-2 border-teal-700"
                      : "text-gray-600"
                  }`}
                >
                  Route Basics
                </button>
                <button 
                  onClick={() => setActiveTab("stops")}
                  className={`flex items-center gap-2 py-2 px-2 text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "stops"
                      ? "text-teal-700 border-b-2 border-teal-700"
                      : "text-gray-600"
                  }`}
                >
                  Stops Management
                </button>
                <button 
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center gap-2 py-2 px-2 text-sm ${
                    activeTab === "analytics"
                      ? "text-teal-700 border-b-2 border-teal-700"
                      : "text-gray-600"
                  }`}
                >
                  View Route Analytics
                </button>
              </nav>
              <button className="bg-[#127E88] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0f6170] transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L9.828 15H7v-2.828l8.586-8.586z" />
                </svg>
                Edit Route Details
              </button>
            </div>

            {/* Route Basics form */}
            {activeTab === "basics" && (
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500">ROUTE NAME</label>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    {selected.name}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500">DESCRIPTION</label>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">{`${selected.stops.length} stops • ${selected.avg || "-"}`}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500">ROUTE ID</label>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    R1 (Auto-generated)
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500">SERVICE START</label>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    06:00 AM
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500">SERVICE END</label>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    10:00 AM
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Stops Management Tab */}
            {activeTab === "stops" && (
              <div className="mt-6">
                <StopManagement route={selected} />
              </div>
            )}

            {/* View Route Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="mt-6">
                <ViewRouteAnalytics View={selected} />
              </div>
            )}
          </div>
        ) : (
          <div className="text-sm text-gray-500">
            Select a route to view details
          </div>
        )}
      </main>
    </div>
  );
}
