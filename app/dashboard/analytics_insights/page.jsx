"use client";

import React, { useState } from "react";
import ShuttlesTab from "../../Components/analytics_insights/ShuttlesTab";
import DriversTab from "../../Components/analytics_insights/DriversTab";
import RoutesTab from "../../Components/analytics_insights/RoutesTab";
import LocationsTab from "../../Components/analytics_insights/LocationsTab";

import { Activity, Truck, Users, Zap } from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { day: "Mon", passengers: 2400, trips: 160 },
  { day: "Tue", passengers: 2550, trips: 170 },
  { day: "Wed", passengers: 2890, trips: 195 },
  { day: "Thu", passengers: 2700, trips: 180 },
  { day: "Fri", passengers: 3100, trips: 210 },
  { day: "Sat", passengers: 2300, trips: 165 },
  { day: "Sun", passengers: 2200, trips: 150 },
];

const fleetStatusData = [
  { name: "On Route", value: 18, color: "#10b981" }, // emerald
  { name: "At Stop", value: 4, color: "#3b82f6" }, // blue
  { name: "On Break", value: 2, color: "#f59e0b" }, // amber
  { name: "Maintenance", value: 4, color: "#ef4444" }, // red
];



const kpiCards = [
  {
    label: "Total Trips",
    value: "1,247",
    change: "+12.5%",
    icon: <Activity size={18} />,
    iconBg: "bg-gray-100 text-gray-600",
  },
  {
    label: "Active Shuttles",
    value: "24/28",
    change: "+8.7%",
    icon: <Truck size={18} />,
    iconBg: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "On-Duty Drivers",
    value: "32/40",
    change: "+9.0%",
    icon: <Users size={18} />,
    iconBg: "bg-sky-50 text-sky-700",
  },
  {
    label: "Avg. Response Time",
    value: "4.2 min",
    change: "-8.4%",
    icon: <Zap size={18} />,
    iconBg: "bg-rose-50 text-rose-600",
  },  
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "shuttles", label: "Shuttles" },
  { id: "drivers", label: "Drivers" },
  { id: "routes", label: "Routes" },
  { id: "locations", label: "Locations" },
];

export default function AnalyticsInsightsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6 min-h-screen space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-[#003B3B]">
          Analytics &amp; Insights
        </h2>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {kpiCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm"
            >
              {/* Left icon */}
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconBg}`}
              >
                {card.icon}
              </div>

              {/* Center text */}
              <div className="flex-1">
                <p className="text-2xl font-semibold leading-tight">
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{card.label}</p>
              </div>

              {/* Top-right change */}
              <span
                className={`absolute right-4 top-3 text-xs font-semibold ${
                  card.change.startsWith("-")
                    ? "text-red-500"
                    : "text-emerald-600"
                }`}
              >
                {card.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TAB NAV */}
      <div className="bg-white rounded-2xl shadow-sm px-4 sm:px-6 py-2 flex flex-wrap gap-3 items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                isActive
                  ? "text-emerald-900"
                  : "text-gray-500 hover:text-emerald-900"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      {activeTab === "overview" && <OverviewTab />}
      {activeTab === "shuttles" && <ShuttlesTab />}
      {activeTab === "drivers" && <DriversTab />}
      {activeTab === "routes" && <RoutesTab />}
      {activeTab === "locations" && <LocationsTab />}
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* MAIN CHART */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm font-semibold">Trip Volume &amp; Passenger Load</h3>
            <p className="text-xs text-gray-500">
              Weekly trends and analytics
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Trips
            </span>
            <span className="flex items-center gap-1 text-teal-600">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Passengers
            </span>
          </div>
        </div>

        {/* Simple line-chart style background */}
        <div className="relative overflow-hidden h-64">
          
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="passengerFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Passenger Area */}
            <Area
              type="monotone"
              dataKey="passengers"
              stroke="#14b8a6"
              fill="url(#passengerFill)"
              name="Passengers"
            />

            {/* Trips Line */}
            <Line
              type="monotone"
              dataKey="trips"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Trips"
            />
          </AreaChart>
        </ResponsiveContainer>
          
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fleet Status Distribution */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Fleet Status Distribution
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Overview of current shuttle status
            </p>
          </div>

          {/* Donut chart centered */}
          <div className="flex flex-col items-center gap-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={fleetStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {fleetStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-8 w-full text-xs">
              {[
                { label: "On Route", value: 18, color: "bg-emerald-500" },
                { label: "At Stop", value: 4, color: "bg-sky-400" },
                { label: "On Break", value: 2, color: "bg-amber-400" },
                { label: "Maintenance", value: 4, color: "bg-rose-500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${item.color}`}
                    />
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Highlights */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          <h3 className="text-sm font-semibold mb-1">Operational Highlights</h3>
          <p className="text-xs text-gray-500 mb-4">
            Key performance indicators this week
          </p>

          <div className="space-y-3">
            {[
              {
                label: "On-Time Performance",
                value: "94.2%",
                change: "+2.1%",
              },
              { label: "Fleet Utilization", value: "85.7%", change: "+4.3%" },
              { label: "Break Compliance", value: "98.5%", change: "+1.8%" },
              { label: "Safety Incidents", value: "3", change: "-40%" },
            ].map((item, idx) => (
              <div
                key={item.label}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5"
              >
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold mt-0.5">
                    {item.value}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.change.startsWith("-")
                      ? "bg-red-50 text-red-500"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
