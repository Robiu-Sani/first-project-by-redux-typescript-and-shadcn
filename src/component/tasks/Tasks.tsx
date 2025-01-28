import { useAppSelector } from "@/redux/hook";
import TaskCard from "./TaskCard";
import { selectTasks } from "@/redux/fetures/task/taskSlice";
import { Button } from "@/components/ui/button";
import AddTaskForm from "@/shadcn-component/AddTaskForm";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="container mx-auto px-2 pt-3 ">
        <div
          className="w-full border h-[100px] md:h-[200px] rounded-lg overflow-hidden flex flex-col gap-3 items-center justify-center 
          bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 shadow-md"
        >
          <h1 className="text-gray-800 dark:text-gray-100 text-xl md:text-2xl font-semibold">
            Manage Your Tasks Efficiently
          </h1>

          <Button
            variant="outline"
            className="bg-transparent px-6 border border-gray-800 dark:border-gray-300"
          >
            <AddTaskForm />
          </Button>
        </div>
      </div>
      <div className="container px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
}
