import React from 'react';
import '../style.css'
const Weather = (props) => {
  const weatherResult = props.filter.map(country => {
    return (
      <div>
        <h1>{country.lat}</h1>
        <h1>{country.temperature}</h1>
        <img src={country.weatherIcons} alt='weatherImage'/>
      </div>
    );
  });
  return(
    <div className='weather-div'>{weatherResult}</div>
  ) 
};
export default Weather;