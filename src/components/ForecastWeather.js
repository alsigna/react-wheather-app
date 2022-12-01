import React from "react";
import Moment from "react-moment";

import "../styles/ForecastWeather.css";


const ForecastWeather = ({ data }) => {
    console.log("ForecastWeather.js:ForecastWeather:" + data)
    console.log(data)

    const currentDay = new Date().getDay();
    let dayList = [currentDay]
    let indxList = []

    data.list.map((item, indx) => {
        let nextDay = new Date(item.dt * 1000).getDay();
        if (!dayList.includes(nextDay)) {
            dayList.push(nextDay);
            indxList.push(indx);
        }
    })
    let dataList = indxList.map(i => data.list[i])

    return (
        <>
        <div className="title">5-Day Forecast</div>
        {
            dataList.map((item, indx) => (
                <div key={indx}>
                    <div className="daily-item">
                        <img src={`icons/${item.weather[0].icon}.png`} className="icon-small"/>
                        <Moment className="forecast-day" unix format="DD MMMM">{item.dt}</Moment>
                        <label className="forecast-temperature">{Math.round(item.main.temp)}°C</label>
                    </div>                    
                </div>
            ))
        }
        </>
    );
};

export default ForecastWeather;
