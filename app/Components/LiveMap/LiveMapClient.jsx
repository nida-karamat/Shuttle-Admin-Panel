// "use client"

// import { useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { X, MapPin, Eye, Send, Navigation } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// // Custom marker icons for different statuses
// const createMarkerIcon = (status) => {
//   let color = '#FFA500'; // default orange
  
//   if (status === 'Emergency') color = '#EF4444';
//   else if (status === 'On-Route') color = '#059669';
//   else if (status === 'Waiting') color = '#000000';
//   else if (status === 'Idle') color = '#FCD34D';
//   else if (status === 'Near Full') color = '#F97316';
//   else if (status === 'Full') color = '#6366F1';

//   return L.divIcon({
//     html: `
//       <div style="
//         background-color: ${color};
//         color: white;
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-weight: bold;
//         font-size: 12px;
//         border: 3px solid white;
//         box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//       ">
//         ${status.charAt(0)}
//       </div>
//     `,
//     className: 'custom-marker',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//     popupAnchor: [0, -40]
//   });
// };

// // Sample shuttle data
// const SHUTTLES_DATA = [
//   { id: 1, name: 'Shuttle 01', lat: 25.2048, lng: 55.2708, status: 'On-Route', passengers: '12/18', route: 'Campus Loop', currentStop: 'Metro Station', nextStop: 'Head Office 2', updated: '3 mins ago' },
//   { id: 2, name: 'Shuttle 02', lat: 25.2062, lng: 55.2719, status: 'Waiting', passengers: '03/18', route: 'Main Loop', currentStop: 'Campus Gate', nextStop: 'Building A', updated: '2 mins ago' },
//   { id: 3, name: 'Shuttle 03', lat: 25.2075, lng: 55.2695, status: 'Emergency', passengers: '12/18', route: 'Emergency Route', currentStop: 'Hospital', nextStop: 'Medical Center', updated: '1 min ago' },
//   { id: 4, name: 'Shuttle 04', lat: 25.2090, lng: 55.2725, status: 'Idle', passengers: '01/18', route: 'Terminal Route', currentStop: 'Main Terminal', nextStop: 'West Gate', updated: '5 mins ago' },
//   { id: 5, name: 'Shuttle 05', lat: 25.2030, lng: 55.2680, status: 'Near Full', passengers: '02/18', route: 'Parking Route', currentStop: 'Parking Lot', nextStop: 'Central Hub', updated: '4 mins ago' },
//   { id: 6, name: 'Shuttle 06', lat: 25.2050, lng: 55.2740, status: 'On-Route', passengers: '15/18', route: 'City Center', currentStop: 'Metro Station', nextStop: 'Head Office 2', updated: '3 mins ago' },
// ];

// const STATUS_FILTERS = ['All', 'On-Route', 'Waiting', 'Idle', 'Near Full', 'Full', 'Emergency', 'Unassigned'];

// export default function LiveMapClient() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [mapKey, setMapKey] = useState(0);
//   const [selectedShuttleId, setSelectedShuttleId] = useState(null);

//   const filteredShuttles = activeFilter === 'All' 
//     ? SHUTTLES_DATA 
//     : SHUTTLES_DATA.filter(shuttle => shuttle.status === activeFilter);

//   const selectedShuttle = SHUTTLES_DATA.find(s => s.id === selectedShuttleId);

//   // Force map re-render when filter changes
//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//     setMapKey(prev => prev + 1);
//   };

