// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
