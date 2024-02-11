import { useState } from "react";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching weather data ",
      });
      //   todo make the fetch data
      const response = await fetch(``);
      //   check if the response was okay or not
      if (!response.ok) {
        const errorMessage = `Fetching data Failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
    } catch (err) {
      //   console.log(err);
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: " ",
      });
    }
  };
}
