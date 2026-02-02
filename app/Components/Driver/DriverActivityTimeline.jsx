"use client";

export default function DriverActivityTimeline({ driver }) {
  if (!driver) return null;

  // Timeline data - representing 6 AM to 12 PM (midnight) = 18 hours
  const timelineSegments = driver.timeline || [
    { type: "work", start: 6, duration: 190, label: "190 min" },
    { type: "lunch", start: 9.17, duration: 30, label: "Lunch Break" },
    { type: "work", start: 9.67, duration: 180, label: "180 min" },
    { type: "prayer", start: 12.67, duration: 15, label: "Prayer Break" },
    { type: "work", start: 12.92, duration: 130, label: "130 min" },
    { type: "fatigue", start: 15.08, duration: 20, label: "Fatigue Break" },
    { type: "work", start: 15.42, duration: 90, label: "90 min" },
    { type: "waiting", start: 16.92, duration: 60, label: "Waiting" },
    { type: "work", start: 17.92, duration: 150, label: "150 min" },
  ];

  const colors = {
    work: "bg-green-500",
    lunch: "bg-orange-500",
    prayer: "bg-yellow-500",
    fatigue: "bg-red-500",
    emergency: "bg-red-700",
    waiting: "bg-gray-400",
    "off-duty": "bg-gray-600",
  };

  const legend = [
    { type: "work", label: "Work", color: "bg-green-500" },
    { type: "lunch", label: "Lunch Break", color: "bg-orange-500" },
    { type: "prayer", label: "Prayer Break", color: "bg-yellow-500" },
    { type: "fatigue", label: "Fatigue Break", color: "bg-red-500" },
    { type: "emergency", label: "Emergency", color: "bg-red-700" },
    { type: "waiting", label: "Waiting/Off-duty", color: "bg-gray-400" },
  ];

  // Calculate positions (6 AM = 0%, 12 PM = 100%)
  const totalHours = 18; // 6 AM to 12 PM
  const getPosition = (hour) => ((hour - 6) / totalHours) * 100;
  const getWidth = (duration) => (duration / 60 / totalHours) * 100;

  // Current time position (example: 2:30 PM = 14.5)
  const currentHour = new Date().getHours() + new Date().getMinutes() / 60;
  const currentPosition = getPosition(currentHour);

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-900 mb-3">Driver Activity Timeline</h4>
      
      {/* Timeline Bar */}
      <div className="relative h-14 bg-gray-100 rounded-lg mb-3 overflow-hidden">
        {/* Time markers */}
        <div className="absolute inset-0 flex justify-between items-center px-2 text-xs text-gray-500">
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>12 AM</span>
        </div>

        {/* Timeline segments */}
        {timelineSegments.map((segment, idx) => {
          const left = getPosition(segment.start);
          const width = getWidth(segment.duration);
          return (
            <div
              key={idx}
              className={`absolute h-full ${colors[segment.type] || "bg-gray-400"} rounded`}
              style={{
                left: `${left}%`,
                width: `${width}%`,
              }}
              title={segment.label}
            />
          );
        })}

        {/* Current time indicator */}
        {currentPosition >= 0 && currentPosition <= 100 && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gray-900 z-10"
            style={{ left: `${currentPosition}%` }}
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-900 whitespace-nowrap">
              Now
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs">
        {legend.map((item) => (
          <div key={item.type} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${item.color}`} />
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Date */}
      <div className="mt-3 text-right text-xs text-gray-500">
        {new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

