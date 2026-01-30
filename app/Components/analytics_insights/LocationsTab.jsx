import React from "react";

const rows = [
  {
    location: "H01 - Main Campus",
    pickups: 342,
    dropoffs: 288,
    peakTime: "08:30 AM",
    utilization: "88%",
    status: "OPTIMAL",
    statusColor: "bg-emerald-50 text-emerald-700",
    barColor: "bg-emerald-500",
  },
  {
    location: "H02 - Tech Park",
    pickups: 289,
    dropoffs: 315,
    peakTime: "05:45 PM",
    utilization: "82%",
    status: "OPTIMAL",
    statusColor: "bg-emerald-50 text-emerald-700",
    barColor: "bg-emerald-500",
  },
  {
    location: "H03 - Downtown",
    pickups: 267,
    dropoffs: 256,
    peakTime: "09:00 AM",
    utilization: "76%",
    status: "OPTIMAL",
    statusColor: "bg-emerald-50 text-emerald-700",
    barColor: "bg-emerald-500",
  },
  {
    location: "Metro Station",
    pickups: 412,
    dropoffs: 398,
    peakTime: "08:00 AM",
    utilization: "95%",
    status: "HIGH TRAFFIC",
    statusColor: "bg-amber-50 text-amber-700",
    barColor: "bg-emerald-600",
  },
  {
    location: "Transit Hub",
    pickups: 356,
    dropoffs: 378,
    peakTime: "06:00 PM",
    utilization: "91%",
    status: "HIGH TRAFFIC",
    statusColor: "bg-amber-50 text-amber-700",
    barColor: "bg-emerald-600",
  },
  {
    location: "Campus West",
    pickups: 198,
    dropoffs: 189,
    peakTime: "08:15 AM",
    utilization: "68%",
    status: "LOW TRAFFIC",
    statusColor: "bg-yellow-50 text-yellow-700",
    barColor: "bg-amber-400",
  },
];

export default function LocationsTab() {
  return (
    <div className="space-y-6">
      {/* Top table card */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold mb-3">
          Location Traffic &amp; Utilization
        </h3>

        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-[11px] sm:text-xs text-gray-400 border-b">
              <th className="text-left py-2 pr-4 font-medium">LOCATION</th>
              <th className="text-left py-2 pr-4 font-medium">PICKUPS</th>
              <th className="text-left py-2 pr-4 font-medium">DROP-OFFS</th>
              <th className="text-left py-2 pr-4 font-medium">PEAK TIME</th>
              <th className="text-left py-2 pr-4 font-medium">UTILIZATION</th>
              <th className="text-left py-2 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.location}
                className={idx !== rows.length - 1 ? "border-b border-gray-100" : ""}
              >
                <td className="py-3 pr-4 text-gray-700 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {row.location}
                  </div>
                </td>
                <td className="py-3 pr-4 text-gray-600">{row.pickups}</td>
                <td className="py-3 pr-4 text-gray-600">{row.dropoffs}</td>
                <td className="py-3 pr-4 text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
                      ●
                    </span>
                    {row.peakTime}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-emerald-50 overflow-hidden max-w-[140px]">
                      <div
                        className={`h-full ${row.barColor}`}
                        style={{ width: row.utilization }}
                      />
                    </div>
                    <span className="text-gray-700 text-xs">
                      {row.utilization}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Busiest Location</p>
          <p className="text-sm font-semibold mb-1">Metro Station</p>
          <p className="text-xs text-gray-500">
            412 pickups • 95% utilization
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Most Common Peak</p>
          <p className="text-sm font-semibold mb-1">08:00 - 09:00 AM</p>
          <p className="text-xs text-gray-500">Morning rush hour</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Avg Utilization</p>
          <p className="text-sm font-semibold mb-1">83.3%</p>
          <p className="text-xs text-gray-500">Across all locations</p>
        </div>
      </div>
    </div>
  );
}
