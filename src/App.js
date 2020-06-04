import React,{Component, useState} from 'react'
import DisplayCountries from './component/displayCountries'
import Weather from './component/weather'
import './style.css'


class App extends Component {
  state = {
    allCountries:[],
    countryList:[],
    resultedCountries:'',
    weather:[]
    
}
  componentDidMount(){
  const URL='https://restcountries.eu/rest/v2/all'
  fetch(URL)
    .then(response =>
    response.json()).then(data=>{
      const countries=[]
      for(const element of data) {
        const {name,capital,population,languages,flag} = element
        countries.push({name,capital,population,languages,flag})
        }
      this.setState({allCountries:countries})
      this.setState({countryList:countries})
      //console.log(data)
    })
  }
  weatherChange=()=>{
    if (this.state.countryList.length === 1) {
    const cityName = this.state.countryList.map((city) => city.capital);
    const URL = `http://api.weatherstack.com/current?access_key=ddd9715dc3be6235ab0ec95a6b847177&query=${cityName.toString()}`;
    fetch(URL)
    .then(response =>response.json()).then(data=>{
      console.log(data)
      this.setState({
        weather:[
          {
            lat:data.location.lat,
            temperature:data.current.temperature,
            weatherIcons:data.current.weather_icons
          },
        ]
      })
    })
  }
}
  handleChange =(e) => {
    const{value} = e.target
    const countryList = []
    this.setState({resultedCountries : value})
    for(const country of this.state.allCountries) {
      const {name,capital,languages} = country
      const lowerCaseName = name.toLowerCase()
      const lowerCaseCapital = capital.toLowerCase()
      const lowerCaseLang = languages.toString().toLowerCase()  
      const unserInput = value.toLowerCase()
      if(lowerCaseName.includes(unserInput) || lowerCaseCapital.includes(unserInput) || lowerCaseLang.includes(unserInput)) {
        countryList.push(country)
  }
  }
 
  this.setState({countryList})
  this.weatherChange()
  }
  render(){
    const {countryList,resultedCountries} = this.state
    return(
      <div>
        <DisplayCountries countries={countryList} TotalCountries={this.state.allCountries} countriesdisplayed={countryList} inputValue={resultedCountries} handle={this.handleChange}/>
        <Weather filter={this.state.weather} />
      </div>
    )
  }
}

export default App;
