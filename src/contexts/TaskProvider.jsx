import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export default function TaskProvider(props) {
  const getTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(getTasks ? getTasks : []);

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
}
