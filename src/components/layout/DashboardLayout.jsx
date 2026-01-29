import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "rgba(10, 18, 42, 1)" }}
    >
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="flex-1 lg:ml-0 min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
