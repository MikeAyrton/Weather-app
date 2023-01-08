import React from 'react'
import styled from 'styled-components';

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`

const ChooseCityLabel = styled.span`
color: #000;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color: #000;
font-weight: bold;
margin: 20px auto;
& input {
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  font-weight: bold;
}
& button {
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
}
`

function CityInfoCompponent(props) {
  return (
    <>
      <WeatherLogo src='/icons/perfect-day.svg' />
      <ChooseCityLabel>Find Weather Of Your City</ChooseCityLabel>
      <SearchBox onSubmit={props.fetchWeather} >
          <input placeholder='City' onChange={(e) => props.updateCity(e.target.value)} />
          <button type='submit' >Search</button>
      </SearchBox>
    </>
  )
}

export default CityInfoCompponent;