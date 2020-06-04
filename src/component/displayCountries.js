import React from 'react'
import Weather from './weather'
import '../style.css'

const DisplayCountries=(props)=>{
    const countryDisplay=props.countries.map(country=>(
    <div>
        <ul className='list' >
            <img src={country.flag} alt='countryimage'/>
            <li>{country.name}</li>
            <li>{country.capital}</li>
        </ul>   
    </div>))
    return(
        <div>
        <div className="display-countries" >
            <h1>Total Number of Countries: {props.TotalCountries.length}</h1>
            {props.countriesdisplayed.length == 250 ? ' ' :<h3> {props.countriesdisplayed.length} Countries matches your search.</h3>}
            <input type='text'  value={props.inputValue} onChange={props.handle} className='user-input' placeholder="Enter countries/capital/language"/>
            </div>
            <div className='country-div' >
                {countryDisplay}
            </div>
        </div>
    )
}
export default DisplayCountries