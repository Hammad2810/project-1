import React from "react";

const CompleteTask = ({data}) => {
  return <div className="flex-shrink-0 h-full w-full bg-blue-400 p-5 mt-5 rounded-xl">
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
    <button className="w-full py-1 px-2 bg-green-600">Completed</button>
  </div>
</div>
};

export default CompleteTask;
