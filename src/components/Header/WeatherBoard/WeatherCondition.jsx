import React, { useContext } from 'react';
import tempMax from "../../../assets/icons/temp-max.svg"
import cloud from "../../../assets/icons/cloud.svg"
import humidityIcon from "../../../assets/icons/humidity.svg"
import tempMin from "../../../assets/icons/temp-min.svg"
import snow from "../../../assets/icons/snow.svg"
import sunny from "../../../assets/icons/sunny.svg"
import windIcon from "../../../assets/icons/wind.svg"
import { WeatherContext } from '../../../context';

const WeatherCondition = () => {
    const { weatherData } = useContext(WeatherContext)
    const {
        location,
        climate,
        temperature,
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        time,
        longitude,
        latitude,
    } = weatherData
    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(maxTemperature)}°</p>
                        <img src={tempMax} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(minTemperature)}°</p>
                        <img src={tempMin} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humidity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={humidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}%</p>
                        <img src={cloud} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={windIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WeatherCondition;