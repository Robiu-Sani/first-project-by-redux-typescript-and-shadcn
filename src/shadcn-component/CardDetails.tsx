import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TaskInterface } from "@/interfaces/task-interface";
import { CheckCircle, Clock } from "lucide-react";

interface TaskDetailsProps {
  task: TaskInterface;
}

export default function CardDetails({ task }: TaskDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger className="absolute w-full h-full z-0"></DialogTrigger>
      <DialogContent className="p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            {task.title}
          </DialogTitle>
          <DialogDescription className="whitespace-pre-wrap text-gray-600">
            {task.description}
          </DialogDescription>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between items-center">
            <p className="font-medium">Due Date:</p>
            <span className="text-gray-900 font-semibold">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium">Priority:</p>
            <Badge
              className={`px-3 py-1 rounded-lg ${
                task.priority === "high"
                  ? "bg-red-500 text-white"
                  : task.priority === "medium"
                  ? "bg-yellow-500 text-black"
                  : "bg-green-500 text-white"
              }`}
            >
              {task.priority}
            </Badge>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium">Status:</p>
            <span
              className={`flex items-center gap-2 px-3 py-1 rounded-lg font-semibold ${
                task.isCompleted
                  ? "text-green-600 bg-green-100"
                  : "text-yellow-600 bg-yellow-100"
              }`}
            >
              {task.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <Clock className="w-5 h-5 text-yellow-600" />
              )}
              {task.isCompleted ? "Completed" : "Pending"}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
