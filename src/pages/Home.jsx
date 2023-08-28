import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
