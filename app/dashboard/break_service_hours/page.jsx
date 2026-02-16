"use client";

import React, { useState } from "react";
import { FaPlus, FaChevronRight } from "react-icons/fa";
import AddNewRule from "../../Components/break/AddNewRule";
import { User,Heart,Calendar,Coffee } from "lucide-react";

const stats = [
  {
    title: "Active Drivers Today",
    value: 4,
    icon: <User className="w-5 h-5 text-[#003B3B]" />,
    bgIcon: "bg-[#003B3B]/10",
  },
  {
    title: "Break Rules Enabled",
    value: 3,
    icon: <Coffee  className="w-5 h-5 text-[#F97316]" />,
    bgIcon: "bg-[#F97316]/10",
  },
  {
    title: "Drivers on Sick Leave",
    value: 1,
    icon: <Heart className="w-5 h-5 text-[#3B82F6]" />,
    bgIcon: "bg-[#3B82F6]/10",
  },
  {
    title: "Upcoming Holidays",
    value: 0,
    icon: <Calendar className="w-5 h-5 text-[#EF4444]" />,
    bgIcon: "bg-[#EF4444]/10",
  },
];

const holidayRules = [
  {
    title: "National Day",
    date: "Sep 23, 2024",
    tags: ["Recurring"],
  },
  {
    title: "Bank Holiday",
    date: "Apr 1, 2024",
    tags: ["Recurring"],
  },
  {
    title: "Eid 1 - Day 1",
    date: "Apr 5, 2024",
    tags: ["Day 1", "Recurring"],
  },
  {
    title: "Eid 1 - Day 2",
    date: "Apr 6, 2024",
    tags: ["Day 2", "Recurring"],
  },
  {
    title: "Eid 1 - Day 3",
    date: "Apr 7, 2024",
    tags: ["Day 3", "Recurring"],
  },
  {
    title: "Eid 1 - Day 4",
    date: "Apr 8, 2024",
    tags: ["Day 4", "Recurring"],
  },
];

