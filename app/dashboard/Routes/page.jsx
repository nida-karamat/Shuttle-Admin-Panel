"use client";

import { useState } from "react";
import RoutesPanel from "../../Components/Route/Routes";

const stats = [
  {
    title: "Total Routes",
    value: 18,
   
  },
  {
    title: "Active Routes Right Now",
    value: 12,
   
  },
  {
    title: "Routes Needing Attention",
    value: 3,
   
  },
];

const routes = [
  {
    name: "Metro Loop",
    stops: ["Building A", "Main Gate", "Block C", "West Gate"],
    shuttle: "S12, S16",
    driver: "Ahmed Al-Harbi",
    status: "Active",
    time: "2 min ago",
    stop: "5 stops 18 min average",
    distance: "18 Seater",
  },
  {
    name: "Head Office Express",
    stops: ["West Gate", "Building C", "Head Office 3"],
    shuttle: "S4",
    driver: "Faisal Al-Qahtani",
    status: "Active",
    time: "5 min ago",
    stop: "3 stops 12 min average",
    distance: "18 Seater",
  },
  {
    name: "Residential Loop",
    stops: ["North Terminal", "Residential Area", "Head Office 2"],
    shuttle: "S16",
    driver: "Majed Al-Otaibi",
    status: "Active",
    time: "1 min ago",
    stop: "6 stops 25 min average",
    distance: "18 Seater",
  },
  {
    name: "West Terminal",
    stops: ["Terminal 1", "Terminal 2", "Parking Zoo"],
    shuttle: "S7",
    driver: "Sultan Al-Mutairi",
    status: "Attention",
    time: "10 min ago",
    stop: "5 stops 18 min average",
    distance: "18 Seater",
  },
  {
    name: "Campus Connector",
    stops: ["North Terminal", "Residential Area", "Head Office 2"],
    shuttle: "S8",
    driver: "Nawaf AI-Shammari",
    status: "Inactive",
    time: "2 hrs ago",
    stop: "5 stops 18 min average",
    distance: "18 Seater",
  },
  {
    name: "Airport Shuttle",
    stops: ["West Gate", "Building A", "Head Office 4"],
    shuttle: "S7",
    driver: "No Assigned",
    status: "Attention",
    time: "1 day ago",
    stop: "3 stop 15 min average",
    distance: "No Assigned",
  },
];

export default function RoutesPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-[#003B3B]">Routes Management</h2>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm "
          >
            <div>
              <h4 className="text-sm text-gray-500">{item.title}</h4>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        {[
          "All",
          "Active",
          "In-Active",
          "High Demand",
          "Missing Assignment",
        ].map((item) => (
          <button
            key={item}
            className={`px-5 py-3 rounded-xl border border-gray-100 text-sm ${
              item === "All"
                ? "bg-[#003B3B] text-white"
                : "bg-white border text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Table or second-design RoutesPanel (show panel when a row is selected) */}
      {selectedIndex === null ? (
        <div className="rounded-xl overflow-hidden"> 
          <table className="w-full text-sm border-separate border-spacing-y-3">
            <thead className=" text-gray-500 text-left">
              <tr>
                <th className="p-4">Route Name</th>
                <th className="p-4">Stops</th>
                <th className="p-4">Assigned Shuttle</th>
                <th className="p-4">Assigned Driver</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`cursor-pointer transition shadow-sm  border border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-[#127E88] hover:text-white `}
                  >
                    <td className="p-4">
                      <span className="font-medium">{route.name}</span> <br />
                      <span className="text-gray-400">{route.stop}</span>
                    </td>

                    <td className="p-4 text-gray-500">
                      {route.stops.join(" → ")}
                    </td>

                    <td className="p-4">
                      <span className="font-semibold">{route.shuttle}</span> <br />
                      <span className="text-gray-400">{route.distance}</span>
                    </td>

                    <td className="p-4">{route.driver}</td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium${
                          route.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {route.status}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{route.time}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <RoutesPanel routes={routes} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
        </div>
      )}
    </div>
  );
}
