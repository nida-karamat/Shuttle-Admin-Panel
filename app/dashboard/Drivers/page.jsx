"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Circle, User, Clock as ClockIcon,UserRoundSearch,Info  } from "lucide-react";
import { TabStyles } from "../../theme/color";
import DriverDetails from "@/app/Components/Driver/DriverDetails";
import DriverActivityTimeline from "@/app/Components/Driver/DriverActivityTimeline";

const stats = [
  {
    label: "Total Drivers",
    value: 32,
    icon: <User className="w-5 h-5 text-gray-400" />,
   
    bgIcon: "bg-gray-100",
    
  },
  {
    label: "Drivers On-Duty",
    value: 18,
    icon: <UserRoundSearch className="w-5 h-5 text-green-500" />,
    bgIcon: "bg-green-100",
   
  },
  {
    label: "Drivers On-Break / Off-Duty",
    value: 6,
    icon: <Info className="w-5 h-5 text-orange-500" />,
    bgIcon: "bg-orange-100",
  
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
    avatar: "/shuttle/S1.png",
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
    avatar: "/shuttle/S2.png",
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
    avatar: "/shuttle/S3.png",
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
    avatar: "/shuttle/S4.png",
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
    avatar: "/shuttle/S5.png",
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
    avatar: "/shuttle/S7.png",
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
    avatar: "/shuttle/S8.png",
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
    avatar: "/shuttle/S1.png",
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
    avatar: "/shuttle/S2.png",
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
    <div className="">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#003B3B]">
          Drivers Management
        </h2>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bgIcon}`}
                  >
                    {stat.icon}
                  </div>

                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-800">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 items-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs border transition-colors shrink-0 ${
                activeTab === tab
                  ? `${TabStyles.solidButton.active.bg} ${TabStyles.solidButton.active.text} ${TabStyles.solidButton.active.border}`
                  : `${TabStyles.solidButton.inactive.bg} ${TabStyles.solidButton.inactive.text} ${TabStyles.solidButton.inactive.border} ${TabStyles.solidButton.inactive.hover}`
              }`}
            >
              {tab}
            </button>
          ))}

          {/* Filter Dropdowns */}
          <div className="flex gap-2 ml-auto">
            <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-700 bg-white shrink-0">
              <option>Assigned Shuttle</option>
            </select>
            <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-700 bg-white shrink-0">
              <option>Assigned Route</option>
            </select>
            <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-700 bg-white shrink-0">
              <option>Shift</option>
            </select>
          </div>
        </div>
      </div>

      {/* Two Panel Layout */}
      <div className="flex flex-col lg:flex-row gap-0 h-[calc(100vh-300px)]">
        {/* Left Panel - Driver List + Timeline */}
        <div
          className={`flex-1 ${selectedDriver ? "lg:w-2/3" : "w-full"} transition-all duration-300`}
        >
          <div className="px-6 pb-6 h-full ">
            {/* Header Row */}
            <div className="bg-gray-50 rounded-lg px-5 py-3 mb-3 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase">
              <div className="flex items-center gap-4 flex-1">
                <span>Driver</span>
              </div>
              <div className="flex-1">
                <span>Assigned Shuttle</span>
              </div>
              <div className="flex-1">
                <span>Shift Hours</span>
              </div>
              <div className="shrink-0 w-24">
                <span>Status</span>
              </div>
              <div className="shrink-0 text-right w-24">
                <span>Last Activity</span>
              </div>
            </div>

            {/* Drivers List - Individual Cards */}
            <div className="space-y-3">
              {filteredDrivers.map((d, i) => {
                const isSelected = selectedDriver?.id === d.id;
                return (
                  <React.Fragment key={d.id || i}>
                    {/* Driver Card */}
                    <div
                      onClick={() => handleDriverClick(d)}
                      className={`border rounded-xl px-5 py-4 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#127E88] border-[#127E88] text-white"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {isSelected ? (
                        /* Inline layout for selected */
                        <div className="flex items-center gap-2 text-xs">
                          <Image
                            src={d.avatar}
                            alt={d.name}
                            width={40}
                            height={40}
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                          />
                          <span className="font-medium whitespace-nowrap">
                            {d.name}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="whitespace-nowrap truncate">
                            {d.phone}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="whitespace-nowrap truncate">
                            {d.shuttle}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="whitespace-nowrap truncate">
                            {d.shift}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-white/20 border border-white/30 whitespace-nowrap shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            {d.status}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="ml-auto text-white/60 whitespace-nowrap shrink-0 text-right">
                            {d.last}
                          </span>
                        </div>
                      ) : (
                        /* Card layout for non-selected */
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <Image
                              src={d.avatar}
                              alt={d.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900">
                                {d.name}
                              </p>
                              <p className="text-xs text-gray-500">{d.phone}</p>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 font-medium">
                              {d.shuttle}
                            </p>
                            <p className="text-xs text-gray-400">{d.route}</p>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Circle
                                className={`w-2.5 h-2.5 shrink-0 ${statusStyles[d.status].dot}`}
                                fill="currentColor"
                              />
                              <span className="truncate">{d.shift}</span>
                            </div>
                          </div>

                          <div className="shrink-0">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${statusStyles[d.status].badge}`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${statusStyles[d.status].dotBg}`}
                              />
                              {d.status}
                            </span>
                          </div>

                          <div className="shrink-0 text-right text-gray-400 text-sm w-24">
                            {d.last}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline row - directly below selected driver */}
                    {isSelected && (
                      <div className="bg-white rounded-lg border border-gray-200 px-5 py-4">
                        <DriverActivityTimeline driver={d} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Panel - Driver Details */}
        {selectedDriver && (
          <DriverDetails
            driver={selectedDriver}
            onClose={() => setSelectedDriver(null)}
          />
        )}
      </div>
    </div>
  );
}
