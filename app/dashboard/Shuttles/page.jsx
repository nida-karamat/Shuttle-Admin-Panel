"use client";

import { useState } from "react";
import Image from "next/image";
import { Bus, MessageCircleWarning, Dot } from "lucide-react";

/* -------------------- CONSTANTS -------------------- */

const ACTIVE_BG = "bg-[#127E88]";
const ACTIVE_BORDER = "border-[#127E88]";

const TABS = [
  "All",
  "On-route",
  "Waiting",
  "Occupancy",
  "Emergency",
  "Unassigned",
];

const STATUS_MAP = {
  Onroute: "On-route",
  Full: "Occupancy",
  Waiting: "Waiting",
  Emergency: "Emergency",
  "Near Full": "Occupancy",
  Idle: "Waiting",
  Offline: "Waiting",
};

const getStatusType = (status) => STATUS_MAP[status] || status;

const getDotColor = (status) => {
  switch (status) {
    case "Onroute":
      return "text-teal-500";
    case "Full":
    case "Near Full":
      return "text-orange-400";
    case "Waiting":
      return "text-yellow-400";
    case "Emergency":
      return "text-red-500";
    case "Idle":
    case "Offline":
      return "text-gray-400";
    default:
      return "text-gray-300";
  }
};

/* -------------------- COMPONENT -------------------- */

