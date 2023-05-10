import { ChartOptions } from "chart.js";

export const options: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Line Charts",
      color: "white",
    },
    legend: {
      labels: {
        color: "white",
      },
      align: "end",
      position: "bottom",
    },
    tooltip: {
      mode: "index",
      intersect: true,
    },
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    x: {
      ticks: {
        color: "rgba(255,255,255,.7)",
      },
      grid: {
        display: false,
        tickBorderDash: [2],
        tickBorderDashOffset: 2,
        color: "rgba(33, 37, 41, 0.3)",
        tickColor: "rgba(0, 0, 0, 0)",
      },
    },
    y: {
      ticks: {
        color: "rgba(255,255,255,.7)",
      },
      grid: {
        tickBorderDash: [3],
        tickBorderDashOffset: 3,
        drawTicks: false,
        color: "rgba(255, 255, 255, 0.15)",
      },
    },
  },
};
