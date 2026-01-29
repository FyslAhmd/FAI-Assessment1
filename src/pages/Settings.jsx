import { useState } from "react";
import { motion } from "framer-motion";
import { Edit2 } from "lucide-react";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakifix Store",
    storeAddress: "123 Main Street, New York",
  });

  return (
    <div
      className="min-h-screen -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-6 lg:p-8"
      style={{
        background:
          "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="mb-6 sm:mb-8 flex gap-4 sm:gap-8">
        <button
          onClick={() => setActiveTab("profile")}
          className={`text-sm sm:text-lg pb-2 transition-colors ${
            activeTab === "profile" ? "text-white" : "text-slate-400"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`text-sm sm:text-lg pb-2 transition-colors ${
            activeTab === "password" ? "text-white" : "text-slate-400"
          }`}
        >
          Password Settings
        </button>
      </div>

      {activeTab === "profile" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 sm:mb-8">
            <p className="text-white text-lg sm:text-xl mb-3 sm:mb-4">Profile Image</p>
            <div className="flex items-end gap-3 sm:gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
                />
                {isEditMode && (
                  <button
                    className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-90 bg-[#81a1c7]"
                  >
                    <Edit2 size={16} className="sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>
              
              {!isEditMode && (
                <button
                  onClick={() => setIsEditMode(true)}
                  className="px-3 py-2 rounded-full text-white text-xs transition-all hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(21, 34, 82, 1) 0%, rgba(17, 27, 60, 1) 100%)",
                    boxShadow:
                      "inset 0px 1px 10px 1px rgba(210, 234, 255, 1), 0px 20px 100px 0px rgba(87, 177, 255, 0.34), 0px 10px 30px 0px rgba(87, 177, 255, 0.19), 0px 10.27px 13.4px 0px rgba(87, 177, 255, 0.22)",
                    border: "1px solid rgba(43, 127, 255, 0.3)",
                  }}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {!isEditMode ? (
            <div className="space-y-4 sm:space-y-6 max-w-3xl text-base sm:text-xl">
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <p className="text-white font-medium text-sm sm:text-base">Full Name:</p>
                <p className="text-slate-300 text-sm sm:text-base">{formData.fullName}</p>
              </div>

              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <p className="text-white font-medium text-sm sm:text-base">Email:</p>
                <p className="text-slate-300 text-sm sm:text-base">{formData.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <p className="text-white font-medium text-sm sm:text-base">Store Name:</p>
                <p className="text-slate-300 text-sm sm:text-base">{formData.storeName}</p>
              </div>

              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <p className="text-white font-medium text-sm sm:text-base">Store Address:</p>
                <p className="text-slate-300 text-sm sm:text-base">{formData.storeAddress}</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <label className="text-white text-sm sm:text-base mb-1.5 sm:mb-2 block">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base text-white outline-none"
                    style={{
                      background: "rgba(10, 18, 42, 0.8)",
                      border: "1px solid rgba(43, 127, 255, 0.3)",
                    }}
                  />
                </div>

                <div>
                  <label className="text-white text-sm sm:text-base mb-1.5 sm:mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base text-white outline-none"
                    style={{
                      background: "rgba(10, 18, 42, 0.8)",
                      border: "1px solid rgba(43, 127, 255, 0.3)",
                    }}
                  />
                </div>

                <div>
                  <label className="text-white text-sm sm:text-base mb-1.5 sm:mb-2 block">Store Name</label>
                  <input
                    type="text"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base text-white outline-none"
                    style={{
                      background: "rgba(10, 18, 42, 0.8)",
                      border: "1px solid rgba(43, 127, 255, 0.3)",
                    }}
                  />
                </div>

                <div>
                  <label className="text-white text-sm sm:text-base mb-1.5 sm:mb-2 block">Store Address</label>
                  <input
                    type="text"
                    value={formData.storeAddress}
                    onChange={(e) => setFormData({ ...formData, storeAddress: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base text-white outline-none"
                    style={{
                      background: "rgba(10, 18, 42, 0.8)",
                      border: "1px solid rgba(43, 127, 255, 0.3)",
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setIsEditMode(false)}
                  className="px-16 sm:px-32 py-2.5 sm:py-3 rounded-xl text-white font-bold text-lg sm:text-2xl transition-all hover:opacity-90 bg-[#00C950]"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {activeTab === "password" && <div></div>}
    </div>
  );
}

export default Settings;
