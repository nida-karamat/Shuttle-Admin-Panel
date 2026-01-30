"use client";

import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {CircleX } from "lucide-react";
import LocationPanel from "../../Components/Location/Location";

const stats = [
  {
    title: "Total Locations",
    value: 42,
    icon: (
      <div className="bg-gray-100 p-3 rounded-lg">
        <FaMapMarkerAlt className="text-xl text-gray-500" />
      </div>
    ),
  },
  {
    title: "Active Locations",
    value: 36,
    icon: (
      <div className="bg-green-100 p-3 rounded-lg">
        <IoMdCheckmarkCircleOutline className="text-xl text-green-500" />
      </div>
    ),
  },
  { title: "In-Active Locations", value: 6 ,
     icon: (
      <div className="bg-orange-100 p-3 rounded-lg">
        <CircleX className="text-xl text-orange-500" />
      </div>
    ),
  },
];

const locations = [
  {
    name: "Building A - Main Entrance",
    area: "Campus Zone 1",
    lat: "25.2048°N",
    lng: "55.2708°E",
    routes: ["Metro Loop", "City Center"],
    traffic: "High",
    status: "Active",
    time: "2 mins ago",
   
  },
  {
    name: "West Gate",
    area: "Campus Zone 2",
    lat: "25.2062°N",
    lng: "55.2719°E",
    routes: ["Metro Loop", "Residential Loop"],
    traffic: "High",
    status: "Active",
    time: "5 mins ago",
  },
  {
    name: "Head Office Plaza",
    area: "Corporate District",
    lat: "25.2045°N",
    lng: "55.2720°E",
    routes: ["City Center", "Corporate Express"],
    traffic: "Medium",
    status: "Active",
    time: "10 mins ago",
  },
  {
    name: "North Terminal",
    area: "Transit Hub",
    lat: "25.2060°N",
    lng: "55.2698°E",
    routes: ["Residential Loop"],
    traffic: "High",
    status: "Active",
    time: "1 min ago",
  },
  {
    name: "Residential Zone A",
    area: "Housing Complex",
    lat: "25.2038°N",
    lng: "55.2737°E",
    routes: ["Residential Loop"],
    traffic: "Medium",
    status: "Active",
    time: "15 mins ago",
  },
  {
    name: "Shopping Center",
    area: "Retail District",
    lat: "25.2042°N",
    lng: "55.2741°E",
    routes: ["City Center"],
    traffic: "Low",
    status: "Inactive",
    time: "2 hours ago",
  },
  {
    name: "Old Warehouse District",
    area: "Industrial Area",
    lat: "25.2025°N",
    lng: "55.2759°E",
    routes: [],
    traffic: "Low",
    status: "Disabled",
    time: "5 days ago",
  },
];

export default function LocationsPage() {
  const [filter, setFilter] = useState("All");
  const mappedLocations = locations.map((l, idx) => ({
    id: idx + 1,
    name: l.name,
    area: l.area,
    lat: l.lat,
    lng: l.lng,
    routes: l.routes || [],
    traffic: l.traffic || "Low",
    status: l.status || "Inactive",
    time: l.time || "",
    createdOn: l.createdOn || "Jan 01, 2025",
    lastUpdated: l.lastUpdated || l.time || "",
    peakHours: l.peakHours || "—",
    arrivals: l.arrivals || 0,
    category: l.category || "—",
    description: l.description || "",
  }));
  return (
    <div className="p-6  min-h-screen ">
      <h2 className="text-2xl font-semibold mb-6 font-Century">
        Location Management
      </h2>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-4">
              {/* Icon box */}
              <div className=" p-3 rounded-lg">
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-semibold">{s.value}</h2>
                <p className="text-sm text-gray-500">{s.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        {[
          "All",
          "Active",
          "In-Active",
          "High Traffic",
          "Low Traffic",
          "Recently Added",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-3 rounded-lg text-sm ${
              filter === item
                ? "bg-[#003B3B] text-white"
                : "bg-white border border-gray-200 text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Locations list + detail panel (click a row to open details) */}
      <div className="mt-5">
        {(() => {
          if (filter === "All") return <LocationPanel locations={mappedLocations} />;
          const filtered = mappedLocations.filter((l) => {
            if (filter === "Active") return l.status === "Active";
            if (filter === "In-Active") return l.status === "Inactive";
            if (filter === "High Traffic") return l.traffic === "High";
            if (filter === "Low Traffic") return l.traffic === "Low";
            return true; // Recently Added - default to all
          });
          return <LocationPanel locations={filtered} />;
        })()}
      </div>
    </div>
  );
}
