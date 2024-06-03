import React, { useContext } from "react";
import { remove } from "../../assets/icons/remove";
import { TaskContext } from "../../contexts/TaskProvider";
import { DoneContext } from "../../contexts/DoneProvider";
import Button from "../button/Button";

export default function Task({ task, column }) {
  const [tasks, setTasks] = useContext(TaskContext);
  const [done, setDone] = useContext(DoneContext);
  const handleDragStart = (e) => {
    const currentTask = {
      task: task,
      column: column,
    };
    e.dataTransfer.setData(
      "application/current-task",
      JSON.stringify(currentTask)
    );
  };
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  const deleteTaks = () => {
    column = true
      ? setDone(done.filter((item) => item.id != task.id))
      : setTasks(tasks.filter((item) => item.id != task.id));
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        id={task.id}
        key={task.id}
        className="border-2  mb-[0.8vw] mx-[0.5vw] p-[1vw] rounded-[0.8vw] text-[1.1vw] flex gap-[0.5vw] text-[#414641] md:shadow-md   "
      >
        <Button
          className={" w-[1.2vw]  h-[1.2vw] flex justify-center self-center"}
          action={deleteTaks}
        >
          <div>{remove}</div>
        </Button>
        {task.title}
      </div>
    </>
  );
}
