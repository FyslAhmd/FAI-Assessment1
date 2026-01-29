import { useLocation } from "react-router-dom";
import { Bell } from "lucide-react";

const pageNames = {
  "/dashboard": "Dashboard Overview",
  "/call-logs": "Call Logs & History",
  "/appointments": "Appointments",
  "/settings": "Settings",
};

function Header() {
  const location = useLocation();
  const pageName = pageNames[location.pathname] || "Dashboard";

  return (
    <header
      className="sticky top-0 z-30 px-4 lg:px-6 py-2 flex items-center justify-between"
      style={{
        background: "#111c3c",
      }}
    >
      <div className="ml-12 lg:ml-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-white">{pageName}</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative p-2 text-white">
          <Bell size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="ml-1 sm:ml-2">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