export default function DriverSettingsPage() {
  // break = left card, holiday = middle card, absence = right card
  const [activeCard, setActiveCard] = useState("break");
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [ruleType, setRuleType] = useState("break");

  const openRuleModal = (type) => {
    setRuleType(type);
    setShowRuleModal(true);
  };

  const closeRuleModal = () => {
    setShowRuleModal(false);
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#003B3B]">
        Break & Server Hours Configuration
      </h2>

      {/* ===== TOP STATS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 sm:p-5 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Icon box */}
              <div className={`p-2 sm:p-3 rounded-xl ${item.bgIcon}`}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-lg sm:text-2xl font-semibold">
                  {item.value}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MAIN GRID ===== */}
      {/* lg:grid-cols-4 so that one card can take 2 columns and the other 2 stay narrow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* ================= LEFT: BREAK RULES ================= */}
        <div
          className={`bg-white rounded-xl shadow-sm p-4 sm:p-5 transition-all duration-300 ${
            activeCard === "break"
              ? "md:col-span-2 lg:col-span-2"
              : "md:col-span-1 lg:col-span-1"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-sm">Break Rules</h3>
              <p className="text-xs text-gray-500">Configure break durations</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Arrow to expand this card */}
              <button
                onMouseEnter={() => setActiveCard("break")}
                className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs transition-colors ${
                  activeCard === "break"
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "text-gray-500 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <FaChevronRight size={10} />
              </button>

              {/* Plus icon to open modal for Break */}
              <button
                onClick={() => openRuleModal("break")}
                className="w-7 h-7 rounded-full bg-emerald-900 text-white flex items-center justify-center"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Break items */}
          <div className="space-y-3">
            {[
              {
                title: "Prayer Break",
                desc: "10min • After 60min",
                dot: "bg-yellow-400",
              },
              {
                title: "Lunch Break",
                desc: "45min",
                dot: "bg-orange-500",
              },
              {
                title: "Fatigue Break",
                desc: "15min • After 60min",
                dot: "bg-red-500",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${b.dot}`} />
                  <div>
                    <p className="text-sm font-medium">{b.title}</p>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                </div>

                {activeCard === "break" && (
                  <div className="flex items-center gap-3">
                    <Toggle />
                    <EditIcon />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Weekend */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-600 mb-3">
              Weekend Configuration
            </h4>

            {[
              { day: "Friday Weekend", desc: "Full day off" },
              { day: "Saturday Weekend", desc: "Full day off" },
            ].map((w, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-3 mb-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-sm font-medium">{w.day}</p>
                    <p className="text-xs text-gray-500">{w.desc}</p>
                  </div>
                </div>
                {activeCard === "break" && (
                  <div className="flex items-center gap-3">
                    <Toggle />
                    <EditIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= MIDDLE: HOLIDAYS ================= */}
        <div
          className={`bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ${
            activeCard === "holiday" ? "lg:col-span-2" : "lg:col-span-1"
          }`}
        >
          {/* HEADER + ARROW + PLUS */}
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="font-semibold text-sm">Holiday Rules</h3>
              <p className="text-xs text-gray-500">Configure holidays</p>
            </div>

            <div className="flex items-center gap-2">
              {/* Arrow to expand this card */}
              <button
                onMouseEnter={() => setActiveCard("holiday")}
                className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs transition-colors ${
                  activeCard === "holiday"
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "text-gray-500 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <FaChevronRight size={10} />
              </button>

              {/* Plus icon to open modal for Holiday */}
              <button
                onClick={() => openRuleModal("holiday")}
                className="w-7 h-7 rounded-full bg-emerald-900 text-white flex items-center justify-center"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Body – same structure, only tags on right */}

          <div className="space-y-2">
            {holidayRules.map((h, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-3"
              >
                <div>
                  <p className="text-sm font-medium inline">{h.title}</p>
                  <p className="text-xs text-gray-500">{h.date}</p>
                </div>

                {/* Right side: tags inline with rule, no toggle/edit in any state */}
                <div className="flex gap-2 flex-wrap">
                  {h.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-0.5 rounded-full text-xs ml-auto ${
                        t.includes("Day")
                          ? "bg-red-100 text-red-600"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: ABSENCE ================= */}
        <div
          className={`bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ${
            activeCard === "absence" ? "lg:col-span-2" : "lg:col-span-1"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="font-semibold text-sm mb-1">
                Absence Configuration
              </h3>
              <p className="text-xs text-gray-500">
                Sick leave & late arrivals
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Arrow to expand this card */}
              <button
                onMouseEnter={() => setActiveCard("absence")}
                className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs transition-colors ${
                  activeCard === "absence"
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "text-gray-500 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <FaChevronRight size={10} />
              </button>

              {/* Plus icon to open modal for Absence */}
              <button
                onClick={() => openRuleModal("absence")}
                className="w-7 h-7 rounded-full bg-emerald-900 text-white flex items-center justify-center"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          <div className="space-y-3 mt-2 lg:mt-0">
            <AbsenceItem
              title="Late Arrival"
              desc="10min"
              color="bg-yellow-400"
            />
            <AbsenceItem
              title="Sick Leave (Half Day)"
              desc="50% Absence"
              color="bg-orange-500"
            />
            <AbsenceItem
              title="Sick Leave (Full Day)"
              desc="Full Day"
              color="bg-red-500"
            />
            <AbsenceItem
              title="Sick Leave (Multiple Days)"
              desc="2-5 Days"
              color="bg-red-600"
            />
          </div>
        </div>
      </div>

      {/* ===== ADD RULE MODAL ===== */}
      {showRuleModal && (
        <AddNewRule ruleType={ruleType} onClose={closeRuleModal} />
      )}
    </div>
  );
}

/* ===== Small Components ===== */

function Toggle() {
  return (
    <div className="w-9 h-5 bg-emerald-900 rounded-full relative cursor-pointer">
      <span className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
    </div>
  );
}

function EditIcon() {
  return (
    <div className="w-7 h-7 rounded-full border flex items-center justify-center text-gray-500 text-xs">
      ✎
    </div>
  );
}

function AbsenceItem({ title, desc, color }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-3">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
