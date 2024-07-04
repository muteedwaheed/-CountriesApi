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
        const{name,numericCode,} = country
      })}
    </div>
  )
}

export default Countries
