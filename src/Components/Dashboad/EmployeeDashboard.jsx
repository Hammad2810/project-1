import React from "react";
import Header from "../Header";
import TaskData from "../Tasklist/TaskData";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = ({data}) => {
  return <div className="p-10">
    <Header data={data}/>
    <TaskData data={data}/>
    <TaskList data={data}/>
  </div>;
};

export default EmployeeDashboard;
