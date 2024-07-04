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
    <div className="container">
    <div className="row">
        {countries.map((country) => {
            const { name: { common: name }, cca3: numericCode, population, region, flags, capital } = country;
            return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={numericCode}>
                    <article className="card bg-dark text-white">
                        <img src={flags.png} className="card-img-top" alt={`Flag of ${name}`} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Common: <span>{name}</span></p>
                            <p className="card-text">Population: <span>{population}</span></p>
                            <p className="card-text">Region: <span>{region}</span></p>
                            <p className="card-text">Capital: <span>{capital}</span></p>
                        </div>
                    </article>
                </div>
            );
        })}
    </div>
</div>
);
};
  )
}

export default Countries
