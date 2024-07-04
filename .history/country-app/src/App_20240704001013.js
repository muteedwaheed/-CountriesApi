import React, { useEffect, useState } from 'react'
import Countries from './Components/Countries'

const App = () => {
  const [name,setName] = useState([]);
  useEffect(()=>{

  },[])
  return (
    <div>
      <Countries/>
    </div>
  )
}

export default App
