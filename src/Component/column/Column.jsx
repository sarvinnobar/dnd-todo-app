import Task from "../task/Task";
import Input from "../input/Input";

export default function Column({ column, handleDragOver, handleDrop, tasks }) {
  var marginTop;
  column.id === 0 ? (marginTop = "mt-[7vw]") : (marginTop = "mt-[3.8vw]");

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className=" bg-[#ffff]  shadow-xl  border-t  border-l border-white border-opacity-45 h-[31.25vw] w-[18.299vw] rounded-[1.5vw] overflow-scroll scroll-smooth no-scrollbar">
        <div className="fixed  w-[18.299vw]   rounded-t-xl   text-[1.8vw]">
          <h2 className="ml-[1vw] p-[0.2vw] text-[#7e7e7e]">{column.title}</h2>
        </div>

        <div className="fixed mt-[3.3vw]">{column.id === 0 && <Input />}</div>
        {column.id === 1 && tasks.length < 1 && (
          <div className=" text-[1.5vw]  font-medium mx-[1vw] text-gray-700 text-opacity-50 my-[50%] ">
            <h2>Drag and drop the completed tasks here...</h2>
          </div>
        )}
        <div className={marginTop}>
          {tasks.map((task) => {
            return <Task task={task} column={column} key={task.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
