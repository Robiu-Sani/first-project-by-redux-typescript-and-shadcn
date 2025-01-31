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
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<Partial<TaskInterface> & { id: string }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        Object.assign(task, action.payload);
      }
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleTasksCompleted, deleteTask, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
