"use client";

export default function ShuttleActivityTimeline({ shuttle }) {
  if (!shuttle) return null;

  // Timeline data - representing 6 AM to 12 PM (midnight) = 18 hours
  const timelineSegments = shuttle.timeline || [
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

  // Calculate positions (6 AM = 0%, 12 AM = 100%)
  const totalHours = 18; // 6 AM to 12 AM (midnight)
  const getPosition = (hour) => ((hour - 6) / totalHours) * 100;
  const getWidth = (duration) => (duration / 60 / totalHours) * 100;

  // Generate hourly time markers
  const timeMarkers = [];
  for (let i = 0; i <= totalHours; i += 2) {
    const hour = 6 + i;
    const displayHour = hour > 12 ? hour - 12 : hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    timeMarkers.push({
      position: (i / totalHours) * 100,
      label: `${displayHour} ${ampm}`,
    });
  }

  // Current time position
  const currentHour = new Date().getHours() + new Date().getMinutes() / 60;
  const currentPosition = getPosition(currentHour);

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 mx-2 sm:mx-0">
      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
        Shuttle Activity Timeline
      </h4>

      {/* Timeline Bar */}
      <div className="relative mb-3 sm:mb-4 overflow-x-auto pb-2">
        {/* Time Markers */}
        <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2 px-0.5 sm:px-1 min-w-full">
          {timeMarkers.map((marker, idx) => (
            <span key={idx} className="font-medium whitespace-nowrap text-[9px] sm:text-xs">
              {marker.label}
            </span>
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="relative h-10 sm:h-12 bg-gray-100 rounded-full overflow-hidden min-w-full">
          {/* Timeline segments: flat blocks that touch each other; container provides rounded ends */}
          {timelineSegments.map((segment, idx) => {
            const left = getPosition(segment.start);
            const width = getWidth(segment.duration);
            return (
              <div
                key={idx}
                className={`${colors[segment.type] || "bg-gray-400"} absolute top-0 h-full text-white text-xs font-semibold overflow-hidden z-10`}
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                }}
                title={segment.label}
              >
                <div className="h-full flex items-center justify-center px-2">
                  <span className="truncate">{segment.label}</span>
                </div>
              </div>
            );
          })}

          {/* Current time indicator: circular marker with 'Now' label */}
          {currentPosition >= 0 && currentPosition <= 100 && (
            <div style={{ left: `${currentPosition}%` }} className="absolute top-0 transform -translate-x-1/2 z-30 flex items-center h-full">
              <div className="flex flex-col items-center mt-1">
                <div className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded-md mb-1 font-semibold">Now</div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border-2 border-white" />
              </div>
            </div>
          )}
        </div>
      </div>
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