export default function ShuttlesPage() {
  const [selectedShuttle, setSelectedShuttle] = useState(null);
  const [selectedTab, setSelectedTab] = useState("All");

  /* -------------------- STATS -------------------- */

  const stats = [
    {
      icon: (
        <Bus className="bg-gray-300 text-[#003B3B] h-9 w-9 p-2 rounded-lg" />
      ),
      value: "48",
      label: "Total Shuttles",
      change: "+5%",
      positive: true,
    },
    {
      icon: "✓",
      value: "24",
      label: "Active Right Now",
      change: "+2%",
      positive: true,
    },
    {
      icon: (
        <MessageCircleWarning className="bg-[#ffe5b7] text-[#F59E0B] h-9 w-9 p-2 rounded-lg" />
      ),
      value: "6",
      label: "Shuttle Navi Capacity",
      change: "+4%",
      positive: true,
    },
  ];

  /* -------------------- SHUTTLES -------------------- */

  const shuttles = [
    {
      id: "S12",
      route: "Metro Loop",
      distance: "18 Seater",
      driver: { name: "Ahmed Al Hathi", avatar: "/Shuttle/S1.png" },
      status: "Onroute",
      statusColor: "bg-teal-100 text-teal-700",
      occupancy: "12/18",
      occupancyPercent: 67,
      updated: "32 sec ago",
      coordinates: "MP-2097",
      currentStop: "Metro Station",
      nextStop: "Head Office 2",
      updatedTime: "Updated 10 seconds ago",
    },
    {
      id: "S4",
      route: "Head Office Express",
      distance: "18 Seater",
      driver: { name: "Faisal Al-Qilsani", avatar: "/Shuttle/S2.png"  },
      status: "Full",
      statusColor: "bg-orange-100 text-orange-700",
      occupancy: "18/18",
      occupancyPercent: 100,
      updated: "1 min ago",
      coordinates: "MP-2098",
      currentStop: "Head Office",
      nextStop: "Tech Campus",
      updatedTime: "Updated 1 minute ago",
    },
    {
      id: "S15",
      route: "Residential Loop",
      distance: "18 Seater",
      driver: { name: "Majid Al-Oaiki",  avatar: "/Shuttle/S3.png" },
      status: "Waiting",
      statusColor: "bg-yellow-100 text-yellow-700",
      occupancy: "8/18",
      occupancyPercent: 44,
      updated: "2 min ago",
      coordinates: "MP-2099",
      currentStop: "Residential Area",
      nextStop: "Shopping Mall",
      updatedTime: "Updated 2 minutes ago",
    },
    {
      id: "S7",
      route: "West Terminal",
      distance: "22 Seater",
      driver: { name: "Sufian Al-Mutairi", avatar: "/Shuttle/S4.png"  },
      status: "Emergency",
      statusColor: "bg-red-100 text-red-700",
      occupancy: "6/22",
      occupancyPercent: 27,
      updated: "45 sec ago",
      coordinates: "MP-2100",
      currentStop: "West Terminal",
      nextStop: "Airport Road",
      updatedTime: "Updated 45 seconds ago",
    },
    {
      id: "S22",
      route: "Building A Express",
      distance: "12 Seater",
      driver: { name: "Nawaf Al-Shammari",  avatar: "/Shuttle/S5.png" },
      status: "Onroute",
      statusColor: "bg-teal-100 text-teal-700",
      occupancy: "8/12",
      occupancyPercent: 67,
      updated: "15 sec ago",
      coordinates: "MP-2101",
      currentStop: "Building A",
      nextStop: "Main Gate",
      updatedTime: "Updated 15 seconds ago",
    },
    {
      id: "S9",
      route: "Campus Connector",
      distance: "18 Seater",
      driver: { name: "Yassar Al-Ajmi", avatar: "/Shuttle/S1.png"  },
      status: "Idle",
      statusColor: "bg-gray-100 text-gray-700",
      occupancy: "0/18",
      occupancyPercent: 0,
      updated: "9 min ago",
      coordinates: "MP-2102",
      currentStop: "Campus Center",
      nextStop: "Sports Complex",
      updatedTime: "Updated 9 minutes ago",
    },
    {
      id: "S31",
      route: "City Center Link",
      distance: "22 Seater",
      driver: { name: "Khalid Al-Balushi", avatar: "/Shuttle/S7.png"  },
      status: "Near Full",
      statusColor: "bg-orange-100 text-orange-700",
      occupancy: "18/22",
      occupancyPercent: 82,
      updated: "22 sec ago",
      coordinates: "MP-2103",
      currentStop: "City Center",
      nextStop: "Hospital Road",
      updatedTime: "Updated 22 seconds ago",
    },
    {
      id: "S5",
      route: "Airport Shuttle",
      distance: "18 Seater",
      driver: { name: "Omar Al-Ghannadi",  avatar: "/Shuttle/S8.png"  },
      status: "Offline",
      statusColor: "bg-gray-100 text-gray-700",
      occupancy: "0/18",
      occupancyPercent: 0,
      updated: "30 min ago",
      coordinates: "MP-2104",
      currentStop: "Airport Terminal",
      nextStop: "Downtown Hub",
      updatedTime: "Updated 30 minutes ago",
    },
  ];

  /* -------------------- FILTER -------------------- */

  const filteredShuttles =
    selectedTab === "All"
      ? shuttles
      : shuttles.filter(
          (s) => getStatusType(s.status) === selectedTab
        );

  const selected = filteredShuttles.find(
    (s) => s.id === selectedShuttle
  );

  /* -------------------- UI -------------------- */

  return (
    <div className="min-h-screen">
      <div className="p-6 ">
        <h1 className="text-3xl font-semibold mb-8 text-gray-900 font-century">
          Shuttles Management
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>{stat.icon}</div>

                  <div>
                    <p className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {stat.label}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-xs font-medium ${
                    stat.positive
                      ? "text-teal-600"
                      : "text-red-600"
                  } mt-7`}
                >
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FILTER TABS */}
        <div className="rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  tab === selectedTab
                    ? "bg-teal-900 text-white"
                    : "bg-white text-gray-700 hover:bg-teal-900 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE + DETAIL */}
        <div
          className={`grid gap-6 ${
            selected
              ? "grid-cols-1 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {/* TABLE */}
          <div
            className={`${
              selected ? "lg:col-span-2" : ""
            } overflow-hidden`}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-4">
              <thead>
  <tr className="bg-gray-50">
    {[
      "ID",
      "ROUTE",
      "DRIVER",
      "STATUS",
      "OCCUPANCY",
      "UPDATED",
      "ACTIONS",
    ].map((h, index, arr) => (
      <th
        key={h}
        className={`px-6 py-4 text-left text-xs font-semibold text-gray-700
          ${index === 0 ? "rounded-l-lg" : ""}
          ${index === arr.length - 1 ? "rounded-r-lg" : ""}
        `}
      >
        {h}
      </th>
    ))}
  </tr>
</thead>

                <tbody>
                  {filteredShuttles.map(
                    (shuttle, index) => {
                      const isSelected =
                        selectedShuttle === shuttle.id;

                      const baseBg =
                        index % 2 === 0
                          ? "bg-gray-200 group-hover:bg-[#127E88] group-hover:text-white"
                          : "bg-white group-hover:bg-[#127E88] group-hover:text-white";

                      const tdBase = `px-6 py-4 align-middle border-y border-gray-200  ${baseBg}`;

                      const tdActive = `px-6 py-4 align-middle border-y ${ACTIVE_BORDER} ${ACTIVE_BG}`;

                      const cellClass = isSelected
                        ? tdActive
                        : tdBase;

                      return (
                        <tr
                          key={shuttle.id}
                          onClick={() =>
                            setSelectedShuttle(shuttle.id)
                          }
                          className="cursor-pointer group "
                        >
                          <td
                            className={`${cellClass} rounded-l-lg border-l`}
                          >
                            <span
                              className={`font-semibold ${
                                isSelected
                                  ? "text-white"
                                  : "text-gray-900 group-hover:text-white"
                              }`}
                            >
                              {shuttle.id}
                            </span>
                          </td>

                          <td className={cellClass}>
                            <div className="flex items-center gap-2">
                              <Dot
                                className={`${getDotColor(
                                  shuttle.status
                                )} h-5 w-5`}
                                strokeWidth={5}
                              />
                              <div>
                                <p
                                  className={`text-sm font-medium ${
                                    isSelected
                                      ? "text-white"
                                      : "text-gray-800 group-hover:text-white"
                                  }`}
                                >
                                  {shuttle.route}
                                </p>
                                <p
                                  className={`text-xs ${
                                    isSelected
                                      ? "text-white/80"
                                      : "text-gray-500 group-hover:text-white/80"
                                  }`}
                                >
                                  {shuttle.distance}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className={cellClass}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={shuttle.driver.avatar}
                                alt={shuttle.driver.name}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <span
                                className={`text-sm ${
                                  isSelected
                                    ? "text-white"
                                    : "text-gray-800 group-hover:text-white"
                                }`}
                              >
                                {shuttle.driver.name}
                              </span>
                            </div>
                          </td>

                          <td className={cellClass}>
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 w-fit ${
                                isSelected
                                  ? "bg-white/15 text-white"
                                  : shuttle.statusColor
                              }`}
                            >
                              <Dot
                                className={
                                  isSelected
                                    ? "text-white"
                                    : getDotColor(
                                        shuttle.status
                                      )
                                }
                                strokeWidth={3}
                              />
                              {shuttle.status}
                            </span>
                          </td>

                          <td className={cellClass}>
                            <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  isSelected
                                    ? "bg-white"
                                    : "bg-teal-500"
                                }`}
                                style={{
                                  width: `${shuttle.occupancyPercent}%`,
                                }}
                              />
                            </div>
                            <p
                              className={`text-xs mt-1 ${
                                isSelected
                                  ? "text-white/80"
                                  : "text-gray-600 group-hover:text-white/80"
                              }`}
                            >
                              {shuttle.occupancy}
                            </p>
                          </td>

                          <td className={cellClass}>
                            <p
                              className={`text-xs ${
                                isSelected
                                  ? "text-white/80"
                                  : "text-gray-600 group-hover:text-white/80"
                              }`}
                            >
                              {shuttle.updated}
                            </p>
                          </td>

                          <td
                            className={`${cellClass} rounded-r-lg border-r`}
                          >
                            <button
                              className={`text-sm font-medium hover:underline ${
                                isSelected
                                  ? "text-white"
                                  : "text-teal-600 group-hover:text-white"
                              }`}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* DETAIL PANEL */}
          {selected && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Shuttle Number
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selected.coordinates}
                    </h2>
                  </div>

                  <button
                    onClick={() =>
                      setSelectedShuttle(null)
                    }
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                {/* occupancy */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700">
                    Occupancy
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selected.occupancy}
                      </p>
                      <p className="text-xs text-gray-500">
                        Passengers
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-teal-600">
                        {selected.occupancyPercent}%
                      </p>
                      <p className="text-xs text-gray-500">
                        Capacity
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
                    <div
                      className="h-full bg-teal-500"
                      style={{
                        width: `${selected.occupancyPercent}%`,
                      }}
                    />
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    3 mins
                  </p>
                </div>

                {/* stops */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="text-sm text-teal-600">
                        ●
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Current Stop
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {selected.currentStop}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm text-blue-600">
                        📍
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Next Stop
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {selected.nextStop}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>🕐</span>
                    <p>{selected.updatedTime}</p>
                  </div>
                </div>

                {/* buttons */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <button className="w-full bg-teal-700 text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-800">
                    ⓘ View Shuttle Details
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
                    📊 View Shuttle Analytics
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
                    💬 Send Broadcast Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
