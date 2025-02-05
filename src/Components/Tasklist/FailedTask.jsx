import React from "react";

const FailedTask = ({data}) => {
  return <div className="flex-shrink-0 h-full w-full bg-blue-400 p-5 mt-5 rounded-xl">
  <div className="flex justify-between items-center">
    <h4 className="bg-red-600 px-3 py-1 text-white font-bold rounded-xl">{data.category}</h4>
    <h5>{data.date}</h5>
  </div>
  <h2 className="mt-5 text-xl font-semibold">
    {data.taskTitle}
  </h2>
  <p className="text-sm mt-2">
    {data.description}
  </p>
  <div className="mt-2">
    <button className="w-full bg-red-600">Failed</button>
  </div>
</div>
};

export default FailedTask;
