import React, { useEffect, useState } from 'react'
const url = "https://restcountries.com/v3.1/all"
const Countries = () => {
    const [name,setName] = useState([]);
    const fetchCountryData = async()=>{
        const response = await fetch(url)
        const name = await response.json()
        setName(name)
        console.log(name)
    }
    useEffect(()=>{
       fetchCountryData()
    },[])
  return (
    <div>
      {name.map((country)=>{
        const{name:{common:name},common,numericCode,population,region,flags,capital} = country
        return() <article key={numericCode}>
        <div className="col-md-4 mb-4" key={name}>
              <div className="card h-100 country-card">
                <img src={flags.png} className="card-img-top" alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text"><strong>Population:</strong> {population.toLocaleString()}</p>
                  <p className="card-text"><strong>Region:</strong> {region}</p>
                  <p className="card-text"><strong>Capital:</strong> {capital}</p>
                </div>
        </article>
      })}
    </div>
  )
}

export default Countries
