import { useNavigate } from "react-router-dom";
import FeatureCard from "./Features/FeatureCard.jsx";
function Dashboard() {
  const navigate = useNavigate();

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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            icon="🦠"
            title="Disease Detection"
            desc="Detect plant diseases using AI image analysis."
            route="/disease_prediction"
          />

          <FeatureCard
            icon="🤖"
            title="AI Chatbot"
            desc="Ask farming related questions anytime."
            route="/chatbot"
          />

          <FeatureCard
            icon="🌦️"
            title="Weather Forecast"
            desc="Real-time weather updates for your farm."
            route="/weather_forecast"
          />

          <FeatureCard
            icon="📈"
            title="Yield Prediction"
            desc="Predict crop production using AI."
            route="/subscription"
          />

          <FeatureCard
            icon="🧪"
            title="Fertilizer Recommendation"
            desc="Get smart fertilizer suggestions."
            route="/fertilizer"
          />

          <FeatureCard
            icon="🌾"
            title="Crop History"
            desc="Track previous crop reports."
            route="/crop-history"
          />

          <FeatureCard
            icon="💧"
            title="Irrigation Planner"
            desc="Plan watering based on weather."
            route="/irrigation"
          />

          <FeatureCard
            icon="📊"
            title="Analytics"
            desc="Visualize farm performance."
            route="/analytics"
          />
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
