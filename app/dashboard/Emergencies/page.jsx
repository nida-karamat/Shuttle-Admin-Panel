"use client";

import React from "react";
import ActiveRoute from "@/app/Components/Emergency/ActiveRoute";
import OperationalTimeline from "@/app/Components/Emergency/OperationalTimeline";
import { CircleCheckBig , Coffee, AlertTriangle, Clock, Lock, RefreshCcw,Play   } from "lucide-react";
export default function Page() {

  const driverStatuses = [
    { label: "Active", color: "bg-green-500" },
    { label: "On-Break", color: "bg-yellow-400" },
    { label: "In-Active", color: "bg-red-500" },
  ];
  

  const stats = [
    {
      value: "3/4",
      label: "Active Drivers",
      icon: <CircleCheckBig  className="w-5 h-5 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      value: "01",
      label: "Drivers On-Break",
      icon: <Coffee  className="w-5 h-5 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      value: "Reduced",
      label: "Emergency Mode",
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      bg: "bg-red-100",
    },
    {
      value: "6m 20s",
      label: "Avg ETA",
      icon: <Clock className="w-5 h-5 text-[#6B7280]" />,
      bg: "bg-[#6B7280]/20",
    },
    {
      value: "D2",
      label: "Break Token",
      icon: <Lock  className="w-5 h-5 text-[#8B5CF6]" />,
      bg: "bg-[#8B5CF6]/20",
    },
  ];
  

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Emergencies</h1>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex items-center gap-2 sm:gap-3"
          >
            <div className={`p-1.5 sm:p-2 rounded-xl ${item.bg}`}>{item.icon}</div>

            <div>
              <div className="text-lg sm:text-2xl font-medium">{item.value}</div>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6">
          {/* Drivers list */}
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <div>
                <div className="font-semibold text-sm sm:text-base">Driver</div>
                <p className="text-xs text-gray-500 mb-2">
                  View Driver details
                </p>
              </div>

              <div className="ml-auto flex items-center gap-4 text-sm">
                {driverStatuses.map((status) => (
                  <div key={status.label} className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${status.color}`}
                    ></span>
                    <span className="font-medium">{status.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* header */}
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 bg-gray-100 rounded-xl border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-600">
                <div className="col-span-1 sm:col-span-5">Driver</div>
                <div className="col-span-1 sm:col-span-1 text-center">Status</div>
                <div className="col-span-1 sm:col-span-2 text-center">Next Break</div>
                <div className="col-span-1 sm:col-span-2 text-center">Drive Time</div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  {
                    name: "Ahmed",
                    route: "Route R5 - Shuttle S1",
                    status: "active",
                    nextBreak: "12 min",
                    driveTime: "48 min",
                    avatar: "/Shuttle/S1.png",
                  },
                  {
                    name: "Dayyan",
                    route: "Route R5 - Shuttle S1",
                    status: "on-break",
                    nextBreak: "On-Break",
                    driveTime: "58 min",
                    avatar: "/Shuttle/S2.png",
                  },
                  {
                    name: "Waqar",
                    route: "Route R5 - Shuttle S1",
                    status: "active",
                    nextBreak: "32 min",
                    driveTime: "34 min",
                    avatar: "/Shuttle/S3.png",
                  },
                  {
                    name: "Faizan",
                    route: "VIP Duty - Shuttle S4",
                    status: "active",
                    nextBreak: "57 min",
                    driveTime: "21 min",
                    avatar: "/Shuttle/S4.png",
                  },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4  p-3 bg-gray-100 rounded-xl border border-gray-200"
                  >
                    <div className="col-span-1 sm:col-span-5 flex items-center gap-4">
                      <img
                        src={d.avatar}
                        alt={d.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{d.name}</div>
                        <div className="text-xs text-gray-500">{d.route}</div>
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-1 text-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${d.status === "active" ? "bg-green-400" : d.status === "on-break" ? "bg-yellow-400" : "bg-gray-300"}`}
                      />
                    </div>

                    <div className="col-span-1 sm:col-span-2 text-center text-sm text-red-500">
                      {d.nextBreak}
                    </div>

                    <div className="col-span-1 sm:col-span-2 text-center text-sm font-medium">
                      {d.driveTime}
                    </div>

                    <div className="col-span-1 sm:col-span-2 text-center sm:text-right">
                      <button className="text-sm text-teal-600">
                        View details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right control panel */}
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-sm sm:text-base mb-3">Control Panel</h3>
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full bg-teal-700 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <RefreshCcw className="w-3 sm:w-4 h-3 sm:h-4" />
                  Rebalance Routes
                </div>
              </button>

              <button className="w-full border border-gray-200 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                VIP Route
              </button>
              <button className="w-full border border-gray-200 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Lock className="w-3 sm:w-4 h-3 sm:h-4" />
                  Lock Breaks
                </div>
              </button>
              <button className="w-full border border-gray-200 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                  Resume Normal Mode
                </div>
              </button>
              <button className="w-full bg-red-50 text-red-600 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                Broadcast Notice
              </button>
            </div>

            <div className="mt-6  pt-4 space-y-2">
              <div className="flex items-center gap-10 text-sm">
                <span className="text-gray-600">System Status:</span>
                <span className="text-teal-600 ml-auto">All Operational</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Active Emergencies</span>
                <span className="ml-auto text-red-600">01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActiveRoute />
      <OperationalTimeline />
    </div>
  );
}
