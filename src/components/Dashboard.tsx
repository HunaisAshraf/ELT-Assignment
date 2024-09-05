import React from "react";
import Assignments from "./Assignments";
import Classes from "./Classes";
import PaginationComponent from "./PaginationComponent";

const Dashboard = () => {
  return (
    <div className="h-full max-w-screen">
      <div className="text-2xl font-bold bg-white px-3 md:px-6 py-3 md:py-7">
        <h1>Dashboard</h1>
      </div>
      <div className="bg-[#F6F6F7] md:px-6 sm:py-3 ">
        <div className="md:flex gap-4 sm:flex-wrap md:flex-nowrap">
          <Classes />
          <Assignments />
        </div>
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Dashboard;
