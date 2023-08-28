import React from "react";
import HeatMap from "./HeatMap";
import Sales from "./Sales";
import TotalVisits from "./TotalVisits";
import HourlyVisits from "./HourlyVisits";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 m-6 border-2 bg-gray-100 border-huawei-red-hover rounded-md">
        <div className="flex flex-row h-1/2">
          <HourlyVisits />
          <TotalVisits />
        </div>
        <div className="flex flex-row h-1/2">
          <HeatMap />
          <Sales />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

<div className="flex flex-col h-full p-6 m-6 border-2 bg-gray-100 border-huawei-red-hover rounded-md">
  <div className="flex flex-row h-1/2 ">
    <HourlyVisits className="w-1/2" />
    <TotalVisits className="w-1/2" />
  </div>
  <div className="flex flex-row h-1/2">
    <HeatMap className="w-2/3" />
    <Sales className="w-1/3" />
  </div>
</div>;
