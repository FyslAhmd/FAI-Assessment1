import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

function BookingLink() {
  const [copied, setCopied] = useState(false)
  const bookingUrl = "https://techstore.com/book?id=store123"

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-4 sm:p-5 rounded-2xl"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
      }}
    >
      <p className="text-sm sm:text-base text-white mb-3 sm:mb-4">Booking Link</p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <div
          className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-slate-300 text-xs sm:text-sm truncate"
          style={{
            background: "rgba(10, 18, 42, 0.8)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
          }}
        >
          {bookingUrl}
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 text-white text-xs sm:text-sm transition-all hover:opacity-90 shrink-0"
          style={{
            background: "linear-gradient(180deg, rgba(21, 34, 82, 1) 0%, rgba(17, 27, 60, 1) 100%)",
            boxShadow: "inset 0px 1px 10px 1px rgba(210, 234, 255, 1)",
            border: "1px solid rgba(43, 127, 255, 0.3)",
          }}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </motion.div>
  )
}

export default BookingLink
