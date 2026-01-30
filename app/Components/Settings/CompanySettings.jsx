"use client";

import Image from "next/image";
import {Upload, Trash2,Lock,Save} from "lucide-react";
export default function CompanySettings() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">
          Profile Settings
        </h1>
        <p className="text-xs text-gray-500">
          Update your personal information and profile preferences.
        </p>
      </header>

      {/* Company logo */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-800">Company Logo</p>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/shuttle/S1.png"
              alt="Company logo"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2">
          <button className="px-5 py-1 rounded-xl bg-[#003B3B] text-white text-xs font-medium hover:bg-emerald-800 flex items-center gap-2">
  <Upload className="w-4 h-4" />
  Upload New
</button>

<button className="px-4 py-4 rounded-xl text-xs font-medium border border-gray-300 hover:bg-emerald-800 flex items-center gap-2">
         <Trash2 className="w-4 h-4" />
          Remove
         </button>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 ml-18">
          PNG or SVG. Max size 2MB. Recommended 512x512px.
        </p>
      </div>

      {/* Company information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">
          Company Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FullRowField
            label="Company Name"
            placeholder="ShuttleOps Transportation Co."
          />
          <Field label="Industry" placeholder="Transportation" />
          <Field label="Company Size" placeholder="250–500" />
          <FullRowField
            label="Street Address"
            placeholder="King Fahd Road, Al Olaya"
          />
          <Field label="City" placeholder="Riyadh" />
          <Field label="Postal Code" placeholder="12214" />
          <Field label="Country" placeholder="Saudi Arabia" />
          <Field label="Phone Number" placeholder="+966 11 234 5678" />
          <FullRowField
            label="Website"
            placeholder="www.shuttleops.sa"
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between text-xs mt-2">
        <button className=" text-red-500 hover:underline">
          Cancel Changes
        </button>
        <button className="px-5 py-3 rounded-xl bg-[#003B3B] text-white font-medium hover:bg-emerald-800 flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </section>
  );
}

function Field({ label, placeholder }) {
  return (
    <label className="text-xs text-gray-600 space-y-1 block">
      <span>{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </label>
  );
}

// For inputs that span both columns
function FullRowField(props) {
  return (
    <div className="md:col-span-2">
      <Field {...props} />
    </div>
  );
}


