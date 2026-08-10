import { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./weatherComponents/Forecast.jsx";

function WeatherForecast() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const res = await axios.get(
          "https://api.weatherapi.com/v1/current.json",
          {
            params: {
              key: import.meta.env.VITE_WEATHER_API_KEY,
              q: city,
              aqi: "no",
            },
          },
        );

        console.log("Weather Response =", res.data);
        setWeather(res.data);
      } catch (e) {
        console.log(
          "Error occurred while fetching weather data",
          e.response?.data || e,
        );
      } finally {
        setLoading(false);
      }
    };

    getWeather("Pune");
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-xl">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500"></div>

          <p className="font-medium text-slate-600">Fetching weather data...</p>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-lg font-semibold text-red-500">
          Unable to fetch weather data.
        </p>
      </div>
    );
  }

  const { location, current } = weather;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="font-semibold uppercase tracking-wider text-emerald-600">
            Live Weather
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Weather Dashboard
          </h1>

          <p className="mt-3 text-slate-500">
            Current weather conditions for your farm location.
          </p>
        </div>

        {/* Main Weather Card */}
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* Location */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-emerald-100">
                Current Location
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                {location.name}
              </h2>

              <p className="mt-2 text-emerald-100">
                {location.region}, {location.country}
              </p>

              <p className="mt-6 text-sm text-emerald-100">
                Updated: {current.last_updated}
              </p>
            </div>

            {/* Temperature */}
            <div className="text-center md:text-right">
              <img
                src={`https:${current.condition.icon}`}
                alt={current.condition.text}
                className="mx-auto h-24 w-24 md:ml-auto"
              />

              <div className="text-6xl font-extrabold">{current.temp_c}°C</div>

              <p className="mt-2 text-lg font-medium text-emerald-50">
                {current.condition.text}
              </p>

              <p className="mt-2 text-sm text-emerald-100">
                Feels like {current.feelslike_c}°C
              </p>
            </div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Weather Details
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Humidity */}
            <div className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                💧
              </div>

              <p className="text-sm font-medium text-slate-500">Humidity</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.humidity}%
              </h3>

              <p className="mt-2 text-sm text-slate-400">Moisture in air</p>
            </div>

            {/* Wind */}
            <div className="group rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                💨
              </div>

              <p className="text-sm font-medium text-slate-500">Wind Speed</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.wind_kph}
                <span className="ml-1 text-base font-medium">km/h</span>
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Direction: {current.wind_dir}
              </p>
            </div>

            {/* UV */}
            <div className="group rounded-3xl border border-amber-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                ☀️
              </div>

              <p className="text-sm font-medium text-slate-500">UV Index</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.uv}
              </h3>

              <p className="mt-2 text-sm text-slate-400">Solar intensity</p>
            </div>

            {/* Visibility */}
            <div className="group rounded-3xl border border-purple-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                👁️
              </div>

              <p className="text-sm font-medium text-slate-500">Visibility</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.vis_km}
                <span className="ml-1 text-base font-medium">km</span>
              </h3>

              <p className="mt-2 text-sm text-slate-400">Current visibility</p>
            </div>
          </div>
        </div>

        {/* Farming Conditions */}
        <div className="mt-10 rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Farming Insight
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-800">
              Current Conditions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm text-slate-500">Temperature</p>

              <p className="mt-2 text-xl font-bold text-emerald-700">
                {current.temp_c}°C
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-5">
              <p className="text-sm text-slate-500">Humidity</p>

              <p className="mt-2 text-xl font-bold text-sky-700">
                {current.humidity}%
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="text-sm text-slate-500">Rainfall</p>

              <p className="mt-2 text-xl font-bold text-amber-700">
                {current.precip_mm} mm
              </p>
            </div>
          </div>
        </div>

        <Forecast />
      </div>
    </div>
  );
}

export default WeatherForecast;
