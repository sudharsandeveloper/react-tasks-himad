import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <ul className='header-nav'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        {/* <li><Link to={'/todo'}>To-Do</Link></li> */}
        <li><Link to={'/todo-list'}>To-Do-List</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
    </ul>
  )
}

export default Links