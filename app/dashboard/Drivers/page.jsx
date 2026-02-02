"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Circle, Users, Clock as ClockIcon, ChevronDown } from "lucide-react";
import DriverDetails from "@/app/Components/Driver/DriverDetails";
import DriverActivityTimeline from "@/app/Components/Driver/DriverActivityTimeline";

const stats = [
  { 
    label: "Total Drivers", 
    value: 32,
    icon: <Users className="w-8 h-8 text-gray-400" />
  },
  { 
    label: "Drivers On-Duty", 
    value: 18,
    icon: <Users className="w-8 h-8 text-green-500" />
  },
  { 
    label: "Drivers On-Break / Off-Duty", 
    value: 6,
    icon: <ClockIcon className="w-8 h-8 text-orange-500" />
  },
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
    id: "01",
    name: "Ahmed Al-Harbi",
    phone: "+1 (555) 123-4567",
    email: "ahmed@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S1.png",
    shuttle: "S12",
    route: "Metro Loop",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "32 sec ago",
    currentAction: "Driving — On Route",
    lastEvent: "Started route 15 mins ago",
    nextBreak: "11:30 AM",
    onTimeRate: "98%",
    tripsThisWeek: "24",
    safetyScore: "95",
    timeline: [
      { type: "work", start: 7, duration: 190, label: "190 min" },
      { type: "lunch", start: 10.17, duration: 30, label: "Lunch Break" },
      { type: "work", start: 10.67, duration: 180, label: "180 min" },
      { type: "prayer", start: 13.67, duration: 15, label: "Prayer Break" },
      { type: "work", start: 13.92, duration: 130, label: "130 min" },
      { type: "fatigue", start: 16.08, duration: 20, label: "Fatigue Break" },
      { type: "work", start: 16.42, duration: 90, label: "90 min" },
      { type: "waiting", start: 17.92, duration: 60, label: "Waiting" },
      { type: "work", start: 18.92, duration: 150, label: "150 min" },
    ],
  },
  {
    id: "02",
    name: "Faisal Al-Qahtani",
    phone: "+1 (555) 234-5678",
    email: "faisal@abc.com",
    license: "Class B (Exp: 2026)",
    avatar: "/Shuttle/S2.png",
    shuttle: "S4",
    route: "Head Office Express",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "1 min ago",
    currentAction: "Driving — On Route",
    lastEvent: "Started route 20 mins ago",
    nextBreak: "11:30 AM",
    onTimeRate: "97%",
    tripsThisWeek: "22",
    safetyScore: "94",
    timeline: [
      { type: "work", start: 7, duration: 200, label: "200 min" },
      { type: "lunch", start: 10.33, duration: 30, label: "Lunch Break" },
      { type: "work", start: 10.83, duration: 170, label: "170 min" },
    ],
  },
  {
    id: "03",
    name: "Majed Al-Otaibi",
    phone: "+1 (555) 345-6789",
    email: "majed@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S3.png",
    shuttle: "S16",
    route: "Residential Loop",
    shift: "3:00 PM – 11:00 PM",
    status: "Off-Duty",
    last: "2 hrs ago",
    currentAction: "Off-Duty",
    lastEvent: "Completed shift 2 hrs ago",
    nextBreak: "N/A",
    onTimeRate: "96%",
    tripsThisWeek: "20",
    safetyScore: "93",
    timeline: [
      { type: "off-duty", start: 6, duration: 540, label: "Off-duty" },
    ],
  },
  {
    id: "04",
    name: "Sultan Al-Mutairi",
    phone: "+1 (555) 456-7890",
    email: "sultan@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S4.png",
    shuttle: "S7",
    route: "West Terminal",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Break",
    last: "8 min ago",
    currentAction: "On Break",
    lastEvent: "Started break 8 mins ago",
    nextBreak: "Resuming soon",
    onTimeRate: "95%",
    tripsThisWeek: "18",
    safetyScore: "92",
    timeline: [
      { type: "work", start: 7, duration: 180, label: "180 min" },
      { type: "lunch", start: 10, duration: 45, label: "Lunch Break" },
    ],
  },
  {
    id: "05",
    name: "Nawaf Al-Shammari",
    phone: "+1 (555) 567-8901",
    email: "nawaf@abc.com",
    license: "Class B (Exp: 2026)",
    avatar: "/Shuttle/S5.png",
    shuttle: "S22",
    route: "Building A Express",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "15 sec ago",
    currentAction: "Driving — On Route",
    lastEvent: "Started route 10 mins ago",
    nextBreak: "11:30 AM",
    onTimeRate: "99%",
    tripsThisWeek: "26",
    safetyScore: "96",
    timeline: [
      { type: "work", start: 7, duration: 210, label: "210 min" },
      { type: "lunch", start: 10.5, duration: 30, label: "Lunch Break" },
      { type: "work", start: 11, duration: 240, label: "240 min" },
    ],
  },
  {
    id: "06",
    name: "Yasser Al-Amri",
    phone: "+1 (555) 678-9012",
    email: "yasser@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S7.png",
    shuttle: "S9",
    route: "Campus Connector",
    shift: "11:00 AM – 7:00 PM",
    status: "Off-Duty",
    last: "3 hrs ago",
    currentAction: "Off-Duty",
    lastEvent: "Completed shift 3 hrs ago",
    nextBreak: "N/A",
    onTimeRate: "94%",
    tripsThisWeek: "19",
    safetyScore: "91",
    timeline: [
      { type: "off-duty", start: 6, duration: 300, label: "Off-duty" },
      { type: "work", start: 11, duration: 480, label: "480 min" },
    ],
  },
  {
    id: "07",
    name: "Khalid Al-Subaie",
    phone: "+1 (555) 789-0123",
    email: "khalid@abc.com",
    license: "Class B (Exp: 2026)",
    avatar: "/Shuttle/S8.png",
    shuttle: "S31",
    route: "City Center Link",
    shift: "7:00 AM – 3:00 PM",
    status: "On-Duty",
    last: "20 sec ago",
    currentAction: "Driving — On Route",
    lastEvent: "Started route 12 mins ago",
    nextBreak: "11:30 AM",
    onTimeRate: "97%",
    tripsThisWeek: "23",
    safetyScore: "94",
    timeline: [
      { type: "work", start: 7, duration: 195, label: "195 min" },
      { type: "lunch", start: 10.25, duration: 30, label: "Lunch Break" },
      { type: "work", start: 10.75, duration: 255, label: "255 min" },
    ],
  },
  {
    id: "08",
    name: "Omar Al-Ghamdi",
    phone: "+1 (555) 890-1234",
    email: "omar@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S1.png",
    shuttle: "-",
    route: "-",
    shift: "Not Assigned",
    status: "Unassigned",
    last: "1 day ago",
    currentAction: "Unassigned",
    lastEvent: "No recent activity",
    nextBreak: "N/A",
    onTimeRate: "N/A",
    tripsThisWeek: "0",
    safetyScore: "N/A",
    timeline: [
      { type: "waiting", start: 6, duration: 1080, label: "Waiting" },
    ],
  },
  {
    id: "09",
    name: "Rashed Al-Shehri",
    phone: "+1 (555) 901-2345",
    email: "rashed@abc.com",
    license: "Class B (Exp: 2025)",
    avatar: "/Shuttle/S2.png",
    shuttle: "S14",
    route: "Downtown Express",
    shift: "3:00 PM – 11:00 PM",
    status: "Needs Attention",
    last: "5 min ago",
    currentAction: "Needs Attention",
    lastEvent: "Issue reported 5 mins ago",
    nextBreak: "N/A",
    onTimeRate: "85%",
    tripsThisWeek: "15",
    safetyScore: "78",
    timeline: [
      { type: "work", start: 15, duration: 120, label: "120 min" },
      { type: "emergency", start: 17, duration: 30, label: "Emergency" },
      { type: "waiting", start: 17.5, duration: 30, label: "Waiting" },
    ],
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
  const [selectedDriver, setSelectedDriver] = useState(null);

  const filteredDrivers =
    activeTab === "All"
      ? drivers
      : drivers.filter((d) => d.status === activeTab);

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#003B3B]">Drivers Management</h2>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-2xl font-semibold mt-1 text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-sm border transition-colors ${
                activeTab === tab
                  ? "bg-[#003B3B] text-white border-[#003B3B]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Two Panel Layout */}
      <div className="flex flex-col lg:flex-row gap-0 h-[calc(100vh-280px)]">
        {/* Left Panel - Driver List + Timeline */}
        <div className={`flex-1 ${selectedDriver ? "lg:w-2/3" : "w-full"} transition-all duration-300`}>
          <div className="px-6 pb-6">
            {/* Filter Dropdowns */}
            <div className="flex gap-3 mb-4">
              <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
                <option>Assigned Shuttle</option>
              </select>
              <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
                <option>Assigned Route</option>
              </select>
              <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
                <option>Shift</option>
              </select>
            </div>

            {/* Drivers Table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Driver</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Assigned Shuttle</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Shift Hours</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Last Activity</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredDrivers.map((d, i) => {
                    const isSelected = selectedDriver?.id === d.id;
                    return (
                      <React.Fragment key={d.id || i}>
                        <tr
                          onClick={() => handleDriverClick(d)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-[#127E88] text-white hover:bg-[#0f6d75]"
                              : "bg-white hover:bg-gray-50"
                          }`}
                        >
                          <td className={`px-5 py-4 ${isSelected ? "rounded-l-lg" : ""}`}>
                            <div className="flex items-center gap-3">
                              <Image
                                src={d.avatar}
                                alt={d.name}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <p className={`font-medium ${isSelected ? "text-white" : "text-gray-900"}`}>
                                  {d.name}
                                </p>
                                <p className={`text-xs ${isSelected ? "text-white/80" : "text-gray-500"}`}>
                                  {d.phone}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            <p className={isSelected ? "text-white" : "text-gray-900"}>{d.shuttle}</p>
                            <p className={`text-xs ${isSelected ? "text-white/80" : "text-gray-400"}`}>
                              {d.route}
                            </p>
                          </td>

                          <td className="px-5 py-4">
                            <div className={`flex items-center gap-2 ${isSelected ? "text-white" : "text-gray-700"}`}>
                              <Circle
                                className={`w-2.5 h-2.5 ${isSelected ? "text-white" : statusStyles[d.status].dot}`}
                                fill="currentColor"
                              />
                              <span>{d.shift}</span>
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                                isSelected
                                  ? "bg-white/20 text-white border border-white/30"
                                  : statusStyles[d.status].badge
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  isSelected ? "bg-white" : statusStyles[d.status].dotBg
                                }`}
                              />
                              {d.status}
                            </span>
                          </td>

                          <td className={`px-5 py-4 text-right ${isSelected ? "text-white rounded-r-lg" : "text-gray-400"}`}>
                            {d.last}
                          </td>
                        </tr>
                        {/* Timeline row - directly below selected driver */}
                        {isSelected && (
                          <tr>
                            <td colSpan={5} className="px-0 py-0 bg-white">
                              <div className="px-5 py-4">
                                <DriverActivityTimeline driver={d} />
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Panel - Driver Details */}
        {selectedDriver && (
          <DriverDetails driver={selectedDriver} onClose={() => setSelectedDriver(null)} />
        )}
      </div>
    </div>
  );
}
