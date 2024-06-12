import React from "react";
import Header from "./Header";
import Body from "./Body";

function Dashboard() {
  return (
    <div className="h-screen w-full grid grid-rows-12">
          <div className="bg-black row-span-3 sm:row-span-2 h-full flex items-center pt-6 pl-6 sm:px-1">
            <Header />
          </div>
          <div className="bg-black row-span-9 text-white sm:row-span-10 h-full sm:px-10 xl:px-40 py-4">
            <Body />
          </div>
    </div>
  );
}

export default Dashboard;
