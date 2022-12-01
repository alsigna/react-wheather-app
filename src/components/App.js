import React from "react";
import axios from "axios";

import Header from "./Header"
import City from "./City";
import CurrentWeather from "./CurrentWeather"
import ForecastWeather from "./ForecastWeather"
import { WEATHER_API_URL, WEATHER_API_KEY } from "./config";

import "../styles/App.css";


function App() {
    const [currentWeather, setCurrentWeather] = React.useState(null);
    const [forecastWeather, setForecastWeather] = React.useState(null);
    const onCityChange = (cityId) => {
        console.log("App.js:onCityChange:" + cityId)
        const currentWeatherUrl = `${WEATHER_API_URL}/weather?id=${cityId}&appid=${WEATHER_API_KEY}&units=metric`
        const forecastWeatherUrl = `${WEATHER_API_URL}/forecast?id=${cityId}&appid=${WEATHER_API_KEY}&units=metric`
        axios.get(currentWeatherUrl)
        .then(response => {
            console.log(response)
            setCurrentWeather({ ...response.data });
        })
        .catch(console.log)
        axios.get(forecastWeatherUrl)
        .then(response => {
            console.log(response)
            setForecastWeather({ ...response.data });
        })
        .catch(console.log)
    };

    return (
        <>
            <Header/>
            <City onCityChange={onCityChange}/>
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecastWeather && <ForecastWeather data={forecastWeather} />}
        </>
    );
}

export default App;