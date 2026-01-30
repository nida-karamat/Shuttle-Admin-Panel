"use client";

import React, { useState } from "react";
import Image from "next/image";

import InviteMemberModal from "./InviteMemberModal";

export default function AccessControlSettings() {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">Access Control</h1>
        <p className="text-xs text-gray-500">
          Manage team members, roles, and permissions.
        </p>
      </header>

      {/* Team members */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-700">
            Team Members (4)
          </p>
          <button
            className="px-3 py-1.5 rounded-full bg-emerald-900 text-white text-xs font-medium hover:bg-emerald-800"
            onClick={() => setShowInvite(true)}
          >
            + Invite Member
          </button>
        </div>

        <div className="space-y-2">
          {[
            {
              name: "Ayesha Rahman",
              email: "ayesha@shuttleops.com",
              role: "Admin",
              status: "ACTIVE",
              lastActive: "Last active: 2 min ago",
              avatar: "/shuttle/S1.png",
            },
            {
              name: "Mohammed Ali",
              email: "mohammed@shuttleops.com",
              role: "Manager",
              status: "ACTIVE",
              lastActive: "Last active: 1 hour ago",
              avatar: "/shuttle/S2.png",
            },
            {
              name: "Sara Ahmed",
              email: "sara@shuttleops.com",
              role: "Operator",
              status: "ACTIVE",
              lastActive: "Last active: 3 hours ago",
              avatar: "/shuttle/S3.png",
            },
            {
              name: "Ahmed Hassan",
              email: "ahmed@shuttleops.com",
              role: "Viewer",
              status: "INACTIVE",
              lastActive: "Last active: 2 days ago",
              avatar: "/shuttle/S4.png",
            },
          ].map((m) => (
            <MemberRow key={m.email} {...m} />
          ))}
        </div>
      </div>

      {/* Roles / permissions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">
          Roles &amp; Permissions
        </p>
        <div className="space-y-2">
          {[
            { label: "Admin", desc: "Full system access and control" },
            { label: "Manager", desc: "Manage operators and teams" },
            { label: "Operator", desc: "View and manage shuttles" },
            { label: "Viewer", desc: "Read-only access" },
          ].map((r) => (
            <RoleRow key={r.label} {...r} />
          ))}
        </div>
      </div>

      {showInvite && <InviteMemberModal onClose={() => setShowInvite(false)} />}
    </section>
  );
}

function MemberRow({ name, email, role, status, lastActive, avatar }) {
  const active = status === "ACTIVE";
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">{name}</p>
          <p className="text-[11px] text-gray-500">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-xs font-semibold text-gray-800">{role}</p>
          <p className="text-[11px] text-gray-500">{lastActive}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
            active
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function RoleRow({ label, desc }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div>
        <p className="text-xs font-semibold text-gray-800">{label}</p>
        <p className="text-[11px] text-gray-500">{desc}</p>
      </div>
      <span className="text-[11px] text-gray-500">1 member</span>
    </div>
  );
}


