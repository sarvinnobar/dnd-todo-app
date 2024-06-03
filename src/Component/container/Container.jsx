import { useContext, useState } from "react";
import { columns } from "../../db/columns";
import { TaskContext } from "../../contexts/TaskProvider";
import { DoneContext } from "../../contexts/DoneProvider";
import Column from "../column/Column";

export default function Container() {
  const [onColumn, setOnColumn] = useState(null);
  const [tasks, setTasks] = useContext(TaskContext);
  const [done, setDone] = useContext(DoneContext);

  const handleDrop = (e) => {
    e.preventDefault();
    const currentTask = JSON.parse(
      e.dataTransfer.getData("application/current-task")
    );

    if (currentTask.column.id != onColumn) {
      if (currentTask.column.id === 0) {
        setDone([...done, currentTask.task]);
        const updatedTodo = tasks.filter(
          (task) => task.id != currentTask.task.id
        );
        setTasks(updatedTodo);
      } else {
        setTasks([...tasks, currentTask.task]);
        const updatedDone = done.filter(
          (task) => task.id != currentTask.task.id
        );
        setDone(updatedDone);
      }
    }
  };

  return (
    <div className=" h-[100vh] gap-[2.8vw] items-center   flex justify-center font-mono sm:flex-row xs:flex-col  ">
      <Column
        column={columns[0]}
        tasks={tasks}
        handleDragOver={(e) => {
          e.preventDefault();
          setOnColumn(0);
        }}
        handleDrop={handleDrop}
      ></Column>
      <Column
        column={columns[1]}
        tasks={done}
        handleDragOver={(e) => {
          e.preventDefault();
          setOnColumn(1);
        }}
        handleDrop={handleDrop}
      />
    </div>
  );
}
