import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import Register from "./Register";
import ToDoList from "./ToDoList";

function Navbar(){
    return(
        <>
            <BrowserRouter>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                {/* <li><Link to={'/todo'}>To-Do</Link></li> */}
                <li><Link to={'/todo-list'}>To-Do-List</Link></li>
                <li><Link to={'/register'}>Register</Link></li>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/todo-list" element={<ToDoList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar;