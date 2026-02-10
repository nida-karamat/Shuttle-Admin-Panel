import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile, visible on md+ */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-64">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="pt-16 sm:pt-20 p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
