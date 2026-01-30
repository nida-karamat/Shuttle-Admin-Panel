"use client";

import React from "react";

export default function SystemPreferencesSettings() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">
          System Preferences
        </h1>
        <p className="text-xs text-gray-500">
          Customize your system language, format, and display preferences.
        </p>
      </header>

      {/* Regional settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">
          Regional Settings
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Language" placeholder="English (US)" />
          <Field label="Currency" placeholder="SAR" />
          <Field label="Date Format" placeholder="DD/MM/YYYY" />
          <Field label="Time Format" placeholder="24-hour" />
          <Field label="Distance Unit" placeholder="Kilometers" />
        </div>
      </div>

      {/* Display preferences */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">
          Display Preferences
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-xs font-medium max-w-md">
          <ThemeButton label="Light" active />
          <ThemeButton label="Dark" />
          <ThemeButton label="Auto" />
        </div>
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
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </label>
  );
}

function ThemeButton({ label, active = false }) {
  return (
    <button
      className={`flex-1 rounded-full border px-4 py-1.5 text-center transition-colors ${
        active
          ? "bg-emerald-900 border-emerald-900 text-white"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
