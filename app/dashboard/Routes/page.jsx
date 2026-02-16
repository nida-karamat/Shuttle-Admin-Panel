"use client";

import { useState } from "react";
import RoutesPanel from "../../Components/Route/Routes";
import { TabStyles } from "../../theme/color";
import { Info,Route } from "lucide-react";

const stats = [
  {
    title: "Total Routes",
    value: 18,
    icon: <Route className="w-5 h-5 text-[#003B3B]" />,
    bgIcon: "bg-[#003B3B]/10",
  },
  {
    title: "Active Routes Right Now",
    value: 12,
    icon: <Route className="w-5 h-5 text-[#10B981]" />,
    bgIcon: "bg-[#10B981]/10",
  },
  {
    title: "Routes Needing Attention",
    value: 3,
    icon: <Info className="w-5 h-5 text-orange-500"/>,
    bgIcon: "bg-orange-100",
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
  const [filterStatus, setFilterStatus] = useState("All");

  // Filter routes based on selected status
  const filteredRoutes = filterStatus === "All" 
    ? routes 
    : routes.filter(r => {
        if (filterStatus === "Active") return r.status === "Active";
        if (filterStatus === "In-Active") return r.status === "Inactive";
        if (filterStatus === "High Demand") return r.status === "Active"; // Customize as needed
        if (filterStatus === "Missing Assignment") return r.driver === "No Assigned" || r.shuttle === "S7";
        return true;
      });

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-[#003B3B]">
        Routes Management
      </h2>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm "
          >
            {/* <div>
              <p className="text-2xl font-semibold">{item.value}</p>
              <h4 className="text-sm text-gray-500">{item.title}</h4>
            </div> */}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                   className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bgIcon}`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-lg sm:text-2xl font-bold text-gray-800">
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-xs">{item.title}</p>
                </div>
              </div>
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
            onClick={() => setFilterStatus(item)}
            className={`px-5 py-3 rounded-xl border text-sm transition ${
              filterStatus === item
                ? `${TabStyles.solidButton.active.bg} ${TabStyles.solidButton.active.text} ${TabStyles.solidButton.active.border}`
                : `${TabStyles.solidButton.inactive.bg} ${TabStyles.solidButton.inactive.border} ${TabStyles.solidButton.inactive.text} ${TabStyles.solidButton.inactive.hover}`
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Table or second-design RoutesPanel (show panel when a row is selected) */}
      {selectedIndex === null ? (
        <div className="rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 bg-gray-100 text-gray-500 text-sm p-4 rounded-t-xl font-medium">
            <div className="col-span-1">Route Name</div>
            <div className="col-span-1">Stops</div>
            <div className="col-span-1">Assigned Shuttle</div>
            <div className="col-span-1">Assigned Driver</div>
            <div className="col-span-1">Status</div>
          </div>

          <div className="flex flex-col gap-3 mt-3 p-2">
            {filteredRoutes.map((route, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(routes.indexOf(route))}
                className={`cursor-pointer rounded-2xl py-4 px-5 grid grid-cols-5 items-center gap-0 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-[#127E88] hover:text-white shadow-sm transition`}
              >
                <div className="col-span-1">
                  <span className="font-medium">{route.name}</span>
                  <br />
                  <span className="text-gray-400 text-sm">{route.stop}</span>
                </div>

                <div className="col-span-1 text-sm text-gray-400">
                  {route.stops.join(" → ")}
                </div>

                <div className="col-span-1">
                  <span className="font-semibold">{route.shuttle}</span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    {route.distance}
                  </span>
                </div>

                <div className="col-span-1 text-sm">{route.driver}</div>

                <div className="col-span-1 flex flex-col items-start">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      route.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : route.status === "Attention"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {route.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{route.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <RoutesPanel
            routes={routes}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
        </div>
      )}
    </div>
  );
}
