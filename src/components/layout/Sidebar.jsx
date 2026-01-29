import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Phone,
  CalendarDays,
  Settings,
  Menu,
  X,
  LogOut,
  Zap,
} from "lucide-react";
import { cn } from "../../lib/utils";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard Overview",
    icon: Home,
    path: "/dashboard",
  },
  { id: "call-logs", label: "Call Logs", icon: Phone, path: "/call-logs" },
  {
    id: "appointments",
    label: "Appointments",
    icon: CalendarDays,
    path: "/appointments",
  },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
        style={{ backgroundColor: "rgba(17, 27, 60, 1)" }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 flex flex-col transition-transform duration-300 shrink-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
        style={{
          background: "rgba(17, 27, 60, 1)",
          borderRight: "1px solid rgba(43, 127, 255, 0.2)",
          minWidth: "256px",
          maxWidth: "256px",
        }}
      >
        <div className="p-6 flex justify-center">
          <div
            className="w-14 h-14 flex items-center justify-center"
            style={{
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, rgba(0, 255, 136, 1), rgba(0, 212, 255, 1) 100%)",
            }}
          >
            <Zap size={28} className="text-black" />
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const itemIsActive = isActive(item.path);

            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={cn(
                  "relative w-full flex items-center gap-3 px-5 py-3 text-left text-sm transition-all overflow-hidden",
                  "rounded-xl",
                  !itemIsActive &&
                    "text-slate-400 hover:text-white hover:bg-white/5",
                )}
                style={
                  itemIsActive
                    ? {
                        boxShadow: `
            inset 0px 0px 8px 1px rgba(210, 234, 255, 0.7),
            inset 0px 0px 10px 1px rgba(210, 234, 255, 0.5),
            0px 20px 80px 0px rgba(87, 177, 255, 0.34),
            0px 24.72px 32.26px 0px rgba(87, 177, 255, 0.19),
            0px 10.27px 13.4px 0px rgba(87, 177, 255, 0.22),
            0px 3.71px 4.85px 0px rgba(87, 177, 255, 0.15),
            0px 0px 0px 1px #E0E9F2,
            0px 0px 0px 1px #FFFFFF
          `,
                      }
                    : {}
                }
              >
                {itemIsActive && (
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))",
                      opacity: 0.6,
                    }}
                  />
                )}

                <Icon size={20} className="relative z-10 text-white" />
                <span className="relative z-10 font-medium text-white">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-white/5 transition-colors text-sm">
            <LogOut size={20} />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
