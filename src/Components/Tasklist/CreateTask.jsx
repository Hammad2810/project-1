import React from "react";

const CreateTask = () => {
  return <div>
    <form className="flex flex-wrap w-full mt-10 items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-700"> Task Title </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Task Title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Date </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Assign To </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Category </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Categories"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3> Description </h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent border-[1px] border-gray-400"
            placeholder="Detailed description of task"
          ></textarea>
        </div>
        <button className="bg-green-900 text-white font-bold py-3 px-5 hover:bg-green-950 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
  </div>;
};

export default CreateTask;