//   return (
//     <div className="flex gap-4 w-full">
//       {/* Main Map Section */}
//       <div className={`space-y-4 transition-all duration-300 ${selectedShuttleId ? 'flex-[0.65]' : 'flex-1'}`}>
//       <div className="flex gap-4 items-center justify-between p-4 ">
//         {/* Filter Tabs */}
//         <div className="flex gap-2 items-center justify-start overflow-x-auto">
//           {STATUS_FILTERS.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => handleFilterClick(filter)}
//               className={`px-3 py-2 rounded-lg font-medium text-xs md:text-sm transition ${
//                 activeFilter === filter
//                   ? 'bg-emerald-900 text-white'
//                   : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-600'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Dropdowns on the right */}
//         {/* <div className="flex gap-3">
//           <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
//             <option>All Drivers</option>
//           </select>
//           <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
//             <option>All Shuttles</option>
//           </select>
//           <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
//             <option>All Routes</option>
//           </select>
//         </div> */}
//       </div>

//       {/* Map Container */}
//       <div className="bg-white rounded-xl shadow-sm overflow-hidden relative z-0 cursor-pointer" onClick={() => setSelectedShuttleId(null)}>
//         <div style={{ height: '500px', width: '100%' }}>
//           <MapContainer
//             key={mapKey}
//             center={[25.206, 55.271]}
//             zoom={16}
//             style={{ height: '100%', width: '100%' }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; OpenStreetMap contributors'
//             />
            
//             {filteredShuttles.map((shuttle) => (
//               <Marker
//                 key={shuttle.id}
//                 position={[shuttle.lat, shuttle.lng]}
//                 icon={createMarkerIcon(shuttle.status)}
//                 eventHandlers={{
//                   click: () => setSelectedShuttleId(shuttle.id)
//                 }}
//               >
//                 <Popup>
//                   <div className="text-sm">
//                     <p className="font-bold">{shuttle.name}</p>
//                     <p>Status: {shuttle.status}</p>
//                     <p>Passengers: {shuttle.passengers}</p>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>

//       {/* Legend */}
//       <div>
      
//         <div className="flex flex-wrap gap-12 items-start justify-center ">
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">01</div>
//             <span className="text-sm font-medium">Emergency</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">01</div>
//             <span className="text-sm font-medium">On-Route</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">01</div>
//             <span className="text-sm font-medium">Waiting</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-gray-800 font-bold text-lg">01</div>
//             <span className="text-sm font-medium">Idle</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">02</div>
//             <span className="text-sm font-medium">Near Full</span>
//           </div>
//         </div>
//       </div>
//       </div>

//       {/* Detail Panel */}
//       {selectedShuttle && (
//         <div className="flex-[0.32] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6  max-h-screen overflow-y-auto mt-20">
//           {/* Header */}
//           <div className="flex items-start justify-between gap-3">
//             <div className="flex-1">
//               <h2 className="text-lg font-bold">{selectedShuttle.name}</h2>
//               <p className="text-sm text-gray-500">Route: {selectedShuttle.route}</p>
//             </div>
//             <div className="w-20 h204 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
//               <img
//                 src="/bus2.png"
//                 alt={selectedShuttle.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* <div className="flex-1">
//               <h2 className="text-lg font-bold">{selectedShuttle.name}</h2>
//               <p className="text-sm text-gray-500">Route: {selectedShuttle.route}</p>
//             </div> */}
//             < button onClick={() => setSelectedShuttleId(null)}
//               className="text-gray-400 hover:text-gray-600 flex-shrink-0"
//             >
//               <X size={24} />
//             </button>
//           </div>
            

//           {/* Passenger Count */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-xs text-gray-500">Passengers</p>
//               <p className="text-xl font-bold text-emerald-600 mt-1">{selectedShuttle.passengers}</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-xs text-gray-500">Time</p>
//               <p className="text-sm font-bold text-gray-700 mt-1">{selectedShuttle.updated}</p>
//             </div>
//           </div>

//           {/* Stop Information */}
//           <div className="space-y-3">
//             <div className="flex gap-3">
//               <MapPin size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="text-xs text-gray-500">Current Stop</p>
//                 <p className="font-medium text-gray-800">{selectedShuttle.currentStop}</p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <Navigation size={18} className="text-blue-600 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="text-xs text-gray-500">Next Stop</p>
//                 <p className="font-medium text-gray-800">{selectedShuttle.nextStop}</p>
//               </div>
//             </div>
//           </div>

