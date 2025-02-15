import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="p-6 w-full h-screen bg-black text-white flex flex-col gap-6">
      <Header />
      <div className="flex flex-col gap-4 flex-grow">
        <CreateTask/>
        <AllTask/>
      </div>
    </div>
  );
};

export default AdminDashboard;
