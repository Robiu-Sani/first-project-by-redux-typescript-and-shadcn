import { useAppSelector } from "@/redux/hook";
import TaskCard from "./TaskCard";
import { selectTasks } from "@/redux/fetures/task/taskSlice";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
}
