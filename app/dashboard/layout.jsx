import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="pt-20 p-6">{children}</div>
      </div>
    </div>
  );
}
