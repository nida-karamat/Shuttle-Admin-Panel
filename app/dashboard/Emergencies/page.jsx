"use client";

import React from "react";
import ActiveRoute from "@/app/Components/Emergency/ActiveRoute";
import OperationalTimeline from "@/app/Components/Emergency/OperationalTimeline";

export default function Page() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6">Emergencies</h1>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500">Active Drivers</p>
          <div className="text-2xl font-bold">3/4</div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500">Drivers On-Break</p>
          <div className="text-2xl font-bold">01</div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500">Emergency Mode</p>
          <div className="text-2xl font-bold">Reduced</div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-500">Avg ETA</p>
          <div className="text-2xl font-bold">6m 20s</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Drivers list */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Drivers</h2>
              <p className="text-xs text-gray-500">View drivers details</p>
            </div>

            <div>
              {/* header */}
              <div className="grid grid-cols-12 items-center gap-4 bg-gray-50 rounded-md px-4 py-3 text-xs font-semibold text-gray-600">
                <div className="col-span-5">Driver</div>
                <div className="col-span-1 text-center">Status</div>
                <div className="col-span-2 text-center">Next Break</div>
                <div className="col-span-2 text-center">Drive Time</div>
                <div className="col-span-2 text-right">&nbsp;</div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { name: "Ahmed", route: "Route R5 - Shuttle S1", status: "active", nextBreak: "12 min", driveTime: "48 min", avatar: "/Shuttle/S1.png" },
                  { name: "Dayyan", route: "Route R5 - Shuttle S1", status: "on-break", nextBreak: "On-Break", driveTime: "58 min", avatar: "/Shuttle/S2.png" },
                  { name: "Waqar", route: "Route R5 - Shuttle S1", status: "active", nextBreak: "32 min", driveTime: "34 min", avatar: "/Shuttle/S3.png" },
                  { name: "Faizan", route: "VIP Duty - Shuttle S4", status: "active", nextBreak: "57 min", driveTime: "21 min", avatar: "/Shuttle/S4.png" },
                ].map((d, i) => (
                  <div key={i} className="grid grid-cols-12 items-center gap-4 bg-white rounded-lg p-3 border border-gray-100">
                    <div className="col-span-5 flex items-center gap-4">
                      <img src={d.avatar} alt={d.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="font-medium">{d.name}</div>
                        <div className="text-xs text-gray-500">{d.route}</div>
                      </div>
                    </div>

                    <div className="col-span-1 text-center">
                      <span className={`inline-block w-3 h-3 rounded-full ${d.status === 'active' ? 'bg-green-400' : d.status === 'on-break' ? 'bg-yellow-400' : 'bg-gray-300'}`} />
                    </div>

                    <div className="col-span-2 text-center text-sm text-red-500">{d.nextBreak}</div>

                    <div className="col-span-2 text-center text-sm font-medium">{d.driveTime}</div>

                    <div className="col-span-2 text-right">
                      <button className="text-sm text-teal-600">View details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Routes component */}
          {/* <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Active Routes</h2>
              <p className="text-xs text-gray-500">View routes complete details</p>
            </div>
            <ActiveRoute />
          </div> */}

          {/* Operational Timeline */}
          {/* <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Operational Timeline</h2>
              <p className="text-xs text-gray-500">Live activity log · Last 8 events</p>
            </div>
            <OperationalTimeline />
          </div> */}

          
        </div>
        

        {/* Right control panel */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-3">Control Panel</h3>
            <div className="space-y-3">
              <button className="w-full bg-teal-700 text-white py-2 rounded-lg">Rebalance Routes</button>
              <button className="w-full border border-gray-200 py-2 rounded-lg">VIP Route</button>
              <button className="w-full border border-gray-200 py-2 rounded-lg">Lock Breaks</button>
              <button className="w-full border border-gray-200 py-2 rounded-lg">Resume Normal Mode</button>
              <button className="w-full bg-red-50 text-red-600 py-2 rounded-lg">Broadcast Notice</button>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              <div>System Status: <span className="text-teal-600">All Operational</span></div>
              <div>Active Emergencies: <span className="text-red-600">01</span></div>
            </div>
          </div>
        </div>
      </div>
      <ActiveRoute />
      <OperationalTimeline />
    </div>
  );
}