//           {/* Status */}
//           <div>
//             <p className="text-xs text-gray-500 mb-2">Status</p>
//             <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//               selectedShuttle.status === 'Emergency' ? 'bg-red-100 text-red-600' :
//               selectedShuttle.status === 'On-Route' ? 'bg-emerald-100 text-emerald-600' :
//               selectedShuttle.status === 'Waiting' ? 'bg-gray-100 text-gray-600' :
//               selectedShuttle.status === 'Idle' ? 'bg-yellow-100 text-yellow-700' :
//               'bg-orange-100 text-orange-600'
//             }`}>
//               {selectedShuttle.status}
//             </span>
//           </div>

//           {/* Action Buttons */}
//           <div className="space-y-2">
//             <button className="w-full bg-emerald-900 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-950">
//               <Eye size={16} /> View Shuttle Details
//             </button>
//             <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-100">
//               <Send size={16} /> Send Broadcast Message
//             </button>
//             <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
//               <Navigation size={16} /> Open Route View
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client"

import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Eye, Send, Navigation } from 'lucide-react';
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });


// Custom marker icons for different statuses
const createMarkerIcon = (status) => {
  let color = '#FFA500'; // default orange
  
  if (status === 'Emergency') color = '#EF4444';
  else if (status === 'On-Route') color = '#059669';
  else if (status === 'Waiting') color = '#000000';
  else if (status === 'Idle') color = '#FCD34D';
  else if (status === 'Near Full') color = '#F97316';
  else if (status === 'Full') color = '#6366F1';

  return L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 12px;
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      ">
        ${status.charAt(0)}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

// Sample shuttle data
const SHUTTLES_DATA = [
  { id: 1, name: 'Shuttle 01', lat: 25.2048, lng: 55.2708, status: 'On-Route', passengers: '12/18', route: 'Campus Loop', currentStop: 'Metro Station', nextStop: 'Head Office 2', updated: '3 mins ago' },
  { id: 2, name: 'Shuttle 02', lat: 25.2062, lng: 55.2719, status: 'Waiting', passengers: '03/18', route: 'Main Loop', currentStop: 'Campus Gate', nextStop: 'Building A', updated: '2 mins ago' },
  { id: 3, name: 'Shuttle 03', lat: 25.2075, lng: 55.2695, status: 'Emergency', passengers: '12/18', route: 'Emergency Route', currentStop: 'Hospital', nextStop: 'Medical Center', updated: '1 min ago' },
  { id: 4, name: 'Shuttle 04', lat: 25.2090, lng: 55.2725, status: 'Idle', passengers: '01/18', route: 'Terminal Route', currentStop: 'Main Terminal', nextStop: 'West Gate', updated: '5 mins ago' },
  { id: 5, name: 'Shuttle 05', lat: 25.2030, lng: 55.2680, status: 'Near Full', passengers: '02/18', route: 'Parking Route', currentStop: 'Parking Lot', nextStop: 'Central Hub', updated: '4 mins ago' },
  { id: 6, name: 'Shuttle 06', lat: 25.2050, lng: 55.2740, status: 'On-Route', passengers: '15/18', route: 'City Center', currentStop: 'Metro Station', nextStop: 'Head Office 2', updated: '3 mins ago' },
];

const STATUS_FILTERS = ['All', 'On-Route', 'Waiting', 'Idle', 'Near Full', 'Full', 'Emergency', 'Unassigned'];

export default function LiveMapPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mapKey, setMapKey] = useState(0);
  const [selectedShuttleId, setSelectedShuttleId] = useState(null);

  const filteredShuttles = activeFilter === 'All' 
    ? SHUTTLES_DATA 
    : SHUTTLES_DATA.filter(shuttle => shuttle.status === activeFilter);

  const selectedShuttle = SHUTTLES_DATA.find(s => s.id === selectedShuttleId);

  // Force map re-render when filter changes
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setMapKey(prev => prev + 1);
  };

  return (
    <div className="flex gap-4 w-full">
      {/* Main Map Section */}
      <div className={`space-y-4 transition-all duration-300 ${selectedShuttleId ? 'flex-[0.65]' : 'flex-1'}`}>
      <div className="flex flex-wrap gap-4 items-center justify-between  p-4">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto">
          {STATUS_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-3 py-2 rounded-lg font-medium text-xs md:text-sm transition ${
                activeFilter === filter
                  ? 'bg-emerald-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dropdowns on the right */}
        {/* <div className="flex gap-3">
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
            <option>All Drivers</option>
          </select>
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
            <option>All Shuttles</option>
          </select>
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
            <option>All Routes</option>
          </select>
        </div> */}
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden relative z-0 cursor-pointer" onClick={() => setSelectedShuttleId(null)}>
        <div style={{ height: '500px', width: '100%' }}>
          <MapContainer
            key={mapKey}
            center={[25.206, 55.271]}
            zoom={16}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            
            {filteredShuttles.map((shuttle) => (
              <Marker
                key={shuttle.id}
                position={[shuttle.lat, shuttle.lng]}
                icon={createMarkerIcon(shuttle.status)}
                eventHandlers={{
                  click: () => setSelectedShuttleId(shuttle.id)
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <p className="font-bold">{shuttle.name}</p>
                    <p>Status: {shuttle.status}</p>
                    <p>Passengers: {shuttle.passengers}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Legend */}
      <div>
      
        <div className="flex flex-wrap gap-12 items-start justify-center ">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">01</div>
            <span className="text-sm font-medium">Emergency</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">01</div>
            <span className="text-sm font-medium">On-Route</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">01</div>
            <span className="text-sm font-medium">Waiting</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-gray-800 font-bold text-lg">01</div>
            <span className="text-sm font-medium">Idle</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">02</div>
            <span className="text-sm font-medium">Near Full</span>
          </div>
        </div>
      </div>
      </div>

      {/* Detail Panel */}
      {selectedShuttle && (
        <div className="flex-[0.32] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 mt-20 min-h-[500px] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-lg font-bold">{selectedShuttle.name}</h2>
              <p className="text-sm text-gray-500">Route: {selectedShuttle.route}</p>
            </div>
            <div className="w-20 h204 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src="/bus2.png"
                alt={selectedShuttle.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="flex-1">
              <h2 className="text-lg font-bold">{selectedShuttle.name}</h2>
              <p className="text-sm text-gray-500">Route: {selectedShuttle.route}</p>
            </div> */}
            < button onClick={() => setSelectedShuttleId(null)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>
            

          {/* Passenger Count */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-500">Passengers</p>
              <p className="text-xl font-bold text-emerald-600 mt-1">{selectedShuttle.passengers}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-500">Time</p>
              <p className="text-sm font-bold text-gray-700 mt-1">{selectedShuttle.updated}</p>
            </div>
          </div>

          {/* Stop Information */}
          <div className="space-y-3 ">
            <div className="flex gap-3">
              <MapPin size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Current Stop</p>
                <p className="font-medium text-gray-800">{selectedShuttle.currentStop}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Navigation size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Next Stop</p>
                <p className="font-medium text-gray-800">{selectedShuttle.nextStop}</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Status</p>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              selectedShuttle.status === 'Emergency' ? 'bg-red-100 text-red-600' :
              selectedShuttle.status === 'On-Route' ? 'bg-emerald-100 text-emerald-600' :
              selectedShuttle.status === 'Waiting' ? 'bg-gray-100 text-gray-600' :
              selectedShuttle.status === 'Idle' ? 'bg-yellow-100 text-yellow-700' :
              'bg-orange-100 text-orange-600'
            }`}>
              {selectedShuttle.status}
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
      )}
    </div>
  );
}


