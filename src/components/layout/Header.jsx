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
      className="sticky top-0 z-30 px-4 py-2 flex items-center justify-between"
      style={{
        background: "#111c3c",
      }}
    >
      <div>
        <h1 className="text-3xl text-white">{pageName}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-white">
          <Bell size={24} />
        </button>

        <div className="ml-2">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
