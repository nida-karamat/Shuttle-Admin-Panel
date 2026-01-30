"use client";

import React, { useState } from "react";
import { Download, FileText, Cloud, Shield, Trash2 } from "lucide-react";

export default function DataPrivacySettings() {
  const [automaticBackups, setAutomaticBackups] = useState(true);
  const [analyticsTracking, setAnalyticsTracking] = useState(true);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">Data &amp; Privacy</h1>
        <p className="text-xs text-gray-500">
          Export, backup, and manage your data.
        </p>
      </header>

      {/* Data export */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">Data Export</p>
        <SimpleRow
          icon={Download}
          iconBg="bg-emerald-50 text-emerald-600"
          label="Export All Data"
          description="Download all your data in JSON format"
        />
        <SimpleRow
          icon={FileText}
          iconBg="bg-blue-50 text-blue-600"
          label="Request Data Report"
          description="Generate a comprehensive data report"
        />
      </div>

      {/* Automatic backups */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">Automatic Backups</p>
        <div className="rounded-xl bg-blue-50 px-4 py-3 flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-blue-900">
              Daily automated backups enabled
            </p>
            <p className="text-[11px] text-blue-900/70">
              Your data is automatically backed up every 24 hours and retained for 30 days.
            </p>
          </div>
          <Toggle enabled={automaticBackups} onToggle={() => setAutomaticBackups(!automaticBackups)} />
        </div>
      </div>

      {/* Privacy settings & danger zone */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">Privacy Settings</p>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">
                Analytics &amp; Tracking
              </p>
              <p className="text-[11px] text-gray-500">
                Help us improve by sharing usage data.
              </p>
            </div>
          </div>
          <Toggle enabled={analyticsTracking} onToggle={() => setAnalyticsTracking(!analyticsTracking)} />
        </div>

        <div className="mt-4 space-y-3 rounded-2xl bg-red-50 px-4 py-3">
          <p className="text-xs font-semibold text-red-700">Danger Zone</p>
          <button className="w-full flex items-center justify-between text-xs text-red-700 hover:underline">
            <span>Delete Account</span>
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SimpleRow({ icon: Icon, iconBg, label, description }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-gray-800">{label}</p>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
      </div>
      <button className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50">
        Download
      </button>
    </div>
  );
}

function Toggle({ enabled = true, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-9 h-5 rounded-full transition-colors flex items-center ${
        enabled ? "bg-emerald-500 justify-end" : "bg-gray-300 justify-start"
      } px-0.5`}
    >
      <span className="w-4 h-4 rounded-full bg-white shadow transition-transform" />
    </button>
  );
}



