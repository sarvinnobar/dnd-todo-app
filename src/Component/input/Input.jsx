import React, { useContext, useState, useEffect } from "react";
import { plus } from "../../assets/icons/plus";
import Button from "../button/Button";
import { TaskContext } from "../../contexts/TaskProvider";
import { v4 as uuidv4 } from "uuid";

export default function Input() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useContext(TaskContext);

  const clickHandler = (e) => {
    e.preventDefault();
    if ("" === title || undefined === title) {
      return;
    }
    const newTask = [
      ...tasks,
      { id: uuidv4(), title: title, completed: false },
    ];
    setTasks(newTask);
    setTitle("");
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className=" text-[1.1vw] w-column flex  justify-center items-center">
      <div className="flex items-center  w-[17vw] h-[3vw] shadow-sm bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  rounded-md">
        <div>
          <Button action={clickHandler}>{plus}</Button>
        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add task"
          id="newTask"
          className=" bg-transparent placeholder-white placeholder-opacity-80 outline-none"
        />
      </div>
    </div>
  );
}
