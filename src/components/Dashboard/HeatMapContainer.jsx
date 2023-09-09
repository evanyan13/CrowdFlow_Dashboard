import React, { useState } from "react";
import HeatMap from "./HeatMap";
import HeatMapModal from "./HeatMapModal";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";

const HeatMapContainer = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className="w-1/2 p-4 bg-white rounded-md m-1 drop-shadow-md flex justify-center">
      <button
        className="absolute top-0 right-0 p-2 bg-white rounded-md drop-shadow-md hover:bg-gray-100"
        onClick={() => setOpen(true)}
      >
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </button>
      <HeatMap width="400vw"/>
      <HeatMapModal open={open} hideModal={hideModal} />
    </div>
  );
};

export default HeatMapContainer;
