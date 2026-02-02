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
    <div className="space-y-6">
      {/* Bar chart style comparison */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm font-semibold">
              Shuttle Performance Comparison
            </h3>
            <p className="text-xs text-gray-500">
              Trip count and efficiency metrics
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 rounded-full bg-emerald-900" />
              efficiency
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 rounded-full bg-teal-400" />
              trips
            </div>
          </div>
        </div>

        <div className="h-64 w-full">
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
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold mb-3">Detailed Shuttle Metrics</h3>
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-[11px] sm:text-xs text-gray-400 border-b">
              <th className="text-left py-2 pr-4 font-medium">SHUTTLE ID</th>
              <th className="text-left py-2 pr-4 font-medium">TRIPS</th>
              <th className="text-left py-2 pr-4 font-medium">ON-TIME %</th>
              <th className="text-left py-2 pr-4 font-medium">AVG LOAD %</th>
              <th className="text-left py-2 pr-4 font-medium">EFFICIENCY</th>
              <th className="text-left py-2 font-medium">STATUS</th>
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
                <td className="py-3 pr-4 text-gray-700 text-xs sm:text-sm font-medium">
                  {row.id}
                </td>
                <td className="py-3 pr-4 text-gray-600">{row.trips}</td>
                <td className={`py-3 pr-4 ${row.color} font-medium`}>
                  {row.onTime}
                </td>
                <td className="py-3 pr-4 text-gray-600">{row.load}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-emerald-50 overflow-hidden max-w-[120px]">
                      <div className="h-full bg-emerald-500" />
                    </div>
                    <span className="text-gray-700 text-xs">
                      {row.efficiency}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


