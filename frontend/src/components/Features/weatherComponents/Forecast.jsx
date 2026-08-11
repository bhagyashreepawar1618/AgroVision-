import { useEffect, useState } from "react";
import axios from "axios";

function Forecast() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Pune");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getForecast = async (location) => {
    try {
      setLoading(true);
      setError("");

      const url = `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${location}&days=7&aqi=no&alerts=no`;

      const res = await axios.get(url);

      console.log("Forecast Response =", res.data);

      setForecast(res.data.forecast.forecastday);
    } catch (e) {
      console.log("Error while fetching forecast =", e);
      setError("Unable to fetch forecast. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getForecast(city);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            🌦️ Weather Forecast
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-800 md:text-5xl">
            7-Day Weather Forecast
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Plan irrigation, harvesting and other farming activities using
            upcoming weather conditions.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-12 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />

          <button
            onClick={() => getForecast(city)}
            className="rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500"></div>

              <p className="mt-4 font-medium text-slate-500">
                Loading forecast...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Forecast Cards */}
        {!loading && !error && forecast.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {forecast.map((day) => (
              <div
                key={day.date}
                className="group overflow-hidden rounded-3xl border border-white bg-white/80 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Top */}
                <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-6 text-white">
                  <p className="text-sm font-medium text-white/80">
                    {new Date(day.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                    })}
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    {new Date(day.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </h2>
                </div>

                {/* Weather */}
                <div className="p-6">
                  {/* Icon */}
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

                      <p className="text-sm text-slate-500">Avg Temperature</p>
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="mt-5 rounded-2xl bg-sky-50 p-4 text-center">
                    <p className="font-semibold text-sky-700">
                      {day.day.condition.text}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-400">🌡️ Max</p>

                      <p className="mt-1 font-bold text-slate-700">
                        {Math.round(day.day.maxtemp_c)}°C
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-400">❄️ Min</p>

                      <p className="mt-1 font-bold text-slate-700">
                        {Math.round(day.day.mintemp_c)}°C
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-400">💧 Humidity</p>

                      <p className="mt-1 font-bold text-slate-700">
                        {day.day.avghumidity}%
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-400">🌧️ Rain</p>

                      <p className="mt-1 font-bold text-slate-700">
                        {day.day.daily_chance_of_rain}%
                      </p>
                    </div>
                  </div>

                  {/* Wind */}
                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3">
                    <span className="text-sm text-emerald-700">💨 Wind</span>

                    <span className="font-semibold text-emerald-800">
                      {Math.round(day.day.maxwind_kph)} km/h
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Forecast;
