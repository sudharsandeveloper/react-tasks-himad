import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../Contexts/ThemeContext';
import { CartContext } from '../Contexts/CartContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Links() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='top-nav d-flex justify-content-between align-items-center'>
      <ul className='header-nav'>
        <li><Link to={'/todo-list'}>To-Do-List</Link></li>
        <li><Link to={'/replica'}>Replica</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/country'}>Country Details</Link></li>
        <li><Link to={'/todo-reducer'}>To-Do Reducer</Link></li> 
        <li><Link to={'/cart'}>Add to cart</Link></li> 
        <li><Link to={'/todo-redux'}>To-Do Redux</Link></li> 
      </ul>
      <div className='d-flex gap-4'>
        <span onClick={() => setModalShow(true)}>
          <FontAwesomeIcon className='nav-icon' icon={faCartShopping} />
          <span className="badge cart-batch">{cart.length}</span>
        </span>
        <span onClick={toggleTheme} style={{ cursor: 'pointer' }}> 
          <FontAwesomeIcon className='nav-icon' style={{color: theme ? 'white' : 'yellow'}} icon={theme ? faMoon : faSun} />
        </span>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Links;
