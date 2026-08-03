function IrrigationPlanner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}

        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 p-10 text-white shadow-2xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            💧 AI Powered Irrigation Planner
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Smart Irrigation Planning
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Save water and improve crop yield with AI-powered irrigation
            recommendations based on weather, soil and crop conditions.
          </p>
        </div>

        {/* ================= Farm Details ================= */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              🌾 Farm Information
            </h2>

            <p className="mt-2 text-slate-500">
              Fill in your farm details to generate an AI-powered irrigation
              plan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Crop Name */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Crop Name
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                <option>Select Crop</option>
                <option>Tomato</option>
                <option>Rice</option>
                <option>Wheat</option>
                <option>Potato</option>
                <option>Cotton</option>
                <option>Sugarcane</option>
              </select>
            </div>

            {/* Soil Type */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Soil Type
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                <option>Select Soil</option>
                <option>Clay</option>
                <option>Loamy</option>
                <option>Sandy</option>
                <option>Black Soil</option>
              </select>
            </div>

            {/* Farm Area */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Farm Area (Acres)
              </label>

              <input
                type="number"
                placeholder="Example : 2"
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            {/* Crop Stage */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Crop Stage
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                <option>Select Stage</option>
                <option>Seedling</option>
                <option>Vegetative</option>
                <option>Flowering</option>
                <option>Fruiting</option>
                <option>Harvest</option>
              </select>
            </div>
          </div>

          <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.01]">
            Generate Irrigation Plan
          </button>
        </div>

        {/* ================= Weather Dashboard ================= */}

        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              🌦 Current Weather
            </h2>

            <p className="mt-2 text-slate-500">
              Live weather data will appear here after API integration.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Temperature */}

            <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl">🌡️</div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Temperature
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-orange-600">
                31°C
              </p>

              <p className="mt-2 text-slate-500">Feels like 34°C</p>
            </div>

            {/* Humidity */}

            <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl">💧</div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Humidity
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-sky-600">72%</p>

              <p className="mt-2 text-slate-500">Normal Moisture</p>
            </div>

            {/* Rain */}

            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl">🌧️</div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Rain Chance
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-emerald-600">
                20%
              </p>

              <p className="mt-2 text-slate-500">Low probability</p>
            </div>

            {/* Wind */}

            <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl">💨</div>

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Wind Speed
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-purple-600">
                10 km/h
              </p>

              <p className="mt-2 text-slate-500">Light Breeze</p>
            </div>
          </div>
        </div>

        {/* ================= AI Irrigation Recommendation ================= */}

        <div className="mt-14 rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                🤖 AI Irrigation Recommendation
              </h2>

              <p className="mt-2 text-slate-500">
                AI analyzes your crop, soil and weather conditions to generate
                the best irrigation schedule.
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
              AI Status : Ready
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* Water Required */}

            <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-100 p-6 shadow-lg">
              <div className="text-5xl">💧</div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                Water Required
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-sky-600">650 L</p>

              <p className="mt-2 text-sm text-slate-500">
                Estimated water needed today.
              </p>
            </div>

            {/* Best Time */}

            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 p-6 shadow-lg">
              <div className="text-5xl">⏰</div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                Best Time
              </h3>

              <p className="mt-3 text-3xl font-extrabold text-emerald-600">
                6:30 AM
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Minimum evaporation loss.
              </p>
            </div>

            {/* Next Irrigation */}

            <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-100 p-6 shadow-lg">
              <div className="text-5xl">📅</div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                Next Irrigation
              </h3>

              <p className="mt-3 text-3xl font-extrabold text-amber-600">
                Tomorrow
              </p>

              <p className="mt-2 text-sm text-slate-500">Based on forecast.</p>
            </div>

            {/* Confidence */}

            <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 p-6 shadow-lg">
              <div className="text-5xl">🎯</div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                AI Confidence
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-purple-600">
                96%
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Prediction accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Soil Health & Water Saving ================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Soil Moisture */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800">
              🌱 Soil Health
            </h2>

            <p className="mt-2 text-slate-500">
              AI estimates current soil moisture based on weather conditions.
            </p>

            <div className="mt-10 flex flex-col items-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full border-[14px] border-emerald-500 bg-emerald-50 shadow-inner">
                <div className="text-center">
                  <p className="text-6xl font-extrabold text-emerald-600">
                    72%
                  </p>

                  <p className="mt-2 font-semibold text-slate-600">Moisture</p>
                </div>
              </div>

              <span className="mt-8 rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
                Healthy Moisture Level
              </span>
            </div>
          </div>

          {/* Water Saving Analytics */}

          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold">💦 Water Saving Analytics</h2>

            <p className="mt-3 text-emerald-100">
              Estimated savings based on AI irrigation planning.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                <span>Today's Water Usage</span>

                <span className="text-2xl font-bold">650 L</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                <span>Water Saved</span>

                <span className="text-2xl font-bold">150 L</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                <span>Irrigation Efficiency</span>

                <span className="text-2xl font-bold">91%</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">
              <p className="leading-7 text-emerald-50">
                Following AI recommendations can reduce unnecessary watering,
                improve crop health and conserve groundwater.
              </p>
            </div>
          </div>
        </div>

        {/* ================= AI Suggestions & Smart Tips ================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* AI Recommendation */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800">
              🤖 AI Recommendations
            </h2>

            <p className="mt-2 text-slate-500">
              Personalized suggestions generated using weather, crop and soil
              information.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
                <h3 className="font-bold text-emerald-700">✅ Irrigation</h3>

                <p className="mt-2 text-slate-600">
                  Irrigate your crop at <b>6:30 AM</b> to reduce evaporation and
                  maximize water absorption.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-sky-500 bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">🌦 Weather Insight</h3>

                <p className="mt-2 text-slate-600">
                  Rain probability is low today, so irrigation is recommended.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-5">
                <h3 className="font-bold text-yellow-700">🌱 Soil Advice</h3>

                <p className="mt-2 text-slate-600">
                  Soil moisture is healthy. Avoid excessive watering to prevent
                  root damage.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Farming Tips */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-800">
              🌿 Smart Farming Tips
            </h2>

            <p className="mt-2 text-slate-500">
              Best practices to improve crop productivity and save water.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                💧 Use <b>drip irrigation</b> for better water efficiency.
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                🌅 Water crops during <b>early morning</b> or evening.
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                🌱 Check soil moisture before irrigating again.
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                🌧 Skip irrigation if heavy rainfall is expected.
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                🛰 Monitor weather forecasts daily for better planning.
              </div>
            </div>
          </div>
        </div>

        {/* ================= Weather Alerts ================= */}

        <div className="mt-12 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800">
            ⚠️ Weather Alerts
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-bold text-orange-600">High Temperature</h3>

              <p className="mt-2 text-slate-600">
                Temperature may reach <b>35°C</b> this afternoon.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-bold text-sky-600">Rain Forecast</h3>

              <p className="mt-2 text-slate-600">
                20% chance of rainfall in the next 24 hours.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-bold text-emerald-600">AI Notice</h3>

              <p className="mt-2 text-slate-600">
                Continue following today's irrigation schedule for the best crop
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IrrigationPlanner;
