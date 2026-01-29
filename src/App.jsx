import { useState } from "react"
import DashboardLayout from "./components/layout/DashboardLayout"

function App() {
  const [activeItem, setActiveItem] = useState("dashboard")

  return (
    <DashboardLayout activeItem={activeItem} setActiveItem={setActiveItem}>
      {/* Main content will go here based on activeItem */}
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] text-slate-500">
        <p className="text-xl">Main content</p>
      </div>
    </DashboardLayout>
  )
}

export default App
