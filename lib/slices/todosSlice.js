import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    createTodo: (state, action) => [...state, action.payload],
    updateTodo: (state, action) => [
      ...state.filter(({ id }) => id !== action.payload.id),
      action.payload,
    ],
    deleteTodo: (state, action) =>
      state.filter(({ id }) => id !== action.payload.id),
  },
});

/**
 * Extract todo from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current todo
 */
export const selectTodos = (state) => state.todos;

export const { createTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
