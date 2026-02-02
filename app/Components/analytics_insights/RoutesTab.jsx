import React from "react";


import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { route: "R1", avgTime: 50, onTime: 90 },
  { route: "R2", avgTime: 48, onTime: 92 },
  { route: "R3", avgTime: 45, onTime: 85 },
  { route: "R4", avgTime: 47, onTime: 88 },
  { route: "R5", avgTime: 49, onTime: 89 },
  { route: "R6", avgTime: 46, onTime: 91 },
];



const routes = [
  { name: "Route R1", avgTime: "42 min", onTime: "94%", capacity: "78%", satisfaction: "4.6", performance: "GOOD" ,color:"text-[#F59E0B]"},
  { name: "Route R2", avgTime: "38 min", onTime: "96%", capacity: "82%", satisfaction: "4.8", performance: "EXCELLENT",color:"text-[#10B981]" },
  { name: "Route R3", avgTime: "45 min", onTime: "89%", capacity: "68%", satisfaction: "4.4", performance: "NEEDS WORK",color:"text-[#EF4444]" },
  { name: "Route R4", avgTime: "40 min", onTime: "92%", capacity: "75%", satisfaction: "4.7", performance: "GOOD",color:"text-[#F59E0B]" },
  { name: "Route R5", avgTime: "48 min", onTime: "88%", capacity: "65%", satisfaction: "4.3", performance: "NEEDS WORK",color:"text-[#EF4444]"},
  { name: "Route R6", avgTime: "36 min", onTime: "97%", capacity: "85%", satisfaction: "4.9", performance: "EXCELLENT",color:"text-[#10B981]" },
];

export default function RoutesTab() {
  return (
    <div className="space-y-6">
      {/* Line chart style analysis */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm font-semibold">Route Efficiency Analysis</h3>
            <p className="text-xs text-gray-500">
              Average trip time and on-time performance
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 rounded-full bg-emerald-900" />
              Avg Time (min)
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 rounded-full bg-teal-400" />
              On-Time %
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="route" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "avgTime") return `${value} Min`;
                  if (name === "onTime") return `${value}%`;
                  return value;
                }}
                labelFormatter={(label) => `Route: ${label}`}
              />
              <Legend verticalAlign="top" height={36} />

              {/* Avg Time Line */}
              <Line
                type="monotone"
                dataKey="avgTime"
                name="Avg Time (Min)"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 4 }}
              />

              {/* On-Time % Line */}
              <Line
                type="monotone"
                dataKey="onTime"
                name="On-Time %"
                stroke="#14b8a6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Route performance table */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold mb-3">
          Route Performance Details
        </h3>
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-[11px] sm:text-xs text-gray-400 border-b">
              <th className="text-left py-2 pr-4 font-medium">ROUTE</th>
              <th className="text-left py-2 pr-4 font-medium">AVG TIME</th>
              <th className="text-left py-2 pr-4 font-medium">ON-TIME %</th>
              <th className="text-left py-2 pr-4 font-medium">CAPACITY</th>
              <th className="text-left py-2 pr-4 font-medium">SATISFACTION</th>
              <th className="text-left py-2 font-medium">PERFORMANCE</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, idx) => (
              <tr
                key={r.name}
                className={
                  idx !== routes.length - 1 ? "border-b border-gray-100" : ""
                }
              >
                <td className="py-3 pr-4 text-gray-700 text-xs sm:text-sm font-medium">
                  {r.name}
                </td>
                <td className="py-3 pr-4 text-gray-600">{r.avgTime}</td>
                <td className={`py-3 pr-4 ${r.color} font-medium`}>
                  {r.onTime}
                </td>
                <td className="py-3 pr-4 text-gray-600">{r.capacity}</td>
                <td className="py-3 pr-4  text-xs sm:text-sm">
                  <span className="text-[#]">★</span> {r.satisfaction}
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                      r.performance === "EXCELLENT"
                        ? "bg-emerald-50 text-emerald-700"
                        : r.performance === "GOOD"
                          ? "bg-sky-50 text-sky-700"
                          : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {r.performance}
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


