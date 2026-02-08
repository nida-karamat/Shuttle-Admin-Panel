"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapPin, TrashIcon } from "lucide-react";

// Dynamically import map components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { 
    ssr: false, 
    loading: () => <div className="h-96 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500">Loading map...</div> 
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function StopManagement({ route }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run leaflet-related setup on the client
    setMounted(true);
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        try {
          const iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png";
          const iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png";
          const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

          // some builds may not have Icon.Default prototype - guard
          if (L && L.Icon && L.Icon.Default) {
            try {
              // Prevent errors when overriding in some environments
              // eslint-disable-next-line no-undef
              delete L.Icon.Default.prototype._getIconUrl;
            } catch (e) {
              // ignore
            }
            L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });
          }
        } catch (e) {
          // ignore leaflet setup errors on server/build
        }
      });
    }
  }, []);

  if (!route) return null;

  // Default coordinates for demo
  const defaultCenter = [24.7136, 46.6753]; // Riyadh, Saudi Arabia

  // Use route.stops from Routes/page.jsx, add "Add Stop" at the end
  const stopsList = [...(route.stops || []), "Add Stop"];

  // Generate mock stop coordinates (use stopsList from route.stops)
  const stops = stopsList.map((stop, index) => ({
    name: stop,
    lat: defaultCenter[0] + (Math.random() * 0.1 - 0.05),
    lng: defaultCenter[1] + (Math.random() * 0.1 - 0.05),
    order: index + 1,
  }));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Stops List */}
        <div className="md:col-span-1">
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {stops.map((stop, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition"
              >
                {/* Leading circle/icon variations */}
                {stop.name === "Add Stop" ? (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f6170] text-white flex items-center justify-center text-sm font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </div>
                ) : idx === 0 ? (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
                    <MapPin className="w-4 h-4" />
                  </div>
                ) : idx === 3 ? (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-semibold">
                    <MapPin className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#127E88] text-white flex items-center justify-center text-sm font-semibold">
                    {stop.order}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {stop.name}
                  </p>
                  {stop.name !== "Add Stop" && (
                    <p className="text-xs text-gray-500">
                      {stop.lat.toFixed(4)}, {stop.lng.toFixed(4)}
                    </p>
                  )}
                </div>

                {/* Delete button hidden for Add Stop */}
                {stop.name !== "Add Stop" && (
                  <button
                    aria-label={`Delete stop ${stop.name}`}
                    className="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-full"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-[#127E88] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#0f6170] transition">
            + Add Stop
          </button>
        </div>

        {/* Right: Map */}
        <div className="md:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 h-96 w-full">
            {mounted ? (
              <MapContainer
                center={defaultCenter}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%", zIndex: 10 }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {stops.map((stop, idx) => (
                  <Marker key={idx} position={[stop.lat, stop.lng]}>
                    <Popup>
                      <div className="text-sm">
                        <p className="font-semibold">{stop.name}</p>
                        <p className="text-xs text-gray-600">
                          Stop #{stop.order}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-500">
                Loading map...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
