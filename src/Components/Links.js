import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../Contexts/ThemeContext'

function Links() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='top-nav d-flex justify-content-between align-items-center'>
      <ul className='header-nav'>
        {/* <li><Link to={'/'}>Home</Link></li> */}
        {/* <li><Link to={'/about'}>About</Link></li> */}
        {/* <li><Link to={'/todo'}>To-Do</Link></li> */}
        <li><Link to={'/todo-list'}>To-Do-List</Link></li>
        <li><Link to={'/replica'}>Replica</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/country'}>Country Details</Link></li>
      </ul>
      <div>
        <span><FontAwesomeIcon className='nav-icon' style={{color: theme? 'white':'yellow'}} onClick={toggleTheme} icon={theme ? faMoon:faSun}/></span>
      </div>
    </div>
  )
}

export default Links