import { motion } from "framer-motion";
import { Phone, Clock, CheckCircle } from "lucide-react";

function CallList({ calls, selectedCall, onSelectCall }) {
  return (
    <div
      className="rounded-2xl h-full"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
        border: "1px solid rgba(43, 127, 255, 0.2)",
      }}
    >
      <h3
        className="text-lg text-white p-4"
        style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}
      >
        Call List
      </h3>

      <div className="space-y-3">
        {calls.map((call, index) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            onClick={() => onSelectCall && onSelectCall(call)}
            className="p-4 cursor-pointer"
            style={{
              borderBottom:
                selectedCall?.id === call.id
                  ? "3px solid rgba(43, 127, 255, 1)"
                  : "3px solid transparent",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  }}
                >
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white">{call.phoneNumber}</p>
                  <p className="text-xs text-slate-400">
                    {call.date} • {call.time}
                  </p>
                </div>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  background: `${call.statusColor}20`,
                  color: call.statusColor,
                  border: `1px solid ${call.statusColor}40`,
                }}
              >
                {call.status}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock size={14} />
                <span>{call.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle size={14} />
                <span>{call.outcome}</span>
              </div>
              <span
                className="px-2.5 py-0.5 rounded-md text-xs"
                style={{
                  background: "rgba(43, 127, 255, 0.15)",
                  color: "#60A5FA",
                }}
              >
                {call.issueType}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CallList;
