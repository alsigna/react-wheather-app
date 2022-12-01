import React from "react";
import Moment from "react-moment";

import "../styles/CurrentWeather.css";

const CurrentWeather = ({ data }) => {
    console.log("CurrentWeather.js:CurrentWeather:" + data)
    console.log(data)
    console.log(data.weather[0].icon)
    const date = <Moment unix format="DD MMMM LT">{data.dt}</Moment>

    return (
        <div className="current-weather">
            <div>
                <p className="date">{date}</p>
            </div>
            <hr className="sep"></hr>
            <div className="header">
                <div>
                    <p className="city-name">{data.name}, {data.sys.country}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className="body">
                <p className="current-weather-temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                <div className="details-row">
                    <span className="details-label">Feels like</span>
                    <span className="details-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Wind</span>
                    <span className="details-value">{data.wind.speed}m/s</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Humidity</span>
                    <span className="details-value">{data.main.humidity}%</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Pressure</span>
                    <span className="details-value">{data.main.pressure}hPa</span>
                </div>
            </div>
        </div>
      </div>
    );
};

export default CurrentWeather;
