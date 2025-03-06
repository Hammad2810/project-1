import React, { useState } from "react";

const CreateTask = () => {

  const [formData, setFormData] = useState({
    title : "",
    date : "",
    assign : "",
    category : "",
    description : "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formData); 
    setFormData({ title: "", date: "", assign: "", category: "", description: "", });
  }
  

  return <div>
    <form onSubmit={handleOnSubmit} className="flex flex-wrap w-full mt-10 items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-700"> Task Title </h3>
            <input
              name="title"
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Task Title"
              value={formData.title}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Date </h3>
            <input
              name="date"
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              value={formData.date}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Assign To </h3>
            <input
              name="assign"
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              value={formData.assign}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-700"> Category </h3>
            <input
              name="category"
              className="text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Categories"
              value={formData.category}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3> Description </h3>
          <textarea
            name="description"
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent border-[1px] border-gray-400"
            placeholder="Detailed description of task"
            value={formData.description}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="bg-green-900 text-white font-bold py-3 px-5 hover:bg-green-950 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
  </div>;
};

export default CreateTask;
