"use client";

import { useState, useMemo } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Copy } from "lucide-react";

const DEFAULT_LOCATIONS = [
  {
    id: 1,
    name: "Building A - Main Entrance",
    area: "Campus Zone 1",
    lat: "25.2048°N",
    lng: "55.2708°E",
    routes: ["Metro Loop", "City Center"],
    traffic: "High",
    status: "Active",
    time: "2 mins ago",
    createdOn: "Jan 15, 2025",
    lastUpdated: "3 mins ago",
    peakHours: "8:00 AM - 10:00 AM",
    arrivals: 24,
    category: "Campus",
    description: "Primary entrance with security checkpoint",
  },
  {
    id: 2,
    name: "West Gate",
    area: "Campus Zone 2",
    lat: "25.2062°N",
    lng: "55.2719°E",
    routes: ["Metro Loop", "Residential Loop"],
    traffic: "High",
    status: "Active",
    time: "5 mins ago",
    createdOn: "Jan 10, 2025",
    lastUpdated: "10 mins ago",
    peakHours: "7:30 AM - 9:00 AM",
    arrivals: 18,
    category: "Campus",
    description: "Secondary entrance",
  },
];

function Badge({ children, className = "" }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs inline-block ${className}`}>
      {children}
    </span>
  );
}

export default function LocationPanel({ locations = DEFAULT_LOCATIONS }) {
  // start with no selection so the page shows the full-width list (first design)
  const [selectedId, setSelectedId] = useState(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return locations.find((l) => l.id === selectedId) || null;
  }, [locations, selectedId]);

  function copyCoords() {
    if (!selected) return;
    const text = `${selected.lat}, ${selected.lng}`;
    navigator.clipboard?.writeText(text);
  }

  return (
    <div className="w-full">
      {/* If no selection, show the original full-width rows (first design) */}
      {!selected ? (
        <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-5 px-2 sm:px-0">
          {locations.map((loc) => (
            <div
              key={loc.id}
              onClick={() => setSelectedId(loc.id)}
              className="bg-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-0 items-start sm:items-center cursor-pointer hover:shadow-md transition"
            >
              <div className="sm:col-span-3 flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-gray-500 text-xs sm:text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm truncate">{loc.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{loc.area}</p>
                </div>
              </div>

              <div className="sm:col-span-2 text-[10px] sm:text-xs">
                <p className="text-gray-700 hidden sm:block">{loc.lat}</p>
                <p className="text-gray-500 hidden sm:block">{loc.lng}</p>
                <p className="sm:hidden text-gray-700">{loc.lat}</p>
              </div>

              <div className="sm:col-span-3 flex flex-wrap gap-1 sm:gap-2">
                {loc.routes && loc.routes.length ? (
                  loc.routes.map((r, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gray-100 text-[10px] sm:text-xs text-gray-600 truncate"
                    >
                      {r}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] sm:text-xs text-gray-400">No routes</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <span
                  className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                    loc.traffic === "High"
                      ? "bg-red-100 text-red-600"
                      : loc.traffic === "Medium"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {loc.traffic}
                </span>
              </div>

              <div className="sm:col-span-2 sm:text-right">
                <div>
                  <span
                    className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                      loc.status === "Active"
                        ? "bg-emerald-100 text-emerald-600"
                        : loc.status === "Inactive"
                        ? "bg-gray-100 text-gray-500"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {loc.status}
                  </span>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">{loc.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Split view: left list + right detail (second design) */
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <aside className="w-full lg:w-72 bg-transparent px-2 sm:px-0">
            <div className="space-y-2 sm:space-y-3">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`w-full text-left flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-shadow border border-transparent hover:shadow-sm ${
                    loc.id === selectedId
                      ? "bg-[#e9f7f6] shadow-inner border-l-4 border-emerald-800"
                      : "bg-white"
                  }`}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-gray-500 text-xs sm:text-sm" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-xs sm:text-sm truncate">{loc.name}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 truncate">{loc.area}</div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <main className="flex-1 bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-sm relative mx-2 sm:mx-0">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
              aria-label="Close details"
            >
              ✕
            </button>

            {selected ? (
              <div className="space-y-4 sm:space-y-6 pr-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold">{selected.name}</h3>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{selected.category || "—"}</div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 flex-wrap">
                    <div className="text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                      <div className="font-medium whitespace-nowrap">Created On</div>
                      <div className="text-gray-600 text-[9px] sm:text-xs">{selected.createdOn}</div>
                    </div>

                    <div className="text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                      <div className="font-medium whitespace-nowrap">Last Updated</div>
                      <div className="text-gray-600 text-[9px] sm:text-xs">{selected.lastUpdated}</div>
                    </div>

                    <div className="text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                      <div className="font-medium whitespace-nowrap">Peak Hours</div>
                      <div className="text-gray-600 text-[9px] sm:text-xs">{selected.peakHours}</div>
                    </div>

                    <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-md">
                      <div className="font-medium">Arrivals</div>
                      <div className="text-gray-600">{selected.arrivals} Per Day</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-6 mb-4">
                    <button className="text-sm font-medium text-emerald-700">Basic Information</button>
                    <button className="text-sm text-gray-500">View Location Analytics</button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="text-xs text-gray-500">Full Name</div>
                          <div className="font-medium">{selected.name}</div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="text-xs text-gray-500">Category</div>
                          <div className="font-medium">{selected.category}</div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="text-xs text-gray-500">Description</div>
                          <div className="font-medium text-sm text-gray-700">{selected.description}</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3 mt-10">
                          <h4 className="text-sm font-medium">GPS Coordinates</h4>
                          <button
                            onClick={copyCoords}
                            className="flex items-center gap-2 text-xs text-emerald-700"
                          >
                            <Copy size={14} /> Copy
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="text-xs text-gray-500">Latitude</div>
                            <div className="font-medium">{selected.lat}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="text-xs text-gray-500">Longitude</div>
                            <div className="font-medium">{selected.lng}</div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="bg-emerald-900 text-white px-4 py-2 rounded-md">
                            Edit Location Details
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mt-30">
                      <div className="w-full h-44 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        Map placeholder
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">No location selected</div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
