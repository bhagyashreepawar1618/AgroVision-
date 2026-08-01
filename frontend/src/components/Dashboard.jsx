function Dashboard() {
  const features = [
    {
      title: "Disease Detection",
      icon: "🦠",
      desc: "Detect plant diseases using AI image analysis.",
    },
    {
      title: "AI Chatbot",
      icon: "🤖",
      desc: "Ask farming related questions anytime.",
    },
    {
      title: "Weather Forecast",
      icon: "🌦️",
      desc: "Real-time weather updates for your farm.",
    },
    {
      title: "Yield Prediction",
      icon: "📈",
      desc: "Predict crop production using AI.",
    },
    {
      title: "Fertilizer Recommendation",
      icon: "🧪",
      desc: "Get smart fertilizer suggestions.",
    },
    {
      title: "Crop History",
      icon: "🌾",
      desc: "Track previous crop reports.",
    },
    {
      title: "Irrigation Planner",
      icon: "💧",
      desc: "Plan watering based on weather.",
    },
    {
      title: "Analytics",
      icon: "📊",
      desc: "Visualize farm performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-500 p-10 text-white shadow-2xl">
          <h1 className="text-4xl font-bold">🌿 Welcome to CropSense AI</h1>

          <p className="mt-3 text-lg text-emerald-100">
            Your intelligent farming assistant powered by Artificial
            Intelligence.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-sm text-gray-500">Farms</h3>
            <p className="mt-2 text-3xl font-bold text-emerald-600">0</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-sm text-gray-500">Disease Reports</h3>
            <p className="mt-2 text-3xl font-bold text-red-500">0</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-sm text-gray-500">AI Predictions</h3>
            <p className="mt-2 text-3xl font-bold text-sky-500">0</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-sm text-gray-500">Weather Alerts</h3>
            <p className="mt-2 text-3xl font-bold text-yellow-500">0</p>
          </div>
        </div>

        {/* Feature Cards */}

        <div className="mt-14">
          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            AI Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group cursor-pointer rounded-3xl border border-emerald-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 text-5xl">{feature.icon}</div>

                <h3 className="text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">{feature.desc}</p>

                <button className="mt-6 rounded-xl bg-emerald-100 px-5 py-2 font-semibold text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}

        <div className="mt-16 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800">Recent Activity</h2>

          <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
            <p className="text-slate-500">No farming activity available yet.</p>

            <p className="mt-2 text-sm text-slate-400">
              Start by detecting a crop disease or chatting with AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
