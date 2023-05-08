import React from "react";

import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { options } from "@/components/chart-analysist/line-chart/constant";
import useDevice from "@/hooks/useDevice";

Chart.register(LinearScale);

const Component: React.FC = () => {
  const { isMobile } = useDevice();
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Label A",
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
        backgroundColor: "#4c51bf",
        borderColor: "#4c51bf",
        tension: 0.1,
      },
      {
        label: "Label B",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#fff",
        borderColor: "#fff",
        tension: 0.1,
      },
    ],
  };

  const chartContainerClass = isMobile ? "h-[250px]" : "h-[350px]";

  return (
    <>
      <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-blue shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 grow">
              <h6 className="mb-1 text-xs font-semibold uppercase text-white">
                Overview
              </h6>
              <h2 className="text-xl font-semibold text-white">Line chart</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          <div className={`relative ${chartContainerClass}`}>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
