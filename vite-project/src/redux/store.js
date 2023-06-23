import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import todoReducer from "../components/Todo/todoSlice";

const rootReducer = {
  counter: counterReducer,
  todos: todoReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
