"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Bell } from "lucide-react";

const CHANNELS = [
  {
    label: "Email Notifications",
    description: "Receive updates via email",
    icon: Mail,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
    enabled: true,
  },
  {
    label: "SMS Notifications",
    description: "Receive updates via text message",
    icon: MessageSquare,
    bg: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-500",
    enabled: false,
  },
  {
    label: "Push Notifications",
    description: "Receive browser notifications",
    icon: Bell,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-600",
    enabled: true,
  },
];

const ALERT_TYPES = [
  { label: "Emergency Alerts", description: "Critical shuttle breakdowns and emergencies" },
  { label: "Route Updates", description: "Changes to routes and schedules" },
  { label: "Driver Alerts", description: "Driver check-ins and status changes" },
  { label: "Maintenance Reminders", description: "Scheduled maintenance and service alerts" },
  { label: "Daily Reports", description: "End-of-day operational summaries" },
  { label: "Weekly Digest", description: "Weekly performance and analytics summary" },
  { label: "System Updates", description: "Platform updates and new features" },
];

export default function NotificationsSettings() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">
          Notification Preferences
        </h1>
        <p className="text-xs text-gray-500">
          Configure how and when you receive notifications.
        </p>
      </header>

      {/* Notification channels */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">
          Notification Channels
        </p>

        <div className="space-y-2">
          {CHANNELS.map((ch) => (
            <ChannelRow key={ch.label} {...ch} />
          ))}
        </div>
      </div>

      {/* Alert types */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">Alert Types</p>
        <div className="space-y-2">
  {ALERT_TYPES.map((alert) => (
    <AlertRow key={alert.label} label={alert.label} description={alert.description} />
  ))}
</div>

      </div>
    </section>
  );
}

function Toggle({ initialEnabled = true }) {
  const [enabled, setEnabled] = useState(initialEnabled);

  return (
    <button
      type="button"
      onClick={() => setEnabled((prev) => !prev)}
      className={`w-9 h-5 rounded-full flex items-center px-0.5 ${
        enabled ? "bg-emerald-500 justify-end" : "bg-gray-200 justify-start"
      }`}
    >
      <span className="w-4 h-4 rounded-full bg-white shadow" />
    </button>
  );
}

function ChannelRow({ label, description, icon: Icon, bg, iconBg, enabled }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${bg}`}>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-gray-800">{label}</p>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
      </div>
      <Toggle initialEnabled={enabled} />
    </div>
  );
}

function AlertRow({ label, description }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="space-y-0.5">
        <p className="text-xs font-semibold text-gray-800">{label}</p>
        <p className="text-[11px] text-gray-500">{description}</p>
      </div>
      <Toggle initialEnabled />
    </div>
  );
}


