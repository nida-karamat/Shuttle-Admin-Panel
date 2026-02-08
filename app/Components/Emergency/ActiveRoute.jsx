import React from "react";

export default function ActiveRoute({ routes = null }) {
  const example = [
    {
      id: "S1",
      label: "Main Gate",
      status: "ACTIVE",
      color: "bg-green-50",
      badges: [
        { text: "Main Gate", color: "bg-orange-100" },
        { text: "Metro", color: "bg-green-500" },
        { text: "West Gate", color: "bg-yellow-100" },
        { text: "Head Office", color: "bg-yellow-100" },
      ],
    },
    {
      id: "S2",
      label: "Metro",
      status: "EMERGENCY",
      color: "bg-red-50",
      badges: [
        { text: "Metro", color: "bg-orange-100" },
        { text: "Block C", color: "bg-green-100" },
        { text: "East Gate", color: "bg-red-100" },
        { text: "Metro", color: "bg-yellow-100" },
      ],
    },
    {
      id: "S3",
      label: "West Gate",
      status: "ACTIVE",
      color: "bg-white",
      badges: [
        { text: "Main Gate", color: "bg-yellow-100" },
        { text: "East Gate", color: "bg-yellow-100" },
        { text: "Metro", color: "bg-yellow-100" },
      ],
    },
    {
      id: "S4",
      label: "Head Office",
      status: "VIP Duty",
      color: "bg-white",
      badges: [
        { text: "Main Gate", color: "bg-blue-100" },
        { text: "VIP Location", color: "bg-blue-100" },
      ],
    },
  ];

  const list = routes || example;

  return (
    <div className="space-y-4 mt-5 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="">
        <div className="font-semibold">Active Routes</div>
        <p className="text-xs text-gray-500">View routes complete details</p>
      </div>

      {list.map((r, i) => (
        <div key={r.id} className={`rounded-lg p-4 ${r.color} border border-gray-100`}> 
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="font-semibold">{r.label}</div>
              <div className="text-xs text-gray-500">{r.status}</div>
            </div>
            <div className="text-xs text-gray-400">Assigned: Amir (D1)</div>
          </div>

          <div className="mt-4 flex items-center gap-4 overflow-x-auto">
            {r.badges.map((b, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`px-4 py-2 rounded-full ${b.color} text-sm font-medium`}>{b.text}</div>
                {idx !== r.badges.length - 1 && <div className="w-8 h-[2px] bg-gray-200 rounded-full" />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
