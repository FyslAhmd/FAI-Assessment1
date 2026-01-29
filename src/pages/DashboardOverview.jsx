import StatsCard from "../components/dashboard/StatsCard"
import { Phone, Bot, ArrowLeftRight, Calendar, XCircle, Clock } from "lucide-react"

const statsData = [
  {
    title: "Total Calls Today",
    value: "127",
    change: 12,
    icon: Phone,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  },
  {
    title: "AI-Handled Calls",
    value: "98",
    change: 77,
    icon: Bot,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #D946EF 0%, #A855F7 100%)",
  },
  {
    title: "Warm Transfer",
    value: "23",
    change: 18,
    icon: ArrowLeftRight,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
  },
  {
    title: "Appointments Booked",
    value: "34",
    change: 8,
    icon: Calendar,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
  {
    title: "Missed/Failed Calls",
    value: "6",
    change: -3,
    icon: XCircle,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  },
  {
    title: "Avg Call Duration",
    value: "3:42",
    change: 15,
    icon: Clock,
    iconColor: "#FFFFFF",
    iconBg: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  },
]

function DashboardOverview() {
  return (
    <div 
      className="min-h-screen -m-6 lg:-m-8 p-6 lg:p-8"
      style={{
        background: "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default DashboardOverview
