import React from 'react'
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
            <h1>Total Number of Countries {props.countries.length}</h1>
            <input type='text'  value={props.inputValue} onChange={props.handle} />
            </div>
            <div className='country-div' >{countryDisplay}</div>
        </div>
    )
}

export default DisplayCountries