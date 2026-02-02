"use client";

import React from "react";

export default function InviteMemberModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl">
        {/* Header */}
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-900">
            Invite Team Member
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form
          className="p-5 space-y-4 text-xs"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Full Name" placeholder="Enter full name" />
            <Field label="Email Address" placeholder="member@shuttleops.com" />
            <Field label="Phone Number" placeholder="+966 50 123 4567" />
            <Field label="Department" placeholder="Operations" />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700">
              Role &amp; Access Level
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Admin", "Manager", "Operator", "Viewer"].map((r, idx) => (
                <RoleOption key={r} label={r} active={idx === 0} />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700">
              Invitation Email
            </p>
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-[11px] text-emerald-800">
              An invitation email will be sent to the member with login
              credentials and access instructions.
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-2">
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
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <label className="block space-y-1">
      <span className="text-[11px] text-gray-600">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </label>
  );
}

function RoleOption({ label, active }) {
  return (
    <button
      type="button"
      className={`flex items-center justify-between rounded-xl border px-3 py-2 text-[11px] ${
        active
          ? "border-emerald-500 bg-emerald-50 text-emerald-900"
          : "border-gray-200 bg-gray-50 text-gray-700"
      }`}
    >
      <span>{label}</span>
      <span
        className={`w-3 h-3 rounded-full border flex items-center justify-center ${
          active ? "border-emerald-500" : "border-gray-300"
        }`}
      >
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        )}
      </span>
    </button>
  );
}






