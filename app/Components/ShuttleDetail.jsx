"use client";

import { X, MapPin, Clock, Eye, Send, Navigation } from 'lucide-react';

export default function ShuttleDetail({ shuttle, onClose }) {
  if (!shuttle) return null;

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 sticky top-0 max-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold">{shuttle.name}</h2>
          <p className="text-sm text-gray-500">Route: {shuttle.route}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
      </div>

      {/* Shuttle Image Placeholder */}
      <div className="w-full h-32 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
        <div className="text-white text-4xl font-bold">{shuttle.name.split(' ')[1]}</div>
      </div>

      {/* Passenger Count */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xs text-gray-500">Passengers</p>
          <p className="text-xl font-bold text-emerald-600 mt-1">{shuttle.passengers}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xs text-gray-500">Time</p>
          <p className="text-sm font-bold text-gray-700 mt-1">{shuttle.updated}</p>
        </div>
      </div>

      {/* Stop Information */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <MapPin size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-500">Current Stop</p>
            <p className="font-medium text-gray-800">{shuttle.currentStop}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Navigation size={18} className="text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-500">Next Stop</p>
            <p className="font-medium text-gray-800">{shuttle.nextStop}</p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div>
        <p className="text-xs text-gray-500 mb-2">Status</p>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          shuttle.status === 'Emergency' ? 'bg-red-100 text-red-600' :
          shuttle.status === 'On-Route' ? 'bg-emerald-100 text-emerald-600' :
          shuttle.status === 'Waiting' ? 'bg-gray-100 text-gray-600' :
          shuttle.status === 'Idle' ? 'bg-yellow-100 text-yellow-700' :
          'bg-orange-100 text-orange-600'
        }`}>
          {shuttle.status}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-emerald-900 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-950">
          <Eye size={16} /> View Shuttle Details
        </button>
        <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-100">
          <Send size={16} /> Send Broadcast Message
        </button>
        <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
          <Navigation size={16} /> Open Route View
        </button>
      </div>
    </div>
  );
}
