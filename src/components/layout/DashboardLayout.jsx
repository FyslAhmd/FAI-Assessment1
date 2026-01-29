import { useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex" style={{ background: "rgba(10, 18, 42, 1)" }}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 min-h-screen flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
