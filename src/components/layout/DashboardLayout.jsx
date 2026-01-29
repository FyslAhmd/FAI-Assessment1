import { useState } from "react"
import Sidebar from "./Sidebar"

function DashboardLayout({ children, activeItem, setActiveItem }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 min-h-screen">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
