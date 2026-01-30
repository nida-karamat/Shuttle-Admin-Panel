"use client";

import React from "react";

export default function RoutesPanel({ routes = [], selectedIndex = 0, onSelect = () => {} }) {
  const selected = routes[selectedIndex] || null;

  return (
    <div className="flex gap-6 items-start">
      {/* Left: compact vertical route list */}
      <aside className="w-60">
        <div className="space-y-3 sticky top-6">
          {routes.map((r, i) => (
            <button
              key={r.name + i}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-lg transition flex flex-col gap-1 items-start ${
                i === selectedIndex
                  ? "bg-[#127E88] text-white shadow"
                  : "bg-white text-gray-700 border border-transparent hover:border-gray-100"
              }`}
            >
              <span className="font-medium text-sm">{r.name}</span>
              <span
                className={`text-xs ${i === selectedIndex ? "text-emerald-200" : "text-gray-400"}`}
              >{`${r.stop}`}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main detail area */}
      <main className="flex-1 bg-white rounded-2xl p-6 shadow-sm ">
        {selected ? (
          <div className="space-y-6 ">
            <div className="ml-170 -mt-5 flex justify-end">
              <button
                onClick={() => onSelect(null)}
                className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md"
              >
                ✕
              </button>
            </div>
            {/* Header: title + top summary cards + edit */}
            <div className="flex items-start justify-between -mt-10">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {selected.name}
                  </h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Route ID: R1 • 
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-3">
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm">
                    <div className="text-xs text-gray-400">DISTANCE</div>
                    <div className="font-semibold">7.8 km</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm">
                    <div className="text-xs text-gray-400">DURATION</div>
                    <div className="font-semibold">18 mins</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm">
                    <div className="text-xs text-gray-400">STOPS</div>
                    <div className="font-semibold">{selected.stops.length}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm">
                    <div className="text-xs text-gray-400">ON-TIME RATE</div>
                    <div className="font-semibold">98%</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm">
                    <div className="text-xs text-gray-400">COMPLAINT</div>
                    <div className="font-semibold">96%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="pt-2 border-b border-gray-100">
              <nav className="flex items-center gap-6">
                <button className="flex items-center gap-2 py-3 px-2 text-teal-700 border-b-2 border-teal-700">
                  Route Basics
                </button>
                <button className="flex items-center gap-2 py-3 px-2 text-gray-600">
                  Stops Management
                </button>
                <button className="flex items-center gap-2 py-3 px-2 text-gray-600">
                  View Route Analytics
                </button>
              </nav>
            </div>

            {/* Route Basics form */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs text-gray-500">ROUTE NAME</label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  {selected.name}
                </div>

                <label className="text-xs text-gray-500">ROUTE ID</label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  R1 (Auto-generated)
                </div>

                <label className="text-xs text-gray-500">SERVICE START</label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  06:00 AM
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs text-gray-500">DESCRIPTION</label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">{`${selected.stops.length} stops • ${selected.avg || "-"}`}</div>

                <label className="text-xs text-gray-500">SERVICE END</label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  10:00 AM
                </div>

                <label className="text-xs text-gray-500">
                  ADDITIONAL NOTES
                </label>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">-</div>
              </div>
            </div>
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
