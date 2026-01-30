"use client";
import { useState } from "react";
import { MdSearch, MdAdd, MdNotifications } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

export default function Students() {
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    { id: "S-001", name: "Ali Khan", grade: "Grade 5-A", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-002", name: "Ahmed Raza", grade: "Grade 10-B", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-003", name: "Usman Ali", grade: "Grade 7-C", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-004", name: "Hassan Shah", grade: "Grade 9-A", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Inactive", attendance: "Absent" },
    { id: "S-005", name: "Ayesha Malik", grade: "Grade 11-B", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-006", name: "Fatima Noor", grade: "Grade 5-A", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-007", name: "Zainab Iqbal", grade: "Grade 12-C", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-008", name: "Hamza Ahmed", grade: "Grade 8-B", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Active", attendance: "Present" },
    { id: "S-009", name: "Sara Siddiqui", grade: "Grade 10-B", pickup: "RT-201", shuttle: "SH-012", location: "Building A, Gate 2", status: "Inactive", attendance: "Absent" },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 ml-61">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Students</h1>
          <p className="text-gray-500 mt-1">Manage student transport profiles and attendance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-600 hover:bg-gray-200 rounded-full">
            <MdNotifications size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 cursor-pointer font-semibold text-sm">
            <MdAdd size={20} />
            Add/Remove Student
          </div>
         
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="mb-6 flex items-center justify-between gap-4 ml-60">
        <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2">
          <MdSearch className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search by student name or ID"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            All Grades <IoChevronDown size={18} />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            All Routes <IoChevronDown size={18} />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            All Status <IoChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ml-60">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">St. ID</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Student Name</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Grade / Class</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Pickup Point</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Shuttle</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Pickup Location</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Transport Status</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Attendance Today</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{student.id}</td>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.grade}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.pickup}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.shuttle}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.location}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    student.status === "Active" 
                      ? "bg-teal-100 text-teal-700" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    • {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    student.attendance === "Present"
                      ? "bg-teal-100 text-teal-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    ⭕ {student.attendance}
                  </span>
                </td>
                <td className="px-6 py-4 text-teal-600 font-semibold text-sm cursor-pointer hover:underline">View Details →</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 9 of 50 results</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">←</button>
          <button className="px-3 py-2 bg-teal-600 text-white rounded-lg font-semibold">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">→</button>
        </div>
        <p className="text-sm text-gray-600">Page 1 of 5</p>
      </div>
    </div>
  );
}