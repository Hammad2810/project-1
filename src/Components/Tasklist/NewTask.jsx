import React from "react";

const NewTask = ({data}) => {
  return <div className="flex-shrink-0 h-full w-full bg-green-400 p-5 mt-5 rounded-xl">
  <div className="flex justify-between items-center">
    <h4 className="bg-red-600 px-3 py-1 text-white font-bold rounded-xl">{data.taskCategory}</h4>
    <h5>{data.date}</h5>
  </div>
  <h2 className="mt-5 text-xl font-semibold">
    {data.taskTitle}
  </h2>
  <p className="text-sm mt-2">
    {data.description}
  </p>
  <div className="mt-4">
    <button className="bg-green-500 mt-3">Accept Task</button>
  </div>
</div>
};

export default NewTask;
