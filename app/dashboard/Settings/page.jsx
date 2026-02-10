"use client";

import React, { useState } from "react";
import ProfileSettings from "../../Components/Settings/ProfileSettings";
import CompanySettings from "../../Components/Settings/CompanySettings";
import NotificationsSettings from "../../Components/Settings/NotificationsSettings";
import SecurityPrivacySettings from "../../Components/Settings/SecurityPrivacySettings";
import SystemPreferencesSettings from "../../Components/Settings/SystemPreferencesSettings";
import AccessControlSettings from "../../Components/Settings/AccessControlSettings";
import DataPrivacySettings from "../../Components/Settings/DataPrivacySettings";
import AdvancedSettings from "../../Components/Settings/AdvancedSettings";
import { ChevronRight } from "lucide-react";

const TABS = [
  { id: "settings", label: "Profile Settings" },
  { id: "company", label: "Company Settings" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "Security & Privacy" },
  { id: "system", label: "System Preferences" },
  { id: "access", label: "Access Control" },
  { id: "data", label: "Data & Privacy" },
  { id: "advanced", label: "Advanced" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("settings");

  const renderContent = () => {
    switch (activeTab) {
      case "company":
        return <CompanySettings />;
      case "notifications":
        return <NotificationsSettings />;
      case "security":
        return <SecurityPrivacySettings />;
      case "system":
        return <SystemPreferencesSettings />;
      case "access":
        return <AccessControlSettings />;
      case "data":
        return <DataPrivacySettings />;
      case "advanced":
        return <AdvancedSettings />;
      case "settings":
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="">
      <h1 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3 px-4 sm:px-6">Settings</h1>
    <div className="min-h-screen flex mt-4 sm:mt-5">
     
      {/* Left sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white/30 py-4 sm:py-6 px-3 sm:px-4 space-y-4 mr-6 sm:mr-10 rounded-lg border border-gray-200">
       
        <nav className="flex-1 space-y-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-[#003B3B] text-white"
                    : "text-gray-700 hover:text-black hover:bg-gray-200"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <ChevronRight className="w-4 h-4 text-white" />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </main>
    </div>
    </div>
  );
}