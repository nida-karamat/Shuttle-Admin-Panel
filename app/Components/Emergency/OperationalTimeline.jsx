import React from "react";
import { CheckCircle, AlertTriangle, Info, Clock } from "lucide-react";

export default function OperationalTimeline({ items = null }) {
  const example = [
    {
      time: "10:10",
      title: "Lunch Resumed",
      subtitle: "All systems normal",
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
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      time: "10:43",
      title: "Emergency Mode Activated",
      subtitle: "Response team notified • Priority: High",
      status: "EMERGENCY",
      color: "bg-red-50 text-red-600",
    },
    {
      time: "10:42",
      title: "D3 Breakdown Reported",
      subtitle: "Response team notified • Priority: High",
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
      subtitle: "Route Assignment confirmed",
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

  const getStatusClasses = (colorStr) => {
    const classes = (colorStr || "").split(" ");
    return {
      bg: classes.find((c) => c.startsWith("bg-")) || "",
      text: classes.find((c) => c.startsWith("text-")) || "",
    };
  };

  const getIcon = (status) => {
    switch ((status || "").toUpperCase()) {
      case "EMERGENCY":
        return AlertTriangle;
      case "RESOLVED":
        return CheckCircle;
      case "INFO":
        return Info;
      case "WARNING":
        return Clock;
      default:
        return Info;
    }
  };

  return (
    <div className="space-y-6 mt-5 bg-white p-4 rounded-lg shadow-sm max-w-full overflow-x-hidden">
      {/* Header */}
      <div>
        <div className="font-semibold text-sm sm:text-base md:text-lg">
          Operational Timeline
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          Live activity log • Last {list.length} events
        </p>
      </div>

      {/* Timeline Items */}
      {list.map((it, idx) => {
        const { bg, text } = getStatusClasses(it.color);
        const Icon = getIcon(it.status);
        const isLast = idx === list.length - 1;

        return (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
          >
            {/* Time */}
            <div className="w-full sm:w-16 text-right text-xs sm:text-xs md:text-sm text-gray-500 shrink-0">
              {it.time}
            </div>

            {/* Event + Icon */}
            <div className="flex-1 relative">
              <div className="absolute left-0 top-0 bottom-0 flex items-start">
                <div className="w-8 relative flex items-start justify-center">
                  {/* Icon Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${bg} z-10 mt-2`}
                  >
                    <Icon className={`${text} w-4 h-4 sm:w-5 sm:h-5`} />
                  </div>

                  {/* Vertical Line */}
                  {!isLast && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 h-full" />
                  )}
                </div>
              </div>

              {/* Event Card */}
              <div className="ml-0 sm:ml-12 mt-2 sm:mt-0 bg-white rounded-lg p-3 sm:p-4 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      {it.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      {it.subtitle}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-md text-xs sm:text-sm mt-1 sm:mt-0 ${it.color}`}
                  >
                    {it.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
