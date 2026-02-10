import React from "react";
import { MapPin,DoorClosed,Building2 } from "lucide-react";
export default function ActiveRoute({ routes = null }) {
  const example = [
    {
      id: "S1",
      label: "Main Gate",
      status: "ACTIVE",
      statusColor: "bg-[#10B981]",
      color: "bg-[#E5E7EB]",
      badges: [
        {
          text: "Main Gate",
          color: "bg-[#EF4444]",
          icon: <MapPin className="w-4 h-4  text-black" />,
        },
        {
          text: "Metro",
          color: "bg-[#10B981]",
          icon: <Building2 className="w-4 h-4  text-black" />,
        },
        {
          text: "West Gate",
          color: "bg-[#F59E0B]",
          icon: <DoorClosed className="w-4 h-4  text-black" />,
        },
        {
          text: "Head Office",
          color: "bg-[#F59E0B]",
          icon: <MapPin className="w-4 h-4  text-black" />,
        },
      ],
    },
    {
      id: "S2",
      label: "Metro",
      status: "EMERGENCY",
      statusColor: "bg-[#EF4444]",
      color: "bg-red-200",
      badges: [
        {
          text: "Metro",
          color: "bg-[#F59E0B]",
          icon: <MapPin className="w-4 h-4  text-black" />,
        },
        {
          text: "Block C",
          color: "bg-[#10B981]",
          icon: <Building2 className="w-4 h-4  text-black" />,
        },
        {
          text: "East Gate",
          color: "bg-[#EF4444]",
          icon: <DoorClosed className="w-4 h-4  text-black" />,
        },
        {
          text: "Metro",
          color: "bg-[#F59E0B]",
          icon: <Building2 className="w-4 h-4  text-black" />,
        },
      ],
    },
    {
      id: "S3",
      label: "West Gate",
      status: "ACTIVE",
      statusColor: "bg-[#10B981]",
      color: "bg-[#E5E7EB]",
      badges: [
        {
          text: "Main Gate",
          color: "bg-[#F59E0B]",
          icon: <MapPin className="w-4 h-4  text-black" />,
        },
        {
          text: "East Gate",
          color: "bg-[#F59E0B]",
          icon: <DoorClosed className="w-4 h-4  text-black" />,
        },
        {
          text: "Metro",
          color: "bg-[#F59E0B]",
          icon: <Building2 className="w-4 h-4  text-black" />,
        },
      ],
    },
    {
      id: "S4",
      label: "Head Office",
      status: "VIP Duty",
      statusColor: "bg-[#10B981]",
      color: "bg-[#E5E7EB]",
      badges: [
        {
          text: "Main Gate",
          color: "bg-[#3B82F6]",
          icon: <MapPin className="w-4 h-4  text-black" />,
        },
        {
          text: "VIP Location",
          color: "bg-[#3B82F6]",
          icon: <DoorClosed className="w-4 h-4  text-black" />,
        },
      ],
    },
  ];

  const list = routes || example;

  return (
    <div className="space-y-4 mt-5 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start gap-3">
        <div>
          <div className="font-semibold">Active Routes</div>
          <p className="text-xs text-gray-500">View routes complete details</p>
        </div>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="font-medium">Normal Traffic</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="font-medium">High Traffic</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="font-medium">Emergency</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-medium">VIP Duty</span>
          </div>
        </div>
      </div>

      {list.map((r, i) => (
        <div
          key={r.id}
          className={`rounded-lg p-4 ${r.color} border border-gray-100`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="font-semibold">{r.label}</div>
              <div
                className={`px-2 py-1 rounded-full text-xs  ${r.statusColor}`}
              >
                {r.status}
              </div>
            </div>
            <div className="text-xs text-gray-400">
              Assigned: {""}
              <span className="font-medium text-gray-600">Amir (D1) </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4 overflow-x-auto">
            {r.badges.map((b, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={`px-4 py-2 rounded-full ${b.color} text-sm font-medium`}
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">{b.icon}</div>
                    {b.text}
                  </div>
                </div>
                {idx !== r.badges.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-200 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
