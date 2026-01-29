import { useState, useRef, useEffect } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { ChevronDown } from "lucide-react"

const timePeriods = ["This Day", "This Week", "This Month", "This Year"]

function CallTrendsChart() {
  const [timePeriod, setTimePeriod] = useState("This Week")
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

  const options = {
    chart: {
      type: "areaspline",
      backgroundColor: "transparent",
      height: 300,
      style: {
        fontFamily: "Inter, sans-serif",
      },
      spacing: [10, 0, 10, 0],
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      lineColor: "rgba(100, 116, 139, 0.4)",
      lineWidth: 1,
      tickLength: 0,
      startOnTick: false,
      endOnTick: false,
      minPadding: 0,
      maxPadding: 0,
      labels: {
        style: {
          color: "white",
          fontSize: "12px",
        },
        y: 20,
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      gridLineWidth: 0,
      lineColor: "rgba(100, 116, 139, 0.4)",
      lineWidth: 1,
      labels: {
        style: {
          color: "white",
          fontSize: "12px",
        },
        x: -5,
      },
    },
    tooltip: {
      backgroundColor: "rgba(17, 27, 60, 0.95)",
      borderColor: "rgba(43, 127, 255, 0.3)",
      borderRadius: 8,
      style: {
        color: "#FFFFFF",
      },
      formatter: function () {
        return `<b>${this.x}</b><br/>${this.y} calls`;
      },
    },
    plotOptions: {
      areaspline: {
        pointPlacement: "on",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.05, "rgba(59, 130, 246, 0.8)"],
            [0.95, "rgba(59, 130, 246, 0)"],
          ],
        },
        lineWidth: 1,
        lineColor: "#3B82F6",
        marker: {
          enabled: false,
        },
      },
    },

    series: [
      {
        name: "Calls",
        data: [40, 52, 40, 55, 70, 85, 50],
      },
    ],
  };

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        boxSizing: "border-box",
        border: "1px solid rgba(43, 127, 255, 0.2)",
        background: "rgba(15, 23, 43, 0.5)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Call Trends - {timePeriod}
          </h3>
          <p className="text-sm text-slate-400 mt-1">Total: 472 calls</p>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-lg text-sm text-white flex items-center gap-2 hover:bg-white/5 transition-colors"
            style={{
              background: "rgba(17, 27, 60, 0.6)",
              border: "1px solid rgba(43, 127, 255, 0.2)",
            }}
          >
            {timePeriod}
            <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 py-2 w-36 rounded-lg shadow-xl z-50"
              style={{
                background: "rgba(17, 27, 60, 0.95)",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              {timePeriods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setTimePeriod(period)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                    timePeriod === period
                      ? "text-blue-400 bg-white/10"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default CallTrendsChart;
