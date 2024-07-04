import React, { useEffect, useState } from 'react'
const url = "https://restcountries.com/v3.1/all"
const Countries = () => {
    const [name,setName] = useState([]);
    useEffect(()=>{
        const fetchCountryData = async()=>{
            const response = await fetch(url)
            const name = await response.json()
            setName
        }
    },[])
  return (
    <div>
      <h1>hy countries</h1>
    </div>
  )
}

export default Countries
