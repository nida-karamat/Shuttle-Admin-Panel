import React from "react";

export default function OperationalTimeline({ items = null }) {
  const example = [
    {
      time: "11:10",
      title: "S2 Breakdown Reported",
      subtitle: "Emergency detected • Priority: High",
      status: "RESOLVED",
      color: "bg-green-50 text-green-600",
    },
    {
      time: "10:47",
      title: "Route R6 Assigned to D4",
      subtitle: "Route assignment confirmed",
      status: "INFO",
      color: "bg-blue-50 text-blue-600",
    },
    {
      time: "10:45",
      title: "Lunch Deferred (D1)",
      subtitle: "Schedule adjustment logged",
      status: "WARNING",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      time: "10:43",
      title: "Emergency Mode Activated",
      subtitle: "Response team notified · Priority: High",
      status: "EMERGENCY",
      color: "bg-red-50 text-red-600",
    },
    {
      time: "10:42",
      title: "D3 Breakdown Reported",
      subtitle: "Response team notified · Priority: High",
      status: "EMERGENCY",
      color: "bg-red-50 text-red-600",
    },
    {
      time: "10:38",
      title: "Normal Operations",
      subtitle: "All systems normal",
      status: "RESOLVED",
      color: "bg-green-50 text-green-600",
    },
    {
      time: "10:35",
      title: "Route R5 Completed",
      subtitle: "Route assignment confirmed",
      status: "INFO",
      color: "bg-blue-50 text-blue-600",
    },
    {
      time: "10:30",
      title: "D2 Break Started (Lunch)",
      subtitle: "Schedule adjustment logged",
      status: "WARNING",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  const list = items || example;

  return (
    <div className="space-y-6 mt-5 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="">
        <div className="font-semibold">Operational Timeline</div>
        <p className="text-xs text-gray-500">
          Live activity log • Last 8 events
        </p>
      </div>
      {list.map((it, idx) => (
        <div key={idx} className="flex items-start gap-6">
          <div className="w-16 text-right text-xs text-gray-500">{it.time}</div>

          <div className="flex-1 relative">
            <div className="absolute left-0 top-2 w-0.5 h-full bg-gray-200" />
            <div className="ml-6 bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{it.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {it.subtitle}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-md text-xs ${it.color}`}>
                  {it.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
