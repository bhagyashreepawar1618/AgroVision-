function WeatherForecast() {
  const weather = {
    location: "Pune, Maharashtra",
    temperature: "29°C",
    condition: "Partly Cloudy",
    humidity: "68%",
    wind: "12 km/h",
    rain: "35%",
    visibility: "8 km",
    sunrise: "06:08 AM",
    sunset: "07:08 PM",
    suggestion:
      "No heavy rainfall expected today. Ideal time for irrigation during evening hours.",
  };

  const stats = [
    { title: "Humidity", value: weather.humidity, icon: "💧" },
    { title: "Wind Speed", value: weather.wind, icon: "💨" },
    { title: "Rain Chance", value: weather.rain, icon: "🌧️" },
    { title: "Visibility", value: weather.visibility, icon: "👁️" },
    { title: "Sunrise", value: weather.sunrise, icon: "🌅" },
    { title: "Sunset", value: weather.sunset, icon: "🌇" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-emerald-500 p-10 text-white shadow-2xl">
          <h1 className="text-4xl font-bold">🌦 Weather Forecast</h1>

          <p className="mt-3 text-lg text-sky-100">
            Real-time weather insights to help farmers make smarter decisions.
          </p>
        </div>

        {/* Main Weather Card */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p className="text-lg text-slate-500">📍 {weather.location}</p>

              <h2 className="mt-4 text-7xl font-bold text-slate-800">
                {weather.temperature}
              </h2>

              <p className="mt-2 text-2xl font-semibold text-emerald-600">
                ☁️ {weather.condition}
              </p>
            </div>

            <div className="rounded-full bg-sky-100 p-10 text-8xl">🌤️</div>
          </div>
        </div>

        {/* Weather Stats */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-lg font-semibold text-slate-700">
                {item.title}
              </h3>

              <p className="mt-2 text-3xl font-bold text-emerald-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* AI Suggestion */}

        <div className="mt-10 rounded-3xl border-l-8 border-emerald-500 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800">
            🤖 AI Farming Suggestion
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {weather.suggestion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
