"use client";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import {
  Bus,
  MapPin,
  Users,
  TrendingUp,
} from "lucide-react";
export default function Login() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SECTION - WHITE */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-12 lg:px-16 -mt-50">
        {/* Logo */}
        <div className="flex items-center gap-2 mt-20">
          <div className="bg-linear-to-b from-[#003B3B] to-[#1BA9A5] rounded-xl p-4">
            <Bus className="text-white" size={24} />
          </div>
          <span className="text-gray-800 font-semibold font-Arial text-2xl">
            ShuttleOps Admin
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#127E88] mb-2 mt-10 font-century">
          Hello, Welcome Back!
        </h1>
        <p className="mb-8 font-century text-gray-500">
          Please enter your details to continue
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          {/* Email Field */}
          <div className="mb-6">
            <label className="text-sm font-medium text-[#003B3B] block mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-200 rounded-4xl px-4 py-3 bg-gray-50">
              <MdOutlineEmail className="text-gray-400 mr-3" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="text-sm font-medium text-[#003B3B] block mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-200 rounded-4xl px-4 py-3 bg-gray-50">
              <MdOutlineLock className="text-gray-400 mr-3" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                required
              />
              <AiOutlineEye
                className="text-gray-400 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#158581] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-[#127E88] hover:bg-teal-700 text-white font-semibold py-3 rounded-full transition"
          >
            Log in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By logging in, you agree to our{" "}
          <a href="#" className="text-[#158581] hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>

      {/* RIGHT SECTION - TEAL GRADIENT */}
      <div className="hidden md:flex md:w-1/2 bg-linear-to-b from-[#111C20] to-[#73BACE] flex-col justify-between p-12 text-white">
        {/* Content */}
        <div>
          <h2 className="text-5xl font-semibold leading-tight mb-4">
            Fleet
            <br />
            Management.
            <br />
            Simplified.
          </h2>
          <p className="text-white text-lg mb-12 font-century">
            Monitor, reponse, and optimize — all in one place.
          </p>

          {/* bus image */}
          <img src="/bus.png" alt="bus" />
          {/* Bus Illustration (Placeholder) */}
          <div className="mb-12 flex justify-center">
            <div className="text-6xl opacity-30"></div>
          </div>
          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-3">
            {/* Item 1 */}
            <div className="bg-white/50 rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Bus className="text-teal-600" size={18} />
              </span>
              <span className="text-[#00413F] text-sm whitespace-nowrap">
                Real-time Fleet Tracking
              </span>
            </div>

            {/* Item 2 */}
            <div className="bg-white/50 rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <MapPin className="text-teal-600" size={18} />
              </span>
              <span className="text-[#00413F] text-sm whitespace-nowrap">
                Route Optimization
              </span>
            </div>

            {/* Item 3 */}
            <div className="bg-white/50 rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Users className="text-teal-600" size={18} />
              </span>
              <span className="text-[#00413F] text-sm whitespace-nowrap">
                Employee Management
              </span>
            </div>

            {/* Item 4 */}
            <div className="bg-white/50 rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <TrendingUp className="text-teal-600" size={18} />
              </span>
              <span className="text-[#00413F] text-sm whitespace-nowrap">
                Analytics & Insights
              </span>
            </div>
          </div>
          {/* Stats Section */}
          <div className="bg-white/45 backdrop-blur rounded-2xl px-10 py-5 mt-15  left-1/2 -translate-x-1/2 bottom-8 w-[80vw] max-w-5xl ml-10 ">
            <div className="flex items-center justify-center gap-25">
              <div className="text-center">
                <p className="text-3xl font-semibold text-black">500+</p>
                <p className="text-black text-sm">Active Vehicles</p>
              </div>

              <div className="h-10 w-px bg-white/30" />

              <div className="text-center">
                <p className="text-3xl font-semibold text-black">2.5k</p>
                <p className="text-black text-sm">Daily Trips</p>
              </div>

              <div className="h-10 w-px bg-white/30" />

              <div className="text-center ">
                <p className="text-3xl font-semibold text-black m">98%</p>
                <p className="text-black text-sm">On-time rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
