import React from "react";
import CreateTask from "../Tasklist/CreateTask";
import AllTask from "../Tasklist/AllTask";
import AdminHeader from "../AdminHeader";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <AdminHeader/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
