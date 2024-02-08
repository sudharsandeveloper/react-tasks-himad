import React, { useState } from 'react'


function ToDoList() {
    const [User, setUser] = useState([])
    const [name, setName] = useState("");
    // const id = 0;

    const addName = () => {
        if(name != ''){
            setUser([...User,{id: Date.now(), name: name, edit:false}]);
            setName('')
        }
    }

    const deleteName = (id) => {
        setUser(User.filter(user => user.id !== id))
    }


    return (
    <div>
        <ul>
            {User.map((i) =>
            <> 
                <li key={i.id}>{i.name}</li>
                <button onClick={() => deleteName(i.id)}>Delete</button>
            </>
            )}
        </ul>
        <div>
            <input 
                type='text' 
                name='name' 
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <button onClick={addName}>Add</button><br/>
        </div>
    </div>

  )
}

export default ToDoList

// import React, { useState } from 'react';

// function ToDoList() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState('');

//   const addTask = () => {
//     if (!task) return;
//     setTasks([...tasks, { id: Date.now(), text: task, isEditing: false }]);
//     setTask('');
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const editTask = (id, newText) => {
//     setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, isEditing: false } : task));
//   };

//   const toggleEdit = (id) => {
//     setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
//   };

//   return (
//     <div className="App">
//       <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.isEditing ? (
//               <input
//                 type="text"
//                 defaultValue={task.text}
//                 onBlur={(e) => editTask(task.id, e.target.value)}
//               />
//             ) : (
//               <span>{task.text}</span>
//             )}
//             <button onClick={() => toggleEdit(task.id)}>{task.isEditing ? 'Save' : 'Edit'}</button>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDoList;
