"use client";

import React, { useState } from "react";
import { Check, Key, Copy, Trash2, Shield } from "lucide-react";
export default function SecurityPrivacySettings() {
  return (
    <section className="space-y-6 -mt-10">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">
          Security &amp; Privacy
        </h1>
        <p className="text-xs text-gray-500">
          Manage authentication, access control, and security settings.
        </p>
      </header>

      {/* 2FA */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="bg-emerald-100 p-2 rounded-xl items-center">
            <Shield className="w-5 h-5 text-[#10B981]  mt-1" />
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold text-gray-800">
              Two-Factor Authentication (2FA)
            </p>

            <p className="text-[11px] text-gray-500">
              Add an extra layer of security to your account.
            </p>

            <span className="inline-flex items-center px-3 py-2 rounded-2xl border border-emerald-200 bg-emerald-50 text-[#10B981] text-md font-semibold gap-1 mt-1">
              <Check className="w-4 h-4" /> ENABLED
            </span>
          </div>
        </div>

        <button className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 -mt-12">
          Configure
        </button>
      </div>

      {/* Active sessions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-800">
          Session Management
        </p>
        <div className="space-y-3">
          <Field label="Session Timeout (minutes)" placeholder="30" />

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700">
              Active Sessions
            </p>
            <SessionRow
              label="Current Session"
              detail="Chrome on Windows · Riyadh, SA · 156.54.xx.xx"
              status="ACTIVE NOW"
              dot="bg-green-400"
            />
            <SessionRow
              label="Mobile App"
              detail="iPhone 14 Pro · 2 hours ago"
              status="ACTIVE"
              dot="bg-gray-400"
            />
          </div>
        </div>
      </div>

      {/* API keys */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-800">API Keys</p>
          <button className="px-4 py-2 rounded-lg bg-[#003B3B] text-white text-xs font-medium hover:bg-emerald-800">
            + Create Key
          </button>
        </div>
        <ApiKeyRow
          label="Production API Key"
          value="sk_live_xxxxxxxxx3xK9"
          description="Created 2025-01-15 • Last used 2 hours ago"
        />
        <ApiKeyRow
          label="Development API Key"
          value="sk_test_xxxxxxxxx7Pl2"
          description="Created 2024-12-10 • Last used 1 day ago"
        />
      </div>

      {/* Advanced Security */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-800">Advanced Security</p>
        <AdvancedRow
          label="IP Whitelist"
          description="Only allow access from specific IP addresses"
        />
        <AdvancedRow
          label="Audit Logs"
          description="Track all security-related activities"
          initialEnabled={true}
        />
      </div>
    </section>
  );
}

function Field({ label, placeholder }) {
  return (
    <label className="block text-xs text-gray-600 space-y-1">
      <span>{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mt-2"
      />
    </label>
  );
}

function SessionRow({ label, detail, status, dot }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-start gap-2">
        <span className={`w-2 h-2 rounded-full mt-3 ${dot}`}></span>

        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-gray-800">{label}</p>
          <p className="text-[11px] text-gray-500">{detail}</p>
        </div>
      </div>

      <span className="text-[11px] font-semibold text-emerald-600">
        {status}
      </span>
    </div>
  );
}


function ApiKeyRow({ label,value,description }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Key className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-gray-800">{label}</p>
        
          <div className="flex items-center gap-2">
            <p className="text-[11px] text-gray-500">{value}</p>
            <button className="text-[#1BA9A5] hover:text-gray-600">
              <Copy className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
          ACTIVE
        </span>

        <button className="text-red-400 hover:text-red-600">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function AdvancedRow({ label, description, initialEnabled = false }) {
  const [enabled, setEnabled] = useState(initialEnabled);
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-center gap-3">
        {/* <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <Shield className="w-4 h-4 text-gray-500" />
        </div> */}
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-gray-800">{label}</p>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setEnabled((v) => !v)}
        className={`w-9 h-5 rounded-full flex items-center px-0.5 ${
          enabled ? "bg-emerald-500 justify-end" : "bg-gray-200 justify-start"
        }`}
      >
        <span className="w-4 h-4 rounded-full bg-white shadow" />
      </button>
    </div>
  );
}