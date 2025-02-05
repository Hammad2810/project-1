import React from "react";

const TaskData = ({data}) => {
  return <div>
    <div className="flex screen mt-10 justify-between gap-5">
      <div className="px-9 py-5 rounded-xl w-1/2 bg-red-300">
        <h2 className="text-3xl font-extrabold">{data.newTask}</h2>
        <h1 className="text-xl font-bold">New Task</h1>
      </div>
      <div className="px-9 py-5 rounded-xl w-1/2 bg-blue-300">
        <h2 className="text-3xl font-extrabold">{data.completed}</h2>
        <h1 className="text-xl font-bold">Completed Task</h1>
      </div>
      <div className="px-9 py-5 rounded-xl w-1/2 bg-purple-300">
        <h2 className="text-3xl font-extrabold">{data.active}</h2>
        <h1 className="text-xl font-bold">Accepted Task</h1>
      </div>
      <div className="px-9 py-5 rounded-xl w-1/2 bg-yellow-300">
        <h2 className="text-3xl font-extrabold">{data.failed}</h2>
        <h1 className="text-xl font-bold">Failed Task</h1>
      </div>
    </div>
  </div>;
};

export default TaskData;
