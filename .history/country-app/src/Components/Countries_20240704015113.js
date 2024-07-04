import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file for custom styles

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {countries.map((country) => {
          const { name: { common: name }, population, region, flags, capital } = country;
          return (
            <div className="col-md-4 mb-4" key={name}>
              <div className="card h-100 country-card">
                <img src={flags.png} className="card-img-top" alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text"><strong>Population:</strong> {population.toLocaleString()}</p>
                  <p className="card-text"><strong>Region:</strong> {region}</p>
                  <p className="card-text"><strong>Capital:</strong> {capital}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
