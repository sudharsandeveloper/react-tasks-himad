import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import Register from "./Register";
import ToDoList from "./ToDoList";
import Links from "./Links";
import NotFoundPage from "./NotFoundPage";
import FetchAPI from "./FetchAPI";
import Replica from "./Replica";
import AddToCart from "./AddToCart";
import CounterReducer from "./CounterReducer";
import ReducerToDo from "./ReducerToDo";
import ReduxToDo from "./ReduxToDo";

function Navbar(){
    return(
        <>
            <BrowserRouter>
                <Links />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/country" element={<FetchAPI />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/todo-list" element={<ToDoList />} />
                    <Route path="/replica" element={<Replica />} />
                    <Route path="/cart" element={<AddToCart />} />
                    <Route path="/count-reducer" element={<CounterReducer />} />
                    <Route path="/todo-reducer" element={<ReducerToDo />} />
                    <Route path="/todo-redux" element={<ReduxToDo />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar;