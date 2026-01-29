import { motion } from "framer-motion"

const repairRequests = [
  { name: "Screen Repair", requests: 156, maxRequests: 156 },
  { name: "Battery Replacement", requests: 89, maxRequests: 156 },
  { name: "Back Glass Repair", requests: 67, maxRequests: 156 },
  { name: "Software Issues", requests: 45, maxRequests: 156 },
]

function TopRepairRequests() {
  return (
    <div
      className="p-4 sm:p-6 rounded-2xl h-full"
      style={{
        boxSizing: "border-box",
        border: "1px solid rgba(43, 127, 255, 0.2)",
        background: "rgba(15, 23, 43, 0.5)",
      }}
    >
      <h3 className="text-lg text-white mb-6">Top Repair Requests</h3>

      <div className="space-y-5">
        {repairRequests.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">{item.name}</p>
              <p className="text-sm text-slate-400">{item.requests} requests</p>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-700/50 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.requests / item.maxRequests) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00D4FF 0%, #3B82F6 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRepairRequests
