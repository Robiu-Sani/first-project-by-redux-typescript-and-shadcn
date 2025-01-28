import { TaskInterface } from "@/interfaces/task-interface";
import { cn } from "@/lib/utils";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";

interface PropsInterface {
  task: TaskInterface;
}

export default function TaskCard({ task }: PropsInterface) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg shadow-md transition-all duration-200 hover:shadow-lg",
        {
          "bg-green-50 dark:bg-green-950": task.priority === "low",
          "bg-yellow-50 dark:bg-yellow-950": task.priority === "medium",
          "bg-red-50 dark:bg-red-950": task.priority === "high",
        }
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="text-2xl text-gray-600 dark:text-gray-300">
            {task.isCompleted ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <MdRadioButtonUnchecked />
            )}
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
        <button className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors duration-200">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
