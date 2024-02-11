import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faMap, faPencil, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt, faHeart as heartReagular } from '@fortawesome/free-regular-svg-icons'

function Replica() {

    const [countries, setCountries] = useState([]);
    const [Like, setLike] = useState(false)

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
            ...currentLikes, [id]: !currentLikes[id],
        }));
    };

  return (
    <div className="container">
            <div className="row">
        {countries.map((country) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 d-flex">
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
                                key={country.ccn3}
                                onClick={() => likeFunction(country.ccn3)}
                                icon={Like[country.ccn3] ? faHeart:heartReagular}
                                style={{color: 'red'}}
                            />
                        </span>
                        <span className='btn-border'></span>
                        <span><FontAwesomeIcon className='btn-cons' icon={faPencil} /></span>
                        <span className='btn-border'></span>
                        <span><FontAwesomeIcon className='btn-cons' icon={faTrashAlt} onClick={() => deleteCountry(country.ccn3)} /></span>
                    </div>
                </div>
            </div>
            ))}

            </div>
    </div>
  )
}

export default Replica