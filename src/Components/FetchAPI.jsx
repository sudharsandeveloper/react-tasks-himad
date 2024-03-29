import React, { useState, useEffect } from 'react';

function FetchAPI() {

  const [countries, setCountries] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
    };

    fetchData();
  }, []);

  return (

    <table class="container table mt-5 mb-5">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Country Name</th>
                <th scope="col">Region</th>
                <th scope="col">Capital</th>
                <th scope="col">Time Zone</th>
                <th scope="col">Flag</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{country.name.common}</td>
                    <td>{country.region}</td>
                    <td>{country.capital}</td>
                    <td>{country.timezones[0]}</td>
                    <td><img style={{width:'50px'}} src={country.flags.png} alt="img"/></td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default FetchAPI;
