import { TaskInterface } from "@/interfaces/task-interface";
import { RootState } from "@/redux/store";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: TaskInterface[];
  filter: string;
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskInterface>) => {
      const taskData = {
        ...action.payload,
        id: `task${nanoid()}`,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
    toggleTasksCompleted: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleTasksCompleted } = taskSlice.actions;

export default taskSlice.reducer;
