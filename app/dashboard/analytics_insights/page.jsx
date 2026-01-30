"use client";

import React, { useState } from "react";
import ShuttlesTab from "../../Components/analytics_insights/ShuttlesTab";
import DriversTab from "../../Components/analytics_insights/DriversTab";
import RoutesTab from "../../Components/analytics_insights/RoutesTab";
import LocationsTab from "../../Components/analytics_insights/LocationsTab";

import { Activity, Truck, Users, Zap } from "lucide-react";

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
        <div className="relative overflow-hidden">
          
         <img src="/overview.png" alt="overview" className="w-full h-full object-cover" />
          
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fleet Status Distribution */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-1">
              Fleet Status Distribution
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Overview of current shuttle status
            </p>

            {/* Donut chart style */}
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-conic-to-r from-emerald-500 via-sky-400 via-amber-400 to-rose-500" />
                <div className="absolute inset-3 rounded-full bg-white" />
                <div className="absolute inset-9 rounded-full bg-emerald-50 flex flex-col items-center justify-center text-xs">
                  <span className="text-gray-500">On Route</span>
                  <span className="font-semibold text-sm">18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-2 text-xs">
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
