import React, { useEffect, useState } from 'react';
import { IoCloudyNightOutline } from "react-icons/io5";
function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data here
    const apikey ='e334cead49185634c998f85e4799e0a1'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Coimbatore,IN&appid=${apikey}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);  
  return (
    <div className="weather-widget">
      {weather ? (
        <div className='text-white flex flex-col text-center justify-center items-center  space-y-2'>
        <IoCloudyNightOutline size={60}/>
        <p className='text-lg'>{Math.round((weather.main.temp - 273.15) * 10) / 10}° C</p>
        <p className='uppercase text-sm font-semibold'>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
