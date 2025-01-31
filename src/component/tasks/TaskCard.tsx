import { Checkbox } from "@/components/ui/checkbox";
import { TaskInterface } from "@/interfaces/task-interface";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleTasksCompleted,
} from "@/redux/fetures/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import EditTaskForm from "@/shadcn-component/EditTaskForm";
import { FaTrash } from "react-icons/fa";

interface PropsInterface {
  task: TaskInterface;
}

export default function TaskCard({ task }: PropsInterface) {
  const dispatch = useAppDispatch();
  return (
    <div
      className={cn(
        "flex flex-col cursor-pointer md:flex-row items-start md:items-center justify-between p-4 border rounded-lg shadow-md transition-all duration-200 hover:shadow-lg",
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
            <Checkbox
              className={cn("rounded-full text-xl ", {
                "bg-green-600": task.isCompleted === true,
              })}
              onClick={() => dispatch(toggleTasksCompleted(task.id))}
            />
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
      <div className="flex  items-center ">
        {/* Checkbox to mark as complete */}
        <EditTaskForm />
        {/* Delete Button */}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
