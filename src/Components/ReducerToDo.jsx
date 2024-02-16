import React, { useReducer, useState } from 'react';

// Define action types
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Reducer function to update state based on action type
function todosReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    dispatch({ type: ADD_TODO, payload: text });
    setText('');
  };

  const updateTodo = (id) => {
    dispatch({ type: UPDATE_TODO, payload: { id, text: editText } });
    setEditingId(null);
    setEditText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <div>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button onClick={() => updateTodo(todo.id)}>Update</button>
              </div>
            ) : (
              <div>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                  onClick={() => { setEditingId(todo.id); setEditText(todo.text); }}
                >
                  {todo.text}
                </span>
                <button onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
