import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Disease Detection",
      description:
        "Upload crop images and let AI identify plant diseases instantly with accurate recommendations.",
    },
    {
      title: "Weather Forecast",
      description:
        "Get real-time weather updates and forecasts to plan irrigation and harvesting efficiently.",
    },
    {
      title: "Yield Prediction",
      description:
        "Predict crop yield using AI based on weather, soil, and farming conditions.",
    },
    {
      title: "AI Farming Assistant",
      description:
        "Chat with our AI assistant to solve farming queries anytime, anywhere.",
    },
    {
      title: "Fertilizer Recommendation",
      description:
        "Receive personalized fertilizer suggestions based on crop type and soil conditions.",
    },
    {
      title: "Crop Analytics",
      description:
        "Track crop performance and monitor farming activities with beautiful dashboards.",
    },
  ];

  const steps = [
    "Create Your Account",
    "Add Farm & Crop Details",
    "Upload Crop Images",
    "Get AI Insights & Recommendations",
  ];

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center px-6 py-16 lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              🌿 AI Powered Sustainable Farming
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
              Smart Farming{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CropSense AI helps farmers detect crop diseases, monitor weather,
              predict yield, and receive intelligent farming recommendations—all
              from one powerful platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <button className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600">
                Get Started
              </button>

              <button className="rounded-full border border-emerald-500 px-8 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-12 flex flex-1 justify-center lg:mt-0">
            <img
              src="/images/hero.png"
              alt="CropSense AI"
              className="w-full max-w-xl"
            />
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto -mt-8 max-w-5xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-6">
                <h3 className="font-bold text-slate-800">Disease Detection</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Tomato Leaf Blight
                </p>
                <p className="mt-2 font-semibold text-emerald-600">
                  92% Confidence
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-6">
                <h3 className="font-bold text-slate-800">Weather</h3>
                <p className="mt-3 text-sm text-slate-600">
                  28°C • Humidity 68%
                </p>
                <p className="mt-2 font-semibold text-sky-600">
                  Rain Expected Tomorrow
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-6">
                <h3 className="font-bold text-slate-800">AI Suggestion</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Apply Copper Fungicide
                </p>
                <p className="mt-2 font-semibold text-amber-600">
                  Reduce Irrigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-white via-emerald-50 to-sky-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Powerful AI Features
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Everything a modern farmer needs in one intelligent platform.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Background Number */}
                <span className="absolute right-5 top-2 text-7xl font-extrabold text-emerald-100 transition group-hover:text-emerald-200">
                  0{index + 1}
                </span>

                {/* Fake Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-2xl shadow-lg">
                  🌱
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <button className="mt-6 font-semibold text-emerald-600 transition group-hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-emerald-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            How CropSense AI Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Start your smart farming journey in just four simple steps.
          </p>

          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-emerald-400 to-sky-400 lg:block"></div>

            <div className="grid gap-10 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="group relative rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-3xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-800">
                    {step}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Complete this step and move to the next stage of AI-powered
                    farming.
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-emerald-200"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-500 to-sky-500 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Farming?
          </h2>

          <p className="mt-6 text-lg text-emerald-50">
            Join CropSense AI today and make smarter farming decisions with the
            power of Artificial Intelligence.
          </p>

          <button
            className="mt-10 rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:scale-105"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create Free Account
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
