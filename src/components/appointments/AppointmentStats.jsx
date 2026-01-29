import { motion } from "framer-motion"
import { CalendarDays, CircleCheck, Clock } from "lucide-react"

const statsData = [
  {
    id: 1,
    title: "Total Booked",
    value: "34",
    subtitle: "+8 this week",
    subtitleColor: "#10B981",
    icon: CalendarDays,
    iconColor: "#3B82F6",
  },
  {
    id: 2,
    title: "AI Booked",
    value: "28",
    subtitle: "82% of total",
    subtitleColor: "#94A3B8",
    icon: CircleCheck,
    iconColor: "#10B981",
  },
  {
    id: 3,
    title: "Pending",
    value: "3",
    subtitle: "Awaiting confirmation",
    subtitleColor: "#94A3B8",
    icon: Clock,
    iconColor: "#FBBF24",
  },
]

function AppointmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-5 rounded-2xl"
          style={{
            background: "rgba(15, 23, 43, 0.5)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <stat.icon size={18} style={{ color: stat.iconColor }} />
            <p className="text-slate-400 text-sm">{stat.title}</p>
          </div>
          <p className="text-3xl font-semibold text-white mb-1">{stat.value}</p>
          <p className="text-sm" style={{ color: stat.subtitleColor }}>
            {stat.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default AppointmentStats
