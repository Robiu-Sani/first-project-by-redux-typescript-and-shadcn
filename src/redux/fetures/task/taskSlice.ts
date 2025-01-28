import { TaskInterface } from "@/interfaces/task-interface";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: TaskInterface[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "6sd54f6sd5f746sd5f7sd1", // Ensure unique id
      title: "Task title 1",
      description: "This is the first task description with all values.",
      dueDate: "2531-45-65", // Corrected to dueDate
      isCompleted: false,
      priority: "high",
    },
    {
      id: "6sd54f6sd5f746sd5f7sd2", // Ensure unique id
      title: "Task title 2",
      description: "This is the second task description with all values.",
      dueDate: "2531-45-65", // Corrected to dueDate
      isCompleted: true,
      priority: "low",
    },
    {
      id: "6sd54f6sd5f746sd5f7sd1", // Ensure unique id
      title: "Task title 1",
      description: "This is the first task description with all values.",
      dueDate: "2531-45-65", // Corrected to dueDate
      isCompleted: true,
      priority: "medium",
    },
    {
      id: "6sd54f6sd5f746sd5f7sd2", // Ensure unique id
      title: "Task title 2",
      description: "This is the second task description with all values.",
      dueDate: "2531-45-65", // Corrected to dueDate
      isCompleted: false,
      priority: "low",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
