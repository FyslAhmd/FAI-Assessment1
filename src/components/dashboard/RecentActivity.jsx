import { motion } from "framer-motion"

const activities = [
  {
    text: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    color: "#10B981",
  },
  {
    text: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    color: "#10B981",
  },
  {
    text: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    color: "#10B981",
  },
  {
    text: "Call dropped after 12 seconds",
    time: "15 min ago",
    color: "#EAB308",
  },
]

function RecentActivity() {
  return (
    <div
      className="p-4 sm:p-6 rounded-2xl h-full"
      style={{
        boxSizing: "border-box",
        border: "1px solid rgba(43, 127, 255, 0.2)",
        background: "rgba(15, 23, 43, 0.5)",
      }}
    >
      <h3 className="text-lg text-white mb-6">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3 py-3 border-b border-slate-700/50 last:border-0"
          >
            <div
              className="w-2 h-2 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: activity.color }}
            />
            <div className="flex-1">
              <p className="text-sm text-white">{activity.text}</p>
              <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
