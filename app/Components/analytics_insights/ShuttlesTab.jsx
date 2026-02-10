import React from "react";


import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", trips: 120, load: 70 },
  { day: "Tue", trips: 150, load: 75 },
  { day: "Wed", trips: 170, load: 80 },
  { day: "Thu", trips: 140, load: 65 },
  { day: "Fri", trips: 190, load: 85 },
  { day: "Sat", trips: 90, load: 60 },
  { day: "Sun", trips: 60, load: 50 },
];

const performanceData = [
  { id: "S1", trips: 145, onTime: "94%", load: "68%", efficiency: "92%", status: "ACTIVE", color:"text-[#10B981]"},
  { id: "S2", trips: 138, onTime: "89%", load: "72%", efficiency: "88%", status: "ACTIVE",color:"text-[#F59E0B]", },
  { id: "S3", trips: 142, onTime: "96%", load: "65%", efficiency: "96%", status: "ACTIVE",color:"text-[#10B981]" },
  { id: "S4", trips: 120, onTime: "85%", load: "58%", efficiency: "82%", status: "ACTIVE" ,color:"text-[#F59E0B]"},
  { id: "S5", trips: 135, onTime: "91%", load: "70%", efficiency: "90%", status: "ACTIVE",color:"text-[#10B981]" },
  { id: "S6", trips: 128, onTime: "88%", load: "63%", efficiency: "87%", status: "ACTIVE",color:"text-[#F59E0B]" },
];

export default function ShuttlesTab() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Bar chart style comparison */}
      <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col gap-2 sm:gap-3 mb-4">
          <div>
            <h3 className="text-xs sm:text-sm font-semibold">
              Shuttle Performance Comparison
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-500">
              Trip count and efficiency metrics
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-gray-500 flex-wrap">
            <div className="flex items-center gap-1">
              <span className="w-2 h-1.5 rounded-full bg-emerald-900" />
              <span>Efficiency</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-1.5 rounded-full bg-red-500" />
              <span>Load %</span>
            </div>
          </div>
        </div>

        <div className="h-48 sm:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* Bar in green */}
              <Bar dataKey="trips" name="Trip Volume" fill="#22c55e" />

              {/* Line in red */}
              <Line
                type="monotone"
                dataKey="load"
                name="Passenger Load %"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed metrics table */}
      <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 lg:p-6 overflow-x-auto">
        <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
          Detailed Shuttle Metrics
        </h3>
        <table className="min-w-full text-xs">
          <thead>
            <tr className="text-[10px] sm:text-xs text-gray-400 border-b">
              <th className="text-left py-2 px-2 sm:px-4 font-medium">SHUTTLE ID</th>
              <th className="text-left py-2 px-1 sm:px-4 font-medium">TRIPS</th>
              <th className="text-left py-2 px-1 sm:px-4 font-medium">ON-TIME %</th>
              <th className="text-left py-2 px-1 sm:px-4 font-medium">AVG LOAD %</th>
              <th className="text-left py-2 px-1 sm:px-4 font-medium\">EFFICIENCY</th>
              <th className="text-left py-2 px-1 sm:px-4 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((row, idx) => (
              <tr
                key={row.id}
                className={
                  idx !== performanceData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }
              >
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 text-xs font-medium">
                  {row.id}
                </td>
                <td className="py-2 sm:py-3 px-1 sm:px-4 text-gray-600 text-xs">{row.trips}</td>
                <td className={`py-2 sm:py-3 px-1 sm:px-4 font-medium text-xs ${row.color}`}>
                  {row.onTime}
                </td>
                <td className="py-2 sm:py-3 px-1 sm:px-4 text-gray-600 text-xs">{row.load}</td>
                <td className="py-2 sm:py-3 px-1 sm:px-4">
                  <div className="flex items-center gap-1.5">
                    <div className="hidden sm:flex flex-1 h-1.5 rounded-full bg-emerald-50 overflow-hidden max-w-25">
                      <div className="h-full bg-emerald-500" />
                    </div>
                    <span className="text-gray-700 text-xs">
                      {row.efficiency}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-1 sm:px-4">
                  <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4">
          <p className="text-[10px] text-gray-400 mb-1">Peak Activity Day</p>
          <p className="text-xs sm:text-sm font-semibold mb-1">Friday</p>
          <p className="text-xs text-gray-500">190 trips • 85% avg load</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4">
          <p className="text-[10px] text-gray-400 mb-1">Lowest Activity</p>
          <p className="text-xs sm:text-sm font-semibold mb-1">Sunday</p>
          <p className="text-xs text-gray-500">60 trips • 50% avg load</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4">
          <p className="text-[10px] text-gray-400 mb-1">Weekly Average</p>
          <p className="text-xs sm:text-sm font-semibold mb-1">127 trips</p>
          <p className="text-xs text-gray-500">Across all shuttles</p>
        </div>
      </div>
    </div>
  );
}


