import React, { useEffect, useState } from 'react'
const url = "https://restcountries.com/v3.1/all"
const Countries = () => {
    const [name,setName] = useState([]);
    const fetchCountryData = async()=>{
        const response = await fetch(url)
        const name = await response.json()
        setName(name);
        console.log(name)
    }
    useEffect(()=>{
       fetchCountryData
    },[])
  return (
    <div>
      <h1>hy countries</h1>
    </div>
  )
}

export default Countries
