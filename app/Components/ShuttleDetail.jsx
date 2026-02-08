"use client";

import Image from "next/image";
import { Dot } from "lucide-react";

export default function ShuttleDetail({ shuttle, onClose }) {
	if (!shuttle) return null;

	const statusPill = () => {
		if (shuttle.status === "Emergency")
			return "bg-red-100 text-red-600";
		if (shuttle.status === "Onroute" || shuttle.status === "On-Route")
			return "bg-teal-100 text-teal-700";
		if (shuttle.status === "Waiting")
			return "bg-yellow-100 text-yellow-700";
		if (shuttle.status === "Idle" || shuttle.status === "Offline")
			return "bg-gray-100 text-gray-700";
		return "bg-orange-100 text-orange-700";
	};

	return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-semibold">
              Shuttle Number
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              {shuttle.coordinates || shuttle.id}
            </h2>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-20 h204 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src="/bus2.png"
                alt="Shuttle Image"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-gray-400">Occupancy</p>
            <p className="text-lg font-bold text-gray-900">
              {shuttle.occupancy}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-gray-400">ETA</p>
            <p className="text-lg font-bold ">
              {shuttle.occupancyPercent}%
            </p>
          </div>
        </div>

        <div className="space-y-3 border-t border-gray-200 pt-4">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <span className="text-sm text-teal-600">●</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Current Stop</p>
              <p className="text-sm font-semibold text-gray-900">
                {shuttle.currentStop}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm text-blue-600">📍</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Next Stop</p>
              <p className="text-sm font-semibold text-gray-900">
                {shuttle.nextStop}
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-xs text-gray-500">
            <span>🕐</span>
            <p>{shuttle.updatedTime}</p>
          </div>
        </div>

        <div className="space-y-3 border-t border-gray-200 pt-4">
          <button className="w-full bg-teal-700 text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-800">
            ⓘ View Shuttle Details
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
            📊 View Shuttle Analytics
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
            💬 Send Broadcast Message
          </button>
        </div>
      </div>
    </div>
  );
}

