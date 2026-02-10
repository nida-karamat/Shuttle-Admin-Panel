export const ThemeColors = {
  button: {
    default: "#003B3B",
    hover: "#065f46",
  },


};

export const TabsColors = {
  primary: "#003B3B",
  primaryHover: "#005555",

  text: {
    white: "#FFFFFF",
    gray: "#4B5563", // gray-600
  },

  border: {
    primary: "#003B3B",
    default: "#E5E7EB", // gray-200
  },

  background: {
    white: "#FFFFFF",
    grayHover: "#F9FAFB", // gray-50
  },
};

// TAB STYLES - Change these to update all tabs across dashboard
export const TabStyles = {
  // Style 1: Solid Background Tabs (Shuttles, Drivers, Routes pages)
  solidButton: {
    active: {
      bg: "bg-[#003B3B]",
      text: "text-white",
      border: "border-[#003B3B]",
    },
    inactive: {
      bg: "bg-white",
      text: "text-gray-600",
      border: "border-gray-200",
      hover: "hover:bg-gray-50",
    },
  },

  // Style 2: Text-only Tabs with Bottom Border (Analytics page)
  underlineButton: {
    active: {
      text: "text-emerald-900",
      borderColor: "bg-emerald-500",
    },
    inactive: {
      text: "text-gray-500",
      hoverText: "hover:text-emerald-900",
    },
  },

  // Style 3: Sidebar Tabs (Settings page)
  sidebarButton: {
    active: {
      bg: "bg-[#003B3B]",
      text: "text-white",
    },
    inactive: {
      text: "text-gray-700",
      hover: "hover:text-black hover:bg-gray-200",
    },
  },
};