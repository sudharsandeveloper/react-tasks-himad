import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faMap, faPencil, faUsers, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Replica() {
    const [countries, setCountries] = useState([]);
    const [Like, setLike] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const deleteCountry = (id) => {
        setCountries(countries.filter((country) => country.ccn3 !== id));
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        };
  
        fetchData();
    }, []);

    const likeFunction = (id) => {
        setLike((currentLikes) => ({
            ...currentLikes, 
            [id]: !currentLikes[id],
        }));
    };

    return (
        <div className="container">
            <div className="row">
                {countries.map((country) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex" key={country.ccn3}>
                        <div className="profile-card">
                            <div className="img-sec">
                                <img className='replica-img' src={country.flags.png} alt="" />
                            </div>
                            <div className="detail-sec">
                                <p>{country.name.common}</p>
                                <p className='details-icon'><FontAwesomeIcon icon={faHome} style={{marginRight: '10px'}} />{country.capital}</p>
                                <p className='details-icon'><FontAwesomeIcon icon={faMap} style={{marginRight: '10px'}} />{country.region}</p>
                                <p className='details-icon'><FontAwesomeIcon icon={faUsers} style={{marginRight: '10px'}} />{country.population}</p>
                            </div>
                            <div className="menu-btns d-flex justify-content-evenly">
                                <span>
                                    <FontAwesomeIcon
                                        className='btn-cons'
                                        onClick={() => likeFunction(country.ccn3)}
                                        icon={Like[country.ccn3] ? faHeart : heartRegular}
                                        style={{color: 'red'}}
                                    />
                                </span>
                                <span className='btn-border'></span>
                                <span><FontAwesomeIcon className='btn-cons' onClick={() => setModalShow(true)} icon={faPencil} /></span>
                                <span className='btn-border'></span>
                                <span><FontAwesomeIcon className='btn-cons' icon={faTrashAlt} onClick={() => deleteCountry(country.ccn3)} /></span>
                            </div>
                        </div>
                    </div>
                ))}
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

export default Replica;
