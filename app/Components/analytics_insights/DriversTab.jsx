import React from "react";

const drivers = [
  {
    name: "Amir K.",
    trips: 87,
    rating: "4.8",
    onTime: "95%",
    hours: "38.5h",
    incidents: 0,
    status: "ON DUTY",
    driver: "D1",
    color:"text-[#10B981]",
    incidentsColor:"text-[#10B981]"

  },
  {
    name: "Hassan M.",
    trips: 82,
    rating: "4.9",
    onTime: "97%",
    hours: "40h",
    incidents: 0,
    status: "ON DUTY",
    driver: "D2",
     color:"text-[#10B981]",
     incidentsColor:"text-[#10B981]"
  },
  {
    name: "Fatima R.",
    trips: 79,
    rating: "4.7",
    onTime: "93%",
    hours: "36.2h",
    incidents: 1,
    status: "ON DUTY",
    driver: "D3",
    color:"text-[#F59E0B]",
    incidentsColor:"text-[#EF4444]"

  },
  {
    name: "Omar S.",
    trips: 91,
    rating: "4.9",
    onTime: "96%",
    hours: "42h",
    incidents: 0,
    status: "ON DUTY",
    driver: "D4",
    color:"text-[#10B981]",
     incidentsColor:"text-[#10B981]"
   
  },
  {
    name: "Zainab A.",
    trips: 85,
    rating: "4.8",
    onTime: "94%",
    hours: "39.5h",
    incidents: 0,
    status: "ON DUTY",
    driver: "D5",
    color:"text-[#F59E0B]",
     incidentsColor:"text-[#10B981]"
  },
  {
    name: "Khalid F.",
    trips: 78,
    rating: "4.6",
    onTime: "89%",
    hours: "35h",
    incidents: 2,
    status: "ON DUTY",
    driver: "D6",
    color:"text-[#EF4444]",
    incidentsColor:"text-[#EF4444]"
   
  },
];

export default function DriversTab() {
  return (
    <div className="space-y-6">
      {/* Driver performance table */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold mb-3">
          Driver Performance Metrics
        </h3>

        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-[11px] sm:text-xs text-gray-400 border-b">
              <th className="text-left py-2 pr-4 font-medium">DRIVER</th>
              <th className="text-left py-2 pr-4 font-medium">TRIPS</th>
              <th className="text-left py-2 pr-4 font-medium">RATING</th>
              <th className="text-left py-2 pr-4 font-medium">ON-TIME %</th>
              <th className="text-left py-2 pr-4 font-medium">HOURS</th>
              <th className="text-left py-2 pr-4 font-medium">INCIDENTS</th>
              <th className="text-left py-2 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((d, idx) => (
              <tr
                key={d.name}
                className={idx !== drivers.length - 1 ? "border-b border-gray-100" : ""}
              >
                <td className="py-3 pr-4 text-gray-700 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#003B3B] text-white text-[11px] flex items-center justify-center">
                      {d.driver}
                    </span>
                    {d.name}
                  </div>
                </td>
                <td className="py-3 pr-4 text-gray-600">{d.trips}</td>
                <td className="py-3 pr-4  text-xs sm:text-sm">
                  <span className="text-[#F59E0B]">★</span> {d.rating}
                </td>
                <td className={`py-3 pr-4  font-medium ${d.color}`}>
                  {d.onTime}
                </td>
                <td className="py-3 pr-4 text-gray-600">{d.hours}</td>
                <td className={`py-3 pr-4 ${d.incidentsColor}`}>{d.incidents}</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Top Performer</p>
          <p className="text-sm font-semibold mb-1">Hassan M.</p>
          <p className="text-xs text-gray-500">
            97% on-time • 4.9 rating • 82 trips
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Avg Work Hours</p>
          <p className="text-sm font-semibold mb-1">38.5h</p>
          <p className="text-xs text-gray-500">Per driver this week</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-[11px] text-gray-400 mb-1">Avg Customer Rating</p>
          <p className="text-sm font-semibold mb-1">4.78</p>
          <p className="text-xs text-gray-500">Based on 1,247 trips</p>
        </div>
      </div>
    </div>
  );
}


