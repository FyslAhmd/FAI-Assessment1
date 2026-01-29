import { motion } from "framer-motion";

function StatsCard({ title, value, change, icon: Icon, iconColor, iconBg }) {
  const isPositive = change >= 0;
  const isNegative = change < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -4,
        boxShadow: "0 8px 30px rgba(43, 127, 255, 0.15)",
        borderColor: "rgba(43, 127, 255, 0.4)",
      }}
      className="p-4 sm:p-6 relative overflow-hidden cursor-pointer"
      style={{
        boxSizing: "border-box",
        border: "1px solid rgba(43, 127, 255, 0.2)",
        borderRadius: "16px",
        background: "rgba(15, 23, 43, 0.5)",
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-slate-400 mb-2">{title}</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2">{value}</h3>

          <p
            className={`text-sm ${
              isPositive
                ? "text-green-400"
                : isNegative
                  ? "text-red-400"
                  : "text-slate-400"
            }`}
          >
            {isPositive && "+"}
            {change}%
          </p>
        </div>

        <div
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"
          style={{
            background: iconBg,
            boxShadow: `0 4px 20px ${iconColor}40`,
          }}
        >
          <Icon size={24} style={{ color: iconColor }} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}

export default StatsCard;
