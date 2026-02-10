"use client";

import Image from "next/image";
import { X, Phone, Mail, CreditCard, Bus, Clock, Zap, Calendar, RefreshCw, Target, MapPin, Shield, MessageCircle, UserPlus, BarChart3 } from "lucide-react";

export default function DriverDetails({ driver, onClose }) {
  if (!driver) return null;

  const statusStyles = {
    "On-Duty": "bg-teal-50 text-teal-600",
    "Off-Duty": "bg-gray-100 text-gray-500",
    "On-Break": "bg-yellow-50 text-yellow-600",
    Unassigned: "bg-gray-100 text-gray-400",
    "Needs Attention": "bg-red-50 text-red-600",
  };

  return (
    <div className="w-full lg:w-96 bg-white border-l border-gray-200 h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0 bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Image
            src={driver.avatar || "/Shuttle/S1.png"}
            alt={driver.name}
            width={40}
            height={40}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900 truncate">{driver.name}</h3>
            <div className="flex items-center gap-1 mt-0.5 flex-wrap">
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${statusStyles[driver.status]}`}>
                {driver.status}
              </span>
              <span className="text-[10px] text-gray-500 truncate">ID: {driver.id}</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
        >
          <X className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {/* Driver Summary */}
        <section>
          <h4 className="text-[10px] font-semibold text-gray-600 mb-2 uppercase">Driver Summary</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Phone</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Email</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">License Type</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.license}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-teal-50 rounded-lg">
              <Bus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Assigned Shuttle</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">
                  {driver.shuttle !== "-" ? driver.shuttle : "Not Assigned"}
                </p>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Shift</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900">{driver.shift}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Activity */}
        <section>
          <h4 className="text-[10px] font-semibold text-gray-600 mb-2 uppercase">Live Activity</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Current Action</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.currentAction || "Driving"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Last Event</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.lastEvent || "Route started"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Next Break</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.nextBreak || "11:30 AM"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Last Updated</p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-900 truncate">{driver.last}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Summary */}
        <section>
          <h4 className="text-[10px] font-semibold text-gray-600 mb-2 uppercase">Performance Summary</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="flex items-center gap-2 p-2 bg-teal-50 rounded-lg">
              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">On-time</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900">{driver.onTimeRate || "98%"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Rating</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900">{driver.rating || "4.8"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg col-span-2 sm:col-span-1">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500">Incidents</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900">{driver.incidents || "2"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="shrink-0 space-y-2 pt-2 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors text-xs font-medium">
            <MessageCircle className="w-4 h-4" />
            Send Message
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium">
            <Bus className="w-4 h-4" />
            Assign Shuttle
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium">
            <BarChart3 className="w-4 h-4" />
            View Analytics
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-xs font-medium">
            Suspend Access
          </button>
        </section>
      </div>
    </div>
  );
}

