import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, editTask } from '../Features/todoSlice';

function ReduxToDo() {
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState({ id: null, text: '' });
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTask({
      id: Math.random(),
      text: input,
    }));
    setInput('');
  };

  const handleEditChange = (e) => {
    setEdit({ ...edit, text: e.target.value });
  };

  const handleEdit = (task) => {
    setEdit({ id: task.id, text: task.text });
  };

  const saveEdit = () => {
    dispatch(editTask({ id: edit.id, text: edit.text }));
    setEdit({ id: null, text: '' });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {edit.id === task.id ? (
              <input
                type="text"
                value={edit.text}
                onChange={handleEditChange}
                onBlur={saveEdit}
              />
            ) : (
              <span onClick={() => handleEdit(task)}>{task.text}</span>
            )}
            <button onClick={() => dispatch(removeTask(task.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReduxToDo;
