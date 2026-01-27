import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

/* ✅ Register everything ONCE */
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const Chart = ({ data, labelKey, valueKey }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    /* 🔥 Destroy previous chart (VERY IMPORTANT) */
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item[labelKey]),
        datasets: [
          {
            label: "Broker vs Active Clients",
            data: data.map((item) => item[valueKey]),
            backgroundColor: "#5cb85c",
            borderRadius: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          title: {
            display: true,
            
          },

          legend: {
            position: "top",
            labels: {
              boxWidth: 40,
              font: {
                size: 12,
              },
            },
          },

          tooltip: {
            enabled: true,
          },

          /* 🎯 VALUE LABELS (hide on hover) */
          datalabels: {
            anchor: "end",
            align: "end",
            color: "#111827",
            font: {
              size: 12,
              weight: "500",
            },
            formatter: (value) =>
              Number(value).toLocaleString("en-IN"),

            display: (ctx) =>
              ctx.chart.getActiveElements().length === 0,
          },
        },

        scales: {
          x: {
            title: {
              display: true,
              text: "Broker",
              font: { weight: "bold" },
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Active Clients",
              font: { weight: "bold" },
            },
            ticks: {
              callback: (value) =>
                Number(value).toLocaleString("en-IN"),
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, labelKey, valueKey]);

  return (
    <div className="relative h-[420px] w-full overflow-x-auto">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Chart;
