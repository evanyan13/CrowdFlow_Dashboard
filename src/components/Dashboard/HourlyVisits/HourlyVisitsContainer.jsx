import React, { useState } from "react";
import HourlyVisits from "./HourlyVisits";
import HourlyVisitsModal from "./HourlyVisitsModal";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";

const HourlyVisitsContainer = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className="w-1/2 p-4 bg-white rounded-md m-1 drop-shadow-md flex flex-col items-center justify-evenly">
      <span className="text-lg font-semibold">Hourly Visits</span>
      <button
        className="absolute top-0 right-0 p-2 bg-white rounded-md drop-shadow-md hover:bg-gray-100"
        onClick={() => setOpen(true)}
      >
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </button>
      <HourlyVisits />
      <HourlyVisitsModal open={open} hideModal={hideModal} />
    </div>
  );
};

export default HourlyVisitsContainer;
