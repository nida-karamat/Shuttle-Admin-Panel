"use client";

import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { MdWarning } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsRecordCircle } from "react-icons/bs";
import {Bus,TriangleAlert,Route,Clock,Download  } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: "Currently active on-route",
      value: "130+",
      change: "+0.2%",
      icon: <Bus/>,
      isPositive: true,
    },
    {
      title: "Live alerts & warnings",
      value: "30+",
      change: "+1.2%",
      icon: <TriangleAlert />,
      isPositive: false,
    },
    {
      title: "Completed & incomplete trips",
      value: "2.5K+",
      change: "+5%",
      icon: <Route />,
      isPositive: true,
    },
    {
      title: "Passenger waiting time",
      value: "4.3 min",
      change: "-0.5%",
      icon: <Clock />,
      isPositive: true,
    },
  ];

  const operationalActivities = [
    {
      time: "08:30 AM",
      title: "Shuttle 5 begun route (Building A ~ Head Office)",
      color: "bg-green-700",
    },
    {
      time: "09:10 AM",
      title: "Fuel break started (Driver Sara)",
      color: "bg-teal-600",
    },
    {
      time: "10:20 AM",
      title: "Passenger overload alert (Shuttle 14)",
      color: "bg-orange-500",
    },
    {
      time: "11:05 AM",
      title: "Road blockage reported",
      color: "bg-red-500",
    },
  ];

  const shuttles = [
    {
      id: "SH-12",
      name: "Shuttle 12",
      status: "Onroute",
      Color: "bg-teal-100",
      statusColor: "bg-[#003B3B]",
      statusText: "text-teal-700",
      location: "Tech Office",
      occupancy: "12/18",
    },
    {
      id: "SH-4",
      name: "Shuttle 4",
      status: "Fuel",
      Color: "bg-yellow-100",
      statusColor: "bg-[#F59E0B]",
      statusText: "text-orange-700",
      location: "Head Office Entrance",
      occupancy: "18/18",
    },
    {
      id: "SH-14",
      name: "Shuttle 14",
      status: "Waiting",
      statusColor: "bg-[#FCD34D]",
      Color: "bg-orange-100",
      statusText: "text-yellow-700",
      location: "School Terminal",
      occupancy: "0/18",
    },
    {
      id: "SH-7",
      name: "Shuttle 7",
      status: "Emergency",
      statusColor: "bg-[#EF4444]",
      Color: "bg-red-100",
      statusText: "text-red-700",
      location: "School Terminal",
      occupancy: "6/18",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-8 text-gray-900 font-century">
          Dashboard
        </h1>

        {/* STATS CARDS - INLINE HORIZONTAL */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col items-start justify-between gap-4">
                <div className="flex items-start justify-between w-full">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="flex items-center gap-1 ml-30">
                  {stat.isPositive ? (
                    <FiArrowUp className="text-teal-500 text-sm" />
                  ) : (
                    <FiArrowDown className="text-red-500 text-sm" />
                  )}
                  <p
                    className={`text-xs ${
                      stat.isPositive ? "text-teal-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHART SECTION - FULL WIDTH */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Route Utilization (This Week)
              </h2>
              <p className="text-gray-500 text-sm">
                Tracks passenger demand and shuttle load percentage across major
                routes
              </p>
            </div>
            <button className="text-gray-600 border border-gray-300 p-2 rounded-lg hover:text-gray-800 text-sm flex items-center gap-2">
              <span>
                <Download className="w-4 h-4" />
              </span>{" "}
              Export
            </button>
          </div>
          {/* Placeholder for Chart */}
          <div className="h-64rounded-lg flex items-center justify-center text-gray-400">
            <img src="/Icon.png" alt="Icon" />
          </div>
        </div>

        {/* BOTTOM SECTION - 2 COLUMNS */}
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT - OPERATIONAL ACTIVITY */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Live Operational Activity
                </h2>
                <p className="text-gray-500 text-xs mt-1">November 28, 2025</p>
              </div>
              <div className="flex gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      idx === 3 ? "bg-teal-600 text-white" : "text-gray-600"
                    }`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-0">
              {operationalActivities.map((activity, idx) => (
                <div key={idx} className="flex gap-3 pb-4">
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`${activity.color} rounded-full w-3 h-3 flex-shrink-0 mt-1 z-10`}
                    ></div>
                    {idx < operationalActivities.length - 1 && (
                      <div
                        className={`${activity.color} w-0.5 h-12 mt-1`}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-xs text-gray-500 font-medium">
                      {activity.time}
                    </p>
                    <p className="text-sm text-gray-800 mt-0.5">
                      {activity.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - ALL SHUTTLES */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900">
                All Shuttles
              </h2>
              <a href="#" className="text-teal-600 text-sm hover:underline">
                View all
              </a>
            </div>

            <div className="flex gap-2 mb-4">
              <button className="px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                Status
              </button>
              <button className="px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                Driver
              </button>
              <button className="px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                Route
              </button>
            </div>

            <div className="space-y-3">
              {shuttles.map((shuttle, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg ${shuttle.statusColor}`}
                    >
                      <Bus />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-800">
                          {shuttle.name}
                        </p>
                        <span
                          className={`${shuttle.Color} ${shuttle.statusText} text-xs font-semibold px-2 py-0.5 rounded-full`}
                        >
                          {shuttle.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {shuttle.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {shuttle.occupancy}
                      </p>
                      <p className="text-xs text-gray-500">Occupancy</p>
                    </div>
                    <span className="text-gray-400 text-xl">›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
