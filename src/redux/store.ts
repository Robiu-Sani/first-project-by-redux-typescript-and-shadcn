import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fetures/counter-reducer";
import taskReducer from "./fetures/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
