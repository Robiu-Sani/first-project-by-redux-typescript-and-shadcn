import { TaskInterface } from "@/interfaces/task-interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: TaskInterface[];
}

const initialState: InitialState = {
  task: [
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
      isCompleted: false,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
