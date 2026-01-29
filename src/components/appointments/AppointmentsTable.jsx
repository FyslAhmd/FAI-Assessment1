import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const appointmentsData = [
  {
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "09:00",
  },
  {
    id: 2,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "10:00",
  },
  {
    id: 3,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "11:00",
  },
  {
    id: 4,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "12:00",
  },
  {
    id: 5,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "02:00",
  },
  {
    id: 6,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "03:00",
  },
];

function AppointmentsTable() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 11;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 2);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15, 23, 43, 0.5)",
          border: "1px solid rgba(43, 127, 255, 0.2)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Client Name
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Client Phone
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap hidden md:table-cell">
                  Client mail
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Device
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap hidden sm:table-cell">
                  Repair Type
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Date
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap hidden lg:table-cell">
                  Slot no
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Start Time
                </th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr
                  key={appointment.id}
                  style={{
                    borderBottom:
                      index < appointmentsData.length - 1
                        ? "1px solid rgba(43, 127, 255, 0.1)"
                        : "none",
                  }}
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-blue-400 text-center whitespace-nowrap">
                    {appointment.clientName}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.clientPhone}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap hidden md:table-cell">
                    {appointment.clientMail}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.device}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap hidden sm:table-cell">
                    {appointment.repairType}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap hidden lg:table-cell">
                    {appointment.slotNo}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.startTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            disabled={page === "..."}
            className={`w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm transition-colors ${
              page === currentPage
                ? "bg-[#a7c8fe] text-[#001d6b]"
                : "text-[#0f62fe]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </>
  );
}

export default AppointmentsTable;
