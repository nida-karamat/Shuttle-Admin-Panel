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
    <div className="w-full lg:w-96 bg-white border-l border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={driver.avatar || "/Shuttle/S1.png"}
            alt={driver.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{driver.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[driver.status]}`}>
                {driver.status}
              </span>
              <span className="text-xs text-gray-500">Driver ID: {driver.id}</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Dropdowns */}
      {/* <div className="flex-shrink-0 px-6 py-4 border-b border-gray-100 flex gap-2">
        <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
          <option>Assigned Shuttle</option>
        </select>
        <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
          <option>Assigned Route</option>
        </select>
        <select className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white">
          <option>Shift</option>
        </select>
      </div> */}

      <div className="flex-1  p-6 space-y-4">
        {/* Driver Summary */}
        <section>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Driver Summary</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-900">{driver.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{driver.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">License Type</p>
                <p className="text-sm font-medium text-gray-900">{driver.license}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Bus className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Assigned Shuttle</p>
                <p className="text-sm font-medium text-gray-900">
                  {driver.shuttle !== "-" ? `${driver.shuttle} (${driver.route})` : "Not Assigned"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Shift</p>
                <p className="text-sm font-medium text-gray-900">{driver.shift}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Activity */}
        <section>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Live Activity</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Current Action</p>
                <p className="text-sm font-medium text-gray-900">{driver.currentAction || "Driving — On Route"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Event</p>
                <p className="text-sm font-medium text-gray-900">{driver.lastEvent || "Started route 15 mins ago"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Next Break</p>
                <p className="text-sm font-medium text-gray-900">{driver.nextBreak || "11:30 AM"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Updated</p>
                <p className="text-sm font-medium text-gray-900">{driver.last}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Summary */}
        <section>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Performance Summary</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">On-time Rate</p>
                <p className="text-sm font-medium text-gray-900">{driver.onTimeRate || "98%"} </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Trips This Week</p>
                <p className="text-sm font-medium text-gray-900">{driver.tripsThisWeek || "24"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Safety Score</p>
                <p className="text-sm font-medium text-gray-900">{driver.safetyScore || "95"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="flex-shrink-0 space-y-2 pt-3 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            Send Message
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            <Bus className="w-4 h-4" />
            Assign Shuttle
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            <BarChart3 className="w-4 h-4" />
            View Driver Analytics
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
            Suspend Access
          </button>
        </section>
      </div>
    </div>
  );
}

