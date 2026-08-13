import { useEffect, useState } from "react";
import axios from "axios";

function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getForecast = async (cityName) => {
    if (!cityName) return;

    try {
      setLoading(true);
      setError("");
      setForecast([]);

      const res = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: cityName,
            days: 7,
            aqi: "no",
            alerts: "no",
          },
        },
      );

      console.log("Forecast Response =", res.data);

      setForecast(res.data.forecast.forecastday);
      setLocation(res.data.location);
    } catch (e) {
      console.log("Error while fetching forecast =", e.response?.data || e);

      setError(
        e.response?.data?.error?.message ||
          "Unable to fetch forecast. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch whenever city changes
  useEffect(() => {
    getForecast(city);
  }, [city]);

  return (
    <section className="mt-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                🌦️ Weather Forecast
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
                7-Day Forecast
              </h2>

              <p className="mt-2 text-slate-500">
                Upcoming weather conditions for{" "}
                <span className="font-semibold text-emerald-600">
                  {location?.name || city}
                </span>
              </p>
            </div>

            {/* Location Badge */}
            {location && (
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Location
                </p>

                <p className="mt-1 font-semibold text-slate-700">
                  📍 {location.name}, {location.region}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500"></div>

              <p className="mt-4 font-medium text-slate-500">
                Loading 7-day forecast...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
            <div className="text-4xl">⚠️</div>

            <h3 className="mt-3 text-lg font-bold text-red-700">
              Forecast Unavailable
            </h3>

            <p className="mt-2 text-sm text-red-500">{error}</p>

            <button
              onClick={() => getForecast(city)}
              className="mt-5 rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Forecast Cards */}
        {!loading && !error && forecast.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {forecast.map((day, index) => {
              const date = new Date(day.date);

              return (
                <div
                  key={day.date}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Card Header */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 p-6 text-white">
                    {/* Today Badge */}
                    {index === 0 && (
                      <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-md">
                        TODAY
                      </span>
                    )}

                    <p className="text-sm font-medium text-white/80">
                      {date.toLocaleDateString("en-IN", {
                        weekday: "long",
                      })}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {date.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Weather Icon + Temperature */}
                    <div className="flex items-center justify-between">
                      <img
                        src={`https:${day.day.condition.icon}`}
                        alt={day.day.condition.text}
                        className="h-20 w-20 transition duration-300 group-hover:scale-110"
                      />

                      <div className="text-right">
                        <p className="text-4xl font-extrabold text-slate-800">
                          {Math.round(day.day.avgtemp_c)}°
                        </p>

                        <p className="text-xs font-medium text-slate-400">
                          Average
                        </p>
                      </div>
                    </div>

                    {/* Condition */}
                    <div className="mt-5 rounded-2xl bg-sky-50 px-4 py-3 text-center">
                      <p className="font-semibold text-sky-700">
                        {day.day.condition.text}
                      </p>
                    </div>

                    {/* Temperature */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-orange-50 p-4">
                        <p className="text-xs text-slate-400">🌡️ Maximum</p>

                        <p className="mt-1 text-lg font-bold text-orange-600">
                          {Math.round(day.day.maxtemp_c)}°C
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 p-4">
                        <p className="text-xs text-slate-400">❄️ Minimum</p>

                        <p className="mt-1 text-lg font-bold text-blue-600">
                          {Math.round(day.day.mintemp_c)}°C
                        </p>
                      </div>

                      {/* Humidity */}
                      <div className="rounded-2xl bg-cyan-50 p-4">
                        <p className="text-xs text-slate-400">💧 Humidity</p>

                        <p className="mt-1 text-lg font-bold text-cyan-600">
                          {Math.round(day.day.avghumidity)}%
                        </p>
                      </div>

                      {/* Rain */}
                      <div className="rounded-2xl bg-sky-50 p-4">
                        <p className="text-xs text-slate-400">🌧️ Rain Chance</p>

                        <p className="mt-1 text-lg font-bold text-sky-600">
                          {day.day.daily_chance_of_rain}%
                        </p>
                      </div>
                    </div>

                    {/* Wind */}
                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3">
                      <div>
                        <p className="text-xs text-emerald-600">Wind Speed</p>

                        <p className="mt-1 font-bold text-emerald-800">
                          💨 {Math.round(day.day.maxwind_kph)} km/h
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-emerald-600">Rain</p>

                        <p className="mt-1 font-bold text-emerald-800">
                          {day.day.totalprecip_mm} mm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Farming Planning Note */}
        {!loading && !error && forecast.length > 0 && (
          <div className="mt-8 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-sky-50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                🌱
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Plan Your Farming Activities
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Use upcoming rainfall, temperature, humidity and wind
                  conditions to plan irrigation, spraying, harvesting and other
                  farm activities.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Forecast;
