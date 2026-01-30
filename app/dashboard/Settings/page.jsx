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
    <div>
      <h1 className="text-2xl font-semibold  mt-10 ">Settings</h1>
    <div className="min-h-screen flex bg-[#F5F7F9] mt-5">
     
      {/* Left sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white/30  py-6 px-4 space-y-4">
       
        <nav className="flex-1 space-y-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:text-white hover:bg-gray-900"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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