import React, { useState } from "react";
import TotalVisits from "./TotalVisits";
import TotalVisitsModal from "./TotalVisitsModal";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";

const TotalVisitsContainer = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className="w-1/2 p-4 bg-white rounded-md m-1 drop-shadow-md flex flex-col items-center justify-evenly">
      <span className="text-lg font-semibold">Total Visits</span>
      <button
        className="absolute top-0 right-0 p-2 bg-white rounded-md drop-shadow-md hover:bg-gray-100"
        onClick={() => setOpen(true)}
      >
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </button>
      <TotalVisits />
      <TotalVisitsModal open={open} hideModal={hideModal} />
    </div>
  );
};

export default TotalVisitsContainer;
