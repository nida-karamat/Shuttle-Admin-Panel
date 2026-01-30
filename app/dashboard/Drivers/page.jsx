"use client";

import { useState } from "react";
import { Circle } from "lucide-react";

const stats = [
  { label: "Total Drivers", value: 32 },
  { label: "Drivers On-Duty", value: 18 },
  { label: "Drivers On-Break / Off-Duty", value: 6 },
];

const tabs = [
  "All",
  "On-Duty",
  "Off-Duty",
  "On-Break",
  "Unassigned",
  "Needs Attention",
];

const drivers = [
  {
    name: "Ahmed Al-Harbi",
    shuttle: "S12",
    route: "Metro Loop",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "32 sec ago",
  },
  {
    name: "Faisal Al-Qahtani",
    shuttle: "S4",
    route: "Head Office Express",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "1 min ago",
  },
  {
    name: "Majed Al-Otaibi",
    shuttle: "S16",
    route: "Residential Loop",
    shift: "3:00 PM – 11:00 PM",
    status: "Off-Duty",
    last: "2 hrs ago",
  },
  {
    name: "Sultan Al-Mutairi",
    shuttle: "S7",
    route: "West Terminal",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Break",
    last: "8 min ago",
  },
  {
    name: "Nawaf Al-Shammari",
    shuttle: "S22",
    route: "Building A Express",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "15 sec ago",
  },
  {
    name: "Yasser Al-Amri",
    shuttle: "S9",
    route: "Campus Connector",
    shift: "11:00 AM – 7:00 PM",
    status: "Off-Duty",
    last: "3 hrs ago",
  },
  {
    name: "Khalid Al-Subaie",
    shuttle: "S31",
    route: "City Center Link",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "20 sec ago",
  },
  {
    name: "Omar Al-Ghamdi",
    shuttle: "-",
    route: "-",
    shift: "Not Assigned",
    status: "Unassigned",
    last: "1 day ago",
  },
  {
    name: "Rashed Al-Shehri",
    shuttle: "S14",
    route: "Downtown Express",
    shift: "3:00 PM – 11:00 PM",
    status: "Needs Attention",
    last: "5 min ago",
  },
];

const statusStyles = {
  "On-Duty": {
    badge: "bg-teal-50 text-teal-600",
    dotBg: "bg-teal-600",
    dot: "text-teal-600",
  },
  "Off-Duty": {
    badge: "bg-gray-100 text-gray-500",
    dotBg: "bg-gray-400",
    dot: "text-gray-400",
  },
  "On-Break": {
    badge: "bg-yellow-50 text-yellow-600",
    dotBg: "bg-yellow-500",
    dot: "text-yellow-500",
  },
  Unassigned: {
    badge: "bg-gray-100 text-gray-400",
    dotBg: "bg-gray-300",
    dot: "text-gray-300",
  },
  "Needs Attention": {
    badge: "bg-red-50 text-red-600",
    dotBg: "bg-red-500",
    dot: "text-red-500",
  },
};

export default function DriversPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDrivers =
    activeTab === "All"
      ? drivers
      : drivers.filter((d) => d.status === activeTab);

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-[#003B3B]">Drivers Management</h2> 
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-5 border border-gray-100"
    >
      <p className="text-gray-500 text-sm">{item.title}</p>
      <p className="text-2xl font-semibold mt-1">{item.value}</p>
    </div>
  ))}
</div>


      {/* Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-sm border ${
              activeTab === tab
                ? "bg-[#003B3B] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Drivers Table */}
      <table className="w-full text-sm border-separate border-spacing-y-3">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="text-left px-5 py-3">Driver</th>
            <th className="text-left px-5 py-3">Assigned Shuttle</th>
            <th className="text-left px-5 py-3">Shift Hours</th>
            <th className="text-left px-5 py-3">Status</th>
            <th className="text-right px-5 py-3">Last Activity</th>
          </tr>
        </thead>

        <tbody>
          {filteredDrivers.map((d, i) => (
            <tr
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <td className="px-5 py-4">{d.name}</td>

              <td className="px-5 py-4">
                <p>{d.shuttle}</p>
                <p className="text-xs text-gray-400">{d.route}</p>
              </td>

              <td className="px-5 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Circle
                    className={`w-2.5 h-2.5 ${statusStyles[d.status].dot}`}
                    fill="currentColor"
                  />
                  <span>{d.shift}</span>
                </div>
              </td>

              <td className="px-5 py-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${statusStyles[d.status].badge}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${statusStyles[d.status].dotBg}`}
                  />
                  {d.status}
                </span>
              </td>

              <td className="px-5 py-4 text-right text-gray-400">{d.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
