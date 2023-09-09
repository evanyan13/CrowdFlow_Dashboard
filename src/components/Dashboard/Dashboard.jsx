import React from "react";
import Sales from "./Sales";
import TotalVisits from "./TotalVisits/TotalVisits";
import HourlyVisitsContainer from "./HourlyVisits/HourlyVisitsContainer";
import HeatMapContainer from "./HeatMap/HeatMapContainer";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 m-6 border-2 bg-gray-100 border-huawei-red-hover rounded-md">
        <div className="flex flex-row h-1/2">
          <HourlyVisitsContainer />
          <TotalVisits />
        </div>
        <div className="flex flex-row h-1/2">
          <HeatMapContainer />
          <Sales />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
