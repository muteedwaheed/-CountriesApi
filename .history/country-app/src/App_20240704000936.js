import React, { useEffect, useState } from 'react'
import Countries from './Components/Countries'
const url = "https://restcountries.com/v3.1/all"
const App = () => {
  const [name,setName] = useState([]);
  useEffect(
  return (
    <div>
      <Countries/>
    </div>
  )
}

export default App
