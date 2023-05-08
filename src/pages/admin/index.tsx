import LineChart from "@/components/chart-analysist/line-chart";

const Component = () => {
  return (
    <div className="flex flex-wrap">
      <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
        <LineChart />
      </div>
      <div className="w-full px-4 xl:w-4/12">
        <LineChart />
      </div>
    </div>
  );
};
Component.displayName = "Admin";
export default Component;
