import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CityInfoComponent from './modules/CityInfoComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';

const API_KEY = 'fb807b65214a45c69a14de085218545c'

const Container = styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family: 'Work Sans', sans-serif;
`;

const CityComponent = styled.div`
display:flex;
flex-direction:column;
`;

const WeatherComponent = styled.div`
display:flex;
flex-direction:column;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    updateWeather(response.data);
  }

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? (
        <WeatherInfoComponent weather={weather}/>
      ) : (
        <CityInfoComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {/* <WeatherInfoComponent /> */}

    </Container>
  );
}

export default App;
