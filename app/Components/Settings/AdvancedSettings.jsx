"use client";

import React, { useState } from "react";
import {
  FileText,
  RefreshCw,
  Database,
  Archive,
  Download,
  Upload,
  Clock,
  Wrench,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function AdvancedSettings() {
  const [automaticBackups, setAutomaticBackups] = useState(true);
  const [systemCaching, setSystemCaching] = useState(true);
  const [logRetention, setLogRetention] = useState("30 days");
  const [apiRateLimit, setApiRateLimit] = useState("1000 requests/hour");

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">
          Advanced Settings
        </h1>
        <p className="text-xs text-gray-500">
          System logs, debugging, and developer tools.
        </p>
      </header>

      {/* System Status */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
        <p className="text-xs font-semibold text-gray-700">System Status</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <StatusCard
            title="System Version"
            value="v2.5.3"
            status="UP TO DATE"
            statusColor="text-emerald-600"
          />
          <StatusCard
            title="Database Size"
            value="3.2 GB"
            status="OPTIMIZED"
            statusColor="text-blue-600"
          />
          <StatusCard
            title="Cache Status"
            value={
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Active
              </span>
            }
            status="284 MB cached"
            statusColor="text-gray-600"
          />
          <StatusCard
            title="System Uptime"
            value="99.98%"
            status="48 DAYS"
            statusColor="text-emerald-600"
          />
        </div>
      </div>

      {/* Developer Tools */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">Developer Tools</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ToolCard
            icon={FileText}
            iconBg="bg-blue-50 text-blue-600"
            title="System Logs"
            description="View detailed logs"
          />
          <ToolCard
            icon={RefreshCw}
            iconBg="bg-emerald-50 text-emerald-600"
            title="Clear Cache"
            description="Improve performance"
          />
          <ToolCard
            icon={Database}
            iconBg="bg-purple-50 text-purple-600"
            title="DB Maintenance"
            description="Optimize database"
          />
          <ToolCard
            icon={Archive}
            iconBg="bg-orange-50 text-orange-600"
            title="Backup & Restore"
            description="Manage backups"
          />
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">Data Management</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ToolCard
            icon={Download}
            iconBg="bg-emerald-50 text-emerald-600"
            title="Export Data"
            description="Download system data"
          />
          <ToolCard
            icon={Upload}
            iconBg="bg-blue-50 text-blue-600"
            title="Import Data"
            description="Upload data files"
          />
        </div>
      </div>

      {/* Advanced Configuration */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-700">
          Advanced Configuration
        </p>
        <ConfigRow
          title="Automatic Backups"
          description="Daily automatic system backups at 3:00 AM"
          enabled={automaticBackups}
          onToggle={() => setAutomaticBackups(!automaticBackups)}
        />
        <ConfigRow
          title="Enable System Caching"
          description="Improve performance with intelligent caching"
          enabled={systemCaching}
          onToggle={() => setSystemCaching(!systemCaching)}
        />
        <SelectRow
          title="Log Retention Period"
          description="How long to keep system logs"
          value={logRetention}
          options={["7 days", "30 days", "90 days", "1 year"]}
          onChange={(val) => setLogRetention(val)}
        />
        <SelectRow
          title="API Rate Limit"
          description="Maximum API requests per hour"
          value={apiRateLimit}
          options={[
            "500 requests/hour",
            "1000 requests/hour",
            "5000 requests/hour",
            "10000 requests/hour",
          ]}
          onChange={(val) => setApiRateLimit(val)}
        />
      </div>

      {/* Debug Mode & Maintenance Mode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ModeCard
          icon={Clock}
          iconBg="bg-teal-50 text-teal-600"
          title="Debug Mode"
          description="Enable detailed logging and debugging"
          buttonText="Enable Debug Mode"
          buttonBg="bg-emerald-900 hover:bg-emerald-800"
        />
        <ModeCard
          icon={Wrench}
          iconBg="bg-gray-50 text-gray-600"
          title="Maintenance Mode"
          description="Put system in maintenance mode"
          buttonText="Enable Maintenance"
          buttonBg="bg-gray-800 hover:bg-gray-700"
        />
      </div>
    </section>
  );
}

function StatusCard({ title, value, status, statusColor }) {
  return (
    <div className="rounded-xl bg-gray-50 px-4 py-3 space-y-1">
      <p className="text-[11px] text-gray-500">{title}</p>
      <p className="text-xs font-semibold text-gray-800">{value}</p>
      <p className={`text-[11px] font-medium ${statusColor}`}>{status}</p>
    </div>
  );
}

function ToolCard({ icon: Icon, iconBg, title, description }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">{title}</p>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </div>
  );
}

function ConfigRow({ title, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-800">{title}</p>
        <p className="text-[11px] text-gray-500">{description}</p>
      </div>
      <Toggle enabled={enabled} onToggle={onToggle} />
    </div>
  );
}

function SelectRow({ title, description, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-800">{title}</p>
          <p className="text-[11px] text-gray-500">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-700">{value}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition-colors ${
                value === opt ? "bg-emerald-50 text-emerald-700 font-medium" : "text-gray-700"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ModeCard({ icon: Icon, iconBg, title, description, buttonText, buttonBg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-800">{title}</p>
          <p className="text-[11px] text-gray-500 mt-1">{description}</p>
        </div>
      </div>
      <button
        className={`w-full px-4 py-2.5 rounded-lg text-xs font-medium text-white ${buttonBg} transition-colors`}
      >
        {buttonText}
      </button>
    </div>
  );
}function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-9 h-5 rounded-full transition-colors flex items-center ${
        enabled ? "bg-emerald-500 justify-end" : "bg-gray-300 justify-start"
      } px-0.5`}
    >
      <span className="w-4 h-4 rounded-full bg-white shadow transition-transform" />
    </button>
  );
}
