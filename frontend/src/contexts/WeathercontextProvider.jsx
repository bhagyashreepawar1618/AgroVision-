import React from "react";
import { useState } from "react";
import WeatherContext from "./weatherContext.js";

const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [crop, setCrop] = useState(null);

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, location, setLocation, crop, setCrop }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
