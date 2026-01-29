import { motion } from "framer-motion"
import { PlayCircle, FileText } from "lucide-react"

function CallDetails({ call }) {
  if (!call) {
    return (
      <div
        className="rounded-2xl h-full flex items-center justify-center"
        style={{
          background: "rgba(15, 23, 43, 0.5)",
          border: "1px solid rgba(43, 127, 255, 0.2)",
        }}
      >
        <p className="text-slate-400">Select a call to view details</p>
      </div>
    )
  }

  const transcript = [
    { role: "AI Assistant", message: "Thank you for calling UBreakiFix! How can I help you today?" },
    { role: "Customer", message: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" },
    { role: "AI Assistant", message: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?" },
    { role: "Customer", message: "Yes, please! When are you available?" },
    { role: "AI Assistant", message: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?" },
  ]

  return (
    <motion.div
      key={call.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl h-full overflow-hidden"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
        border: "1px solid rgba(43, 127, 255, 0.2)",
      }}
    >
      <h3
        className="text-lg text-white p-4"
        style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}
      >
        Call Details
      </h3>

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Phone Number</p>
            <p className="text-white">{call.phoneNumber}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Duration</p>
            <p className="text-white ">{call.duration}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Date & Time</p>
            <p className="text-white ">{call.date} {call.time}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Issue Type</p>
            <p className="text-white ">{call.issueType}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">Call Type</p>
          <span
            className="px-3 py-1 rounded-full text-xs  inline-block"
            style={{
              background: `${call.statusColor}20`,
              color: call.statusColor,
              border: `1px solid ${call.statusColor}40`,
            }}
          >
            {call.status}
          </span>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">Outcome</p>
          <p className="text-white ">{call.outcome}</p>
        </div>

        <button
          className="w-full py-3 flex items-center justify-center gap-2 text-[#c27aff] transition-all hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, rgba(172.87, 70.37, 255, 0.2), rgba(246.28, 50.53, 154.1, 0.2) 100%)",
            border: "1px solid rgba(173, 70, 255, 0.3)",
            borderRadius: "14px",
          }}
        >
          <PlayCircle size={18} />
          Play Audio Recording
        </button>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} className="text-slate-400" />
            <p className="text-white ">Conversation Transcript</p>
          </div>

          <div
            className="space-y-4 p-4 rounded-xl"
            style={{
              background: "rgba(10, 18, 42, 0.5)",
            }}
          >
            {transcript.map((item, index) => (
              <div key={index}>
                <p
                  className="text-sm  mb-1"
                  style={{ color: item.role === "AI Assistant" ? "#10B981" : "#60A5FA" }}
                >
                  {item.role}:
                </p>
                <p className="text-sm text-slate-300">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CallDetails
