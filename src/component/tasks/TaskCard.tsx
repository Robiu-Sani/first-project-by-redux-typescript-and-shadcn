import { TaskInterface } from "@/interfaces/task-interface";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";

interface PropsInterface {
  task: TaskInterface;
}

export default function TaskCard({ task }: PropsInterface) {
  return (
    <div
      className={`flex  items-center justify-between p-4 border cursor-pointer rounded-lg shadow-md ${
        task.isCompleted
          ? "bg-green-100 dark:bg-green-800"
          : "bg-white dark:bg-zinc-800"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="text-xl text-gray-600 dark:text-gray-300">
            {task.isCompleted ? <FaCheckCircle /> : <MdRadioButtonUnchecked />}
          </div>
          {/* Title */}
          <div className="text-lg font-semibold text-gray-800 dark:text-white">
            {task.title}
          </div>
        </div>{" "}
        <div className="flex flex-1 items-center space-x-4">
          {/* Description - First 7 words */}
          <div className="text-sm ml-9 text-gray-600 dark:text-gray-300">
            {task.description.split(" ").slice(0, 7).join(" ") + "..."}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* Checkbox to mark as complete */}
        <input type="checkbox" className="cursor-pointer" />
        {/* Delete Button */}
        <button
          //   onClick={() => deleteTask(task.id)}
          className="text-red-600 dark:text-red-400 hover:text-red-800"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
