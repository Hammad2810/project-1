import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return <div className="h-auto overflow-auto items-center gap-5 w-full p-5 bg-red-400 mt-10 rounded-xl">
    {data.tasks.map((e, idx) => {
      if(e.active) {
        return <AcceptTask key={idx} data={e}/>
      }
      if(e.NewTask) {
        return <NewTask key={idx} data={e}/>
      }
      if(e.completed) {
        return <CompleteTask key={idx} data={e}/>
      }
      if(e.failed) {
        return <FailedTask key={idx} data={e}/>
      }
    })}
  </div>;
};

export default TaskList;

