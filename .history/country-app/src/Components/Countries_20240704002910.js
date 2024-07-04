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
        const{name,numericCode,population,region,flag,capital} = country
        return <article key={numericCode}>
            <div>
                <img src={flag} alt={name} />
                <h3>population:<span></span></h3>
                <h3>{region}</h3>
                <h3>{capital}</h3>
            </div>
        </article>
      })}
    </div>
  )
}

export default Countries
