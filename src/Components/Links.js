import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../Contexts/ThemeContext'
import { CartContext } from '../Contexts/CartContext'

function Links() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

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
        <li><Link to={'/cart'}>Add to cart</Link></li>  
      </ul>
      <div className='d-flex gap-4'>
        <span><FontAwesomeIcon className='nav-icon' icon={faCartShopping} /><span class="badge cart-batch">{cart.length}</span></span>
        <span><FontAwesomeIcon className='nav-icon' style={{color: theme? 'white':'yellow'}} onClick={toggleTheme} icon={theme ? faMoon:faSun}/></span>
      </div>
    </div>
  )
}

export default Links