import { useState, useRef, useEffect } from "react"
import { Search, ChevronDown } from "lucide-react"
import CallList from "../components/callLogs/CallList"
import CallDetails from "../components/callLogs/CallDetails"

const typeOptions = ["All Type", "Inbound", "Outbound", "Missed"]
const issueOptions = ["All Issues", "Screen Repair", "Battery Replacement", "Software Issues", "Back Glass Repair"]
const dateOptions = ["Today", "Yesterday", "This Week", "This Month", "This Year"]

const callsData = [
  {
    id: 1,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "#10B981",
    outcome: "Quote Provided",
    issueType: "Screen Repair",
  },
  {
    id: 2,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    statusColor: "#F97316",
    outcome: "Escalated to technician",
    issueType: "Software Issues",
  },
  {
    id: 3,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    statusColor: "#3B82F6",
    outcome: "Appointment Booked",
    issueType: "Battery Replacement",
  },
  {
    id: 4,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    statusColor: "#EF4444",
    outcome: "Call Dropped",
    issueType: "Unknown",
  },
  {
    id: 5,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "#10B981",
    outcome: "Quote Provided",
    issueType: "Screen Repair",
  },
]

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-white flex items-center gap-1 sm:gap-2 min-w-24 sm:min-w-30 justify-between"
        style={{
          background: "rgba(17, 27, 60, 0.8)",
        }}
      >
        {value}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 py-2 w-full min-w-37.5 rounded-lg shadow-xl z-50"
          style={{
            background: "rgba(17, 27, 60, 0.95)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                value === option
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:bg-white/5"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function CallLogs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Type")
  const [selectedIssue, setSelectedIssue] = useState("All Issues")
  const [selectedDate, setSelectedDate] = useState("Today")
  const [selectedCall, setSelectedCall] = useState(callsData[0])

  return (
    <div
      className="min-h-screen -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-6 lg:p-8"
      style={{
        background: "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="w-full lg:w-1/2 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 outline-none"
            style={{
              background: "rgba(15, 23, 43, 0.5)",
              border: "1px solid rgba(43, 127, 255, 0.2)",
            }}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap gap-2 sm:gap-3 justify-start lg:justify-end">
          <Dropdown options={typeOptions} value={selectedType} onChange={setSelectedType} />
          <Dropdown options={issueOptions} value={selectedIssue} onChange={setSelectedIssue} />
          <Dropdown options={dateOptions} value={selectedDate} onChange={setSelectedDate} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <CallList calls={callsData} selectedCall={selectedCall} onSelectCall={setSelectedCall} />
        <CallDetails call={selectedCall} />
      </div>
    </div>
  )
}

export default CallLogs
