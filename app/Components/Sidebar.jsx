"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard,Map,Bus, Route,MapPin,Clock,Users,TriangleAlert,ChartColumn ,Settings,MessageCircleQuestionMark, MapPin as MapPinIcon } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
  { name: "Live Map", icon: Map, link: "/dashboard/live_map" },
  { name: "Shuttles", icon: Bus, link: "/dashboard/Shuttles" },
  { name: "Drivers", icon: Users, link: "/dashboard/Drivers" },
  { name: "Routes", icon: Route, link: "/dashboard/Routes" },
  { name: "Locations", icon: MapPin, link: "/dashboard/locations" },
  {
    name: "Break & Service Hours",
    icon: Clock,
    link: "/dashboard/break_service_hours",
  },
  { name: "Emergencies", icon: TriangleAlert, link: "/dashboard/Emergencies" },
  {
    name: "Analytics & Insights",
    icon: ChartColumn,
    link: "/dashboard/analytics_insights",
    softHighlight: true,
  },
  { name: "Settings", icon: Settings, link: "/dashboard/Settings" },
  // {
  //   name: "Help & Support",
  //   icon: MessageCircleQuestionMark,
  //   link: "/dashboard/help_support",
  // },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white h-screen fixed p-3 sm:p-4 border-r border-gray-100 hidden md:flex md:flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 mt-3 mb-4">
        <div className="flex items-center justify-center bg-linear-to-b from-[#003B3B] to-[#1BA9A5] rounded-lg sm:rounded-xl p-1.5 sm:p-2">
          <Bus className="text-white" size={16} />
        </div>
        <span className="text-gray-900 font-semibold text-xs sm:text-sm md:text-lg font-Arial line-clamp-1">
          ShuttleOps Admin
        </span>
      </div>

      {/* Menu Items + Live Fleet card - Scrollable area */}
      <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
        <ul className="space-y-1 mt-3 sm:mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
            const isActive = pathname === item.link;
            const isSoft = item.softHighlight && !isActive;

            let baseClasses =
              "flex items-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-2xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap";

            if (isActive) {
              baseClasses += " bg-[#127E88] text-white shadow-sm";
            } else if (isSoft) {
              baseClasses += " bg-gray-100 text-gray-900";
            } else {
              baseClasses += " text-gray-700 hover:bg-gray-50";
            }

          return (
            <li key={item.link}>
                <Link href={item.link} className={baseClasses}>
                  {Icon && (
                  <Icon
                    className={`mr-2 sm:mr-3 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 ${
                        isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  )}
                <span className="truncate">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

        {/* Live Fleet Monitoring Card - scrolls with menu */}
        <div className="mt-6 sm:mt-8 mb-2">
        <div className="bg-linear-to-br from-emerald-600 to-emerald-700 rounded-lg sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg">
          <div className="flex items-start gap-2 sm:gap-3 mb-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1 truncate">
                  Live Fleet Monitoring
                </h3>
                <p className="text-[10px] sm:text-xs text-white/90 line-clamp-2">
                  Track all shuttles in real-time
                </p>
            </div>
          </div>
          <button className="w-full bg-white text-emerald-700 text-[10px] sm:text-xs font-semibold py-1.5 sm:py-2 px-4 rounded-lg hover:bg-white/90 transition-colors">
            View Map
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
