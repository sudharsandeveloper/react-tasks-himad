import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import Register from "./Register";
import ToDoList from "./ToDoList";
import Links from "./Links";

function Navbar(){
    return(
        <>
            <BrowserRouter>
               <Links />
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