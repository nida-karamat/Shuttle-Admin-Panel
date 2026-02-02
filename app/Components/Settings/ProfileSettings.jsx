"use client";

import Image from "next/image";
import { ThemeColors } from "@/app/theme/color.js";
import {Upload, Trash2,Lock,Save  } from "lucide-react";
export default function ProfileSettings() {
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
        <p className="text-xs font-semibold text-gray-800">Profile Photo</p>

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
            <button
              className="px-5 py-1 rounded-xl  text-white text-xs font-medium hover:bg-emerald-800 flex items-center gap-2"
              style={{ backgroundColor: ThemeColors.button.default }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  ThemeColors.button.hover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  ThemeColors.button.default)
              }
            >
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
          JPG,PNG or GIF Max size 2MB. Recommended 400x400px.
        </p>
      </div>

      {/* Personal information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">
          Personal Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField label="First Name" placeholder="Ayesha" />
          <TextField label="Last Name" placeholder="Rahman" />
          <TextField
            label="Email Address"
            placeholder="ayesha.rahman@shuttleops.com"
          />
          <TextField label="Phone Number" placeholder="+966 50 123 4567" />
          <TextField label="Role" placeholder="Fleet Manager" />
          <TextField label="Department" placeholder="Operations" />
          <TextField label="Location" placeholder="Riyadh, Saudi Arabia" />
          <TextField label="Timezone" placeholder="GMT+3" />
        </div>
      </div>

      {/* Password & security */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-700">
            Password &amp; Security
          </p>
          <p className="text-[11px] text-gray-500">
            Last changed: December 15, 2024
          </p>
        </div>
        <button
          className=" px-5 py-2 rounded-xl  text-white font-medium hover:bg-emerald-800 flex items-center gap-2"
          style={{ backgroundColor: ThemeColors.button.default }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ThemeColors.button.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ThemeColors.button.default)
          }
        >
          <Lock className="w-4 h-4" />
          Change Password
        </button>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between text-xs mt-2">
        <button className=" text-red-500 hover:underline">
          Cancel Changes
        </button>
        <button
          className="px-5 py-3 rounded-xl  text-white font-medium hover:bg-emerald-800 flex items-center gap-2"
          style={{ backgroundColor: ThemeColors.button.default }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ThemeColors.button.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ThemeColors.button.default)
          }
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </section>
  );
}

function TextField({ label, placeholder }) {
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


