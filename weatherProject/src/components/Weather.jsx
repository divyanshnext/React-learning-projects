import React, { useState } from 'react'

function Weather() {
    const [city,setCity] = useState();
    
    const handleCityChange = () => {
        setCity(event.target.value)
    }

  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter city name' value={city} onChange={handleCityChange}/>
        <button>getWeather</button>
    </div>
  )
}

export default Weather