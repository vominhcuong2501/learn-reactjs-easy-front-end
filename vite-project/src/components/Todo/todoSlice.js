import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
    {
      id: 4,
      title: "Playing",
      status: "new",
    },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo } = actions;
export default reducer;
