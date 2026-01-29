import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex overflow-x-hidden max-w-full"
      style={{ background: "rgba(10, 18, 42, 1)" }}
    >
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="flex-1 min-h-screen flex flex-col lg:ml-64 overflow-x-hidden max-w-full">
        <Header />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
