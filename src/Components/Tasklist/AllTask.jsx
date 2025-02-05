import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthContext)


  return <div className="p-5 bg-yellow-50 rounded mt-10">
    <div className="bg-red-400 mb-5 py-2 px-4 flex justify-between rounded">
      <h2 className="w-1/5 text-white font-bold">Employee Name</h2>
      <h3 className="w-1/5 text-white font-bold">New Task</h3>
      <h5 className="w-1/5 text-white font-bold">Active Task</h5>
      <h5 className="w-1/5 text-white font-bold">Completed Task</h5>
      <h5 className="w-1/5 text-white font-bold">Failed Task</h5>
    </div>
    <div className="overflow-auto">
    {authData.employees.map((e) => {
      return <div className="bg-red-400 mb-5 py-2 px-4 flex justify-between rounded">
      <h2 className="w-1/5">{e.firstName}</h2>
      <h3 className="w-1/5 text-blue-600">{e.newTask}</h3>
      <h5 className="w-1/5 text-yellow-400">{e.active}</h5>
      <h5 className="w-1/5 text-green-100">{e.completed}</h5>
      <h5 className="w-1/5 text-red-900">{e.failed}</h5>
    </div>
    })}
    </div>
  </div>;
};

export default AllTask;
