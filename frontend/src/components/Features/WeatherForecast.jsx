import { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./weatherComponents/Forecast.jsx";

function WeatherForecast() {
  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState("Pune");
  const [searchCity, setSearchCity] = useState("Pune");

  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);

  const [error, setError] = useState("");
  const [aiSuggestion, setAiSuggestion] = useState("");

  // ==============================
  // CURRENT WEATHER
  // ==============================

  const getWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: cityName,
            aqi: "no",
          },
        },
      );

      console.log("Weather Response =", res.data);

      setWeather(res.data);
    } catch (e) {
      console.log("Weather Error =", e.response?.data || e);

      setWeather(null);

      setError(
        e.response?.data?.error?.message || "Unable to fetch weather data.",
      );
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // SEARCH CITY
  // ==============================

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedCity = searchCity.trim();

    if (!trimmedCity) return;

    setCity(trimmedCity);
    getWeather(trimmedCity);
  };

  // ==============================
  // INITIAL WEATHER
  // ==============================

  useEffect(() => {
    getWeather("Pune");
  }, []);

  // ==============================
  // AI WEATHER SUGGESTION
  // ==============================

  useEffect(() => {
    if (!weather) return;

    const getAiSuggestion = async () => {
      try {
        setAiLoading(true);
        setAiSuggestion("");

        const token = localStorage.getItem("accessToken");

        if (!token) {
          console.log("Access token not found");
          return;
        }

        const { location, current } = weather;

        // Weather data that will be sent to backend
        const weatherData = {
          location: {
            name: location.name,
            region: location.region,
            country: location.country,
            latitude: location.lat,
            longitude: location.lon,
          },

          weather: {
            temperature: current.temp_c,
            feelsLike: current.feelslike_c,
            condition: current.condition.text,
            humidity: current.humidity,
            windSpeed: current.wind_kph,
            windDirection: current.wind_dir,
            pressure: current.pressure_mb,
            precipitation: current.precip_mm,
            visibility: current.vis_km,
            uvIndex: current.uv,
            cloud: current.cloud,
          },
        };

        console.log("Weather data sent to AI =", weatherData);

        const res = await axios.post(
          "http://localhost:5000/api/v1/ai/weather-suggestion",
          weatherData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("AI Weather Response =", res.data.data.reasoning);

        /*
          Depending on your ApiResponse structure,
          change this if required.
        */

        setAiSuggestion(
          res.data?.data.reasoning ||
            res.data?.message ||
            "AI suggestion generated successfully.",
        );
      } catch (e) {
        console.log(
          "Error occurred while getting AI suggestion =",
          e.response?.data || e,
        );

        setAiSuggestion("Unable to generate AI farming suggestions right now.");
      } finally {
        setAiLoading(false);
      }
    };

    getAiSuggestion();
  }, [weather]);

  // ==============================
  // LOADING
  // ==============================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="rounded-3xl bg-white px-10 py-8 text-center shadow-xl">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500"></div>

          <p className="mt-5 font-medium text-slate-600">
            Fetching weather data...
          </p>
        </div>
      </div>
    );
  }

  // ==============================
  // ERROR
  // ==============================

  if (error && !weather) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-xl">
          <div className="text-5xl">⚠️</div>

          <h2 className="mt-4 text-xl font-bold text-slate-800">
            Weather Unavailable
          </h2>

          <p className="mt-2 text-sm text-red-500">{error}</p>

          <button
            onClick={() => getWeather(city)}
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const { location, current } = weather;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-10 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div className="mb-8">
          <p className="font-semibold uppercase tracking-wider text-emerald-600">
            🌿 Live Weather
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Weather Dashboard
          </h1>

          <p className="mt-3 text-slate-500">
            Monitor weather conditions and get AI-powered farming insights.
          </p>
        </div>

        {/* ================================= */}
        {/* SEARCH BAR */}
        {/* ================================= */}

        <form
          onSubmit={handleSearch}
          className="mb-10 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg sm:flex-row"
        >
          <div className="flex flex-1 items-center rounded-2xl bg-slate-50 px-4">
            <span className="mr-3 text-xl">📍</span>

            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Search city..."
              className="w-full bg-transparent py-3 text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 px-7 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02]"
          >
            🔍 Search Weather
          </button>
        </form>

        {/* ================================= */}
        {/* MAIN WEATHER CARD */}
        {/* ================================= */}

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* LOCATION */}

            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-emerald-100">
                Current Location
              </p>

              <h2 className="mt-2 text-4xl font-bold">{location.name}</h2>

              <p className="mt-2 text-emerald-100">
                {location.region}, {location.country}
              </p>

              <div className="mt-6 space-y-1 text-sm text-emerald-100">
                <p>
                  📍 {location.lat}, {location.lon}
                </p>

                <p>🕐 Updated: {current.last_updated}</p>
              </div>
            </div>

            {/* TEMPERATURE */}

            <div className="text-center md:text-right">
              <img
                src={`https:${current.condition.icon}`}
                alt={current.condition.text}
                className="mx-auto h-24 w-24 md:ml-auto"
              />

              <div className="text-6xl font-extrabold">{current.temp_c}°C</div>

              <p className="mt-2 text-lg font-medium">
                {current.condition.text}
              </p>

              <p className="mt-2 text-sm text-emerald-100">
                Feels like {current.feelslike_c}°C
              </p>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* WEATHER DETAILS */}
        {/* ================================= */}

        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Weather Details
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* HUMIDITY */}

            <div className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                💧
              </div>

              <p className="text-sm text-slate-500">Humidity</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.humidity}%
              </h3>

              <p className="mt-2 text-sm text-slate-400">Moisture in air</p>
            </div>

            {/* WIND */}

            <div className="group rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                💨
              </div>

              <p className="text-sm text-slate-500">Wind Speed</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.wind_kph}
                <span className="ml-1 text-base">km/h</span>
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Direction: {current.wind_dir}
              </p>
            </div>

            {/* UV */}

            <div className="group rounded-3xl border border-amber-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                ☀️
              </div>

              <p className="text-sm text-slate-500">UV Index</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.uv}
              </h3>

              <p className="mt-2 text-sm text-slate-400">Solar intensity</p>
            </div>

            {/* VISIBILITY */}

            <div className="group rounded-3xl border border-purple-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                👁️
              </div>

              <p className="text-sm text-slate-500">Visibility</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {current.vis_km}
                <span className="ml-1 text-base">km</span>
              </h3>

              <p className="mt-2 text-sm text-slate-400">Current visibility</p>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* FARMING CONDITIONS */}
        {/* ================================= */}

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

        {/* ================================= */}
        {/* 7 DAY FORECAST */}
        {/* ================================= */}

        <Forecast city={city} />

        {/* ================================= */}
        {/* AI FARMING SUGGESTION */}
        {/* ================================= */}

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 p-8 text-white shadow-2xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
              🤖
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                AI Farming Assistant
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Smart Weather-Based Recommendations
              </h2>

              <p className="mt-2 text-sm text-emerald-100">
                AI analyzes the current weather conditions and provides farming
                recommendations.
              </p>

              {/* AI LOADING */}

              {aiLoading && (
                <div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>

                    <p className="text-sm text-emerald-100">
                      AI is analyzing weather conditions...
                    </p>
                  </div>
                </div>
              )}

              {/* AI RESPONSE */}

              {!aiLoading && aiSuggestion && (
                <div className="mt-6 rounded-2xl bg-white/10 p-6 leading-7 text-emerald-50 backdrop-blur">
                  <p className="whitespace-pre-line">{aiSuggestion}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
