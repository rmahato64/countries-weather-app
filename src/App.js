import React,{Component, useState} from 'react'
import DisplayCountries from './component/displayCountries'
import './style.css'


class App extends Component {
  state = {
    countryName:'',
    allCountries:[],
    countryList:[],
    resultedCountries:''
    
}
  componentDidMount(){
  const URL='https://restcountries.eu/rest/v2/all'
  fetch(URL)
    .then(response =>
    response.json()).then(data=>{
      const countries=[]
      this.setState({allCountries:data})
      this.setState({countryList:data})
      //console.log(data)
    })
  }

  handleChange =e=>{
      
    const countryName=e.target.value

      let result =  this.state.allCountries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
      this.setState({countryList:result,countryName:countryName})
      
  }
  render(){
    const {countryName,countryList,allCountries} = this.state
    return(
      <div>
        <DisplayCountries countries={countryList} inputValue={countryName} handle={this.handleChange} />
      </div>
    )
  }
}

export default App;
