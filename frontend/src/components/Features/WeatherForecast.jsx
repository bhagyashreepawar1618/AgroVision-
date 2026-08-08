import { useEffect } from "react";
import axios from "axios";
function WeatherForecast() {
  useEffect(() => {
    const getweather = async (city) => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      console.log("Weather API key =", apiKey);

      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

      try {
        const res = await axios.get(url);

        console.log("Response =", res.data);
      } catch (e) {
        console.log("Weather API Error =", e.response?.data);
      }
    };

    getweather("Pune");
  }, []);

  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-green-500 to-sky-500 p-8 text-white shadow-2xl">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            🌦 Live Weather Intelligence
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Weather Forecast
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-emerald-100">
            Stay ahead with real-time weather updates, AI-powered insights,
            rainfall predictions, and farming recommendations tailored to your
            crop.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:scale-105">
              🔄 Refresh Weather
            </button>

            <button className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20">
              📍 Change Location
            </button>
          </div>
        </div>

        {/* Right Weather Card */}
        <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
          <div className="text-center">
            <div className="text-7xl">☀️</div>

            <h2 className="mt-4 text-6xl font-extrabold">28°</h2>

            <p className="mt-2 text-xl font-semibold">Sunny</p>

            <p className="mt-1 text-emerald-100">Pune, Maharashtra</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <p className="text-sm text-emerald-100">Humidity</p>

              <p className="mt-2 text-2xl font-bold">68%</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <p className="text-sm text-emerald-100">Wind</p>

              <p className="mt-2 text-2xl font-bold">12 km/h</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <p className="text-sm text-emerald-100">Rain</p>

              <p className="mt-2 text-2xl font-bold">18%</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <p className="text-sm text-emerald-100">UV Index</p>

              <p className="mt-2 text-2xl font-bold">6</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Weather Metrics ================= */}

      <div className="mt-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              🌤 Weather Metrics
            </h2>

            <p className="mt-2 text-slate-500">
              Live environmental conditions for smarter farming decisions.
            </p>
          </div>

          <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
            Updated 2 mins ago
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Humidity */}

          <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">💧</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">Humidity</h3>

            <p className="mt-3 text-4xl font-extrabold text-sky-600">68%</p>

            <p className="mt-2 text-slate-500">Moderate moisture</p>
          </div>

          {/* Wind */}

          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-gray-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌬</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Wind Speed
            </h3>

            <p className="mt-3 text-4xl font-extrabold text-slate-700">12</p>

            <p className="mt-2 text-slate-500">km/h</p>
          </div>

          {/* Pressure */}

          <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-purple-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌡</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">Pressure</h3>

            <p className="mt-3 text-4xl font-extrabold text-purple-600">1008</p>

            <p className="mt-2 text-slate-500">hPa</p>
          </div>

          {/* Visibility */}

          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">👁</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Visibility
            </h3>

            <p className="mt-3 text-4xl font-extrabold text-emerald-600">10</p>

            <p className="mt-2 text-slate-500">km</p>
          </div>

          {/* UV */}

          <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">☀</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">UV Index</h3>

            <p className="mt-3 text-4xl font-extrabold text-amber-600">6</p>

            <p className="mt-2 text-slate-500">Moderate</p>
          </div>

          {/* Rain */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌧</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Rain Chance
            </h3>

            <p className="mt-3 text-4xl font-extrabold text-sky-600">18%</p>

            <p className="mt-2 text-slate-500">Low probability</p>
          </div>

          {/* Sunrise */}

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌅</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">Sunrise</h3>

            <p className="mt-3 text-3xl font-extrabold text-orange-600">
              6:04 AM
            </p>
          </div>

          {/* Sunset */}

          <div className="rounded-3xl bg-gradient-to-br from-pink-50 to-rose-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌇</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">Sunset</h3>

            <p className="mt-3 text-3xl font-extrabold text-rose-600">
              6:52 PM
            </p>
          </div>
        </div>
      </div>

      {/* ================= Hourly Forecast ================= */}

      <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              🕒 Hourly Forecast
            </h2>

            <p className="mt-2 text-slate-500">
              Temperature changes throughout the day.
            </p>
          </div>

          <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
            Today
          </span>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="flex gap-6 pb-2">
            {[
              { time: "8 AM", icon: "☀️", temp: "27°" },
              { time: "9 AM", icon: "🌤", temp: "28°" },
              { time: "10 AM", icon: "☀️", temp: "29°" },
              { time: "11 AM", icon: "🌤", temp: "30°" },
              { time: "12 PM", icon: "☀️", temp: "31°" },
              { time: "1 PM", icon: "🌤", temp: "32°" },
              { time: "2 PM", icon: "⛅", temp: "31°" },
              { time: "3 PM", icon: "🌦", temp: "29°" },
            ].map((hour) => (
              <div
                key={hour.time}
                className="min-w-[120px] rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="font-semibold text-slate-500">{hour.time}</p>

                <div className="my-5 text-5xl">{hour.icon}</div>

                <p className="text-3xl font-bold text-slate-800">{hour.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 7-Day Forecast ================= */}

      <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              📅 7-Day Forecast
            </h2>

            <p className="mt-2 text-slate-500">
              Weekly weather outlook to help you plan farming activities.
            </p>
          </div>

          <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
            Next 7 Days
          </span>
        </div>

        <div className="mt-10 space-y-5">
          {[
            { day: "Monday", icon: "☀️", max: "31°", min: "24°", rain: "10%" },
            { day: "Tuesday", icon: "🌦", max: "29°", min: "23°", rain: "45%" },
            {
              day: "Wednesday",
              icon: "⛅",
              max: "30°",
              min: "24°",
              rain: "20%",
            },
            { day: "Thursday", icon: "☀️", max: "32°", min: "25°", rain: "5%" },
            { day: "Friday", icon: "🌧", max: "28°", min: "22°", rain: "70%" },
            {
              day: "Saturday",
              icon: "🌤",
              max: "30°",
              min: "23°",
              rain: "15%",
            },
            { day: "Sunday", icon: "☀️", max: "31°", min: "24°", rain: "8%" },
          ].map((item) => (
            <div
              key={item.day}
              className="flex flex-col items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl md:flex-row"
            >
              {/* Day */}
              <div className="flex items-center gap-4">
                <div className="text-5xl">{item.icon}</div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {item.day}
                  </h3>

                  <p className="text-sm text-slate-500">Weather Forecast</p>
                </div>
              </div>

              {/* Temperature */}

              <div className="mt-4 flex items-center gap-8 md:mt-0">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Max</p>
                  <p className="text-2xl font-bold text-red-500">{item.max}</p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-500">Min</p>
                  <p className="text-2xl font-bold text-sky-600">{item.min}</p>
                </div>

                <div className="rounded-xl bg-sky-100 px-5 py-3 text-center">
                  <p className="text-sm font-medium text-slate-600">Rain</p>

                  <p className="text-xl font-bold text-sky-700">{item.rain}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= AI Weather Insights ================= */}

      <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              🤖 AI Weather Insights
            </h2>

            <p className="mt-2 text-slate-500">
              AI analyzes weather conditions and provides smart recommendations
              for your farm.
            </p>
          </div>

          <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
            AI Confidence : 97%
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Crop Health */}

          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 shadow-lg">
            <div className="text-5xl">🌱</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Crop Health
            </h3>

            <p className="mt-3 text-3xl font-extrabold text-emerald-600">
              Excellent
            </p>

            <p className="mt-3 text-sm text-slate-600 leading-6">
              Current weather is favorable for healthy crop growth.
            </p>
          </div>

          {/* Irrigation Advice */}

          <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-100 p-6 shadow-lg">
            <div className="text-5xl">💧</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Irrigation Advice
            </h3>

            <p className="mt-3 text-2xl font-extrabold text-sky-600">6:30 AM</p>

            <p className="mt-3 text-sm text-slate-600 leading-6">
              Water your crops early morning to minimize evaporation.
            </p>
          </div>

          {/* Harvest Recommendation */}

          <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-100 p-6 shadow-lg">
            <div className="text-5xl">🌾</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Harvest Advice
            </h3>

            <p className="mt-3 text-2xl font-extrabold text-amber-600">
              Suitable
            </p>

            <p className="mt-3 text-sm text-slate-600 leading-6">
              Dry weather makes today a good day for harvesting.
            </p>
          </div>

          {/* Weather Score */}

          <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-purple-100 p-6 shadow-lg">
            <div className="text-5xl">📊</div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Weather Score
            </h3>

            <p className="mt-3 text-5xl font-extrabold text-purple-600">94</p>

            <p className="mt-1 text-sm text-slate-500">out of 100</p>

            <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-purple-200">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
