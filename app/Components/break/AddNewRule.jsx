"use client";

import React, { useState } from "react";
import { FaCoffee, FaCalendarAlt, FaHeart } from "react-icons/fa";

export default function AddNewRule({ ruleType, onClose }) {
  const [selectedType, setSelectedType] = useState(ruleType);

  const types = [
    {
      id: "break",
      label: "Break Rule",
      icon: <FaCoffee />,
    },
    {
      id: "holiday",
      label: "Holiday",
      icon: <FaCalendarAlt />,
    },
    {
      id: "absence",
      label: "Absence Rule",
      icon: <FaHeart />,
    },
  ];

  const primaryLabel =
    selectedType === "break"
      ? "Add Break Rule"
      : selectedType === "holiday"
      ? "Add Holiday Rule"
      : "Add Absence Rule";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl relative max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Header bar */}
        <div className="bg-emerald-900 text-white rounded-t-2xl px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Add New Rule</h3>
            <p className="text-xs text-emerald-100">
              Create a new configuration for your fleet management
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-emerald-800 flex items-center justify-center text-sm"
          >
            ✕
          </button>
        </div>

        <form
          className="p-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          {/* Rule type tabs */}
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-3">
              Select Rule Type
            </p>
            <div className="grid grid-cols-3 gap-3">
              {types.map((t) => {
                const active = selectedType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedType(t.id)}
                    className={`rounded-xl border px-4 py-3 flex flex-col items-start gap-2 transition-all ${
                      active
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-lg mb-1 ${
                        active
                          ? "bg-emerald-500 text-white"
                          : "bg-white text-gray-500"
                      }`}
                    >
                      {t.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rule name */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Rule Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Tea Break"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Duration + Trigger After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Duration (minutes) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 15"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Trigger After (minutes) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 120"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Timeline color */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Timeline Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                defaultValue="#12B88B"
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <input
                type="color"
                defaultValue="#12B88B"
                className="w-11 h-11 rounded-lg border border-gray-200 cursor-pointer"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows={2}
              placeholder="Briefly describe this rule and its purpose…"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Notes */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Notes / Additional information (optional)
            </label>
            <textarea
              rows={2}
              placeholder="Add any additional notes, instructions, or special considerations…"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-[11px] text-gray-400">
              Fields marked with <span className="text-red-500">*</span> are
              required
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-emerald-900 text-white text-xs font-medium hover:bg-emerald-800"
              >
                {primaryLabel}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


