function Subscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-slate-900">
            ⭐ Premium Membership
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-800">
            Unlock Smart Farming
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Upgrade to Premium and access powerful AI tools that help maximize
            crop production, reduce disease risks and optimize irrigation.
          </p>
        </div>

        {/* Plans */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Monthly */}

          <div className="rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-lg font-semibold text-emerald-600">
              Monthly Plan
            </p>

            <h2 className="mt-4 text-6xl font-extrabold text-slate-800">
              ₹199
            </h2>

            <p className="text-slate-500">per month</p>

            <ul className="mt-8 space-y-4 text-slate-600">
              <li>✅ Unlimited Yield Prediction</li>

              <li>✅ Advanced Disease Detection</li>

              <li>✅ Smart Irrigation Planner</li>

              <li>✅ AI Crop Reports</li>

              <li>✅ Priority Support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-lg font-bold text-white transition hover:scale-105">
              Subscribe Monthly
            </button>
          </div>

          {/* Yearly */}

          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 p-10 text-white shadow-2xl transition hover:-translate-y-2">
            <div className="absolute right-6 top-6 rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">
              BEST VALUE
            </div>

            <p className="text-lg font-semibold">Annual Plan</p>

            <h2 className="mt-4 text-6xl font-extrabold">₹1,999</h2>

            <p className="text-emerald-100">per year</p>

            <p className="mt-3 rounded-xl bg-white/10 p-3 text-sm">
              Save ₹389 every year compared to monthly billing.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✅ Everything in Monthly Plan</li>

              <li>✅ Unlimited AI Predictions</li>

              <li>✅ Early Access to New Features</li>

              <li>✅ Premium Weather Insights</li>

              <li>✅ Dedicated Customer Support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-white py-4 text-lg font-bold text-emerald-700 transition hover:scale-105">
              Subscribe Yearly
            </button>
          </div>
        </div>

        {/* Premium Features */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800">
            Premium Features Included
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-bold">📈 Yield Prediction</h3>

              <p className="mt-3 text-slate-600">
                Predict future crop production using AI.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">🦠 Disease Detection</h3>

              <p className="mt-3 text-slate-600">
                Detect diseases with medicine recommendations.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold">💧 Irrigation Planner</h3>

              <p className="mt-3 text-slate-600">
                AI decides the perfect irrigation schedule.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6">
              <h3 className="text-xl font-bold">📊 AI Reports</h3>

              <p className="mt-3 text-slate-600">
                Detailed farming insights and analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌦 Premium Weather</h3>

              <p className="mt-3 text-slate-600">
                Advanced weather forecasting and alerts.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-6">
              <h3 className="text-xl font-bold">🤖 AI Assistant+</h3>

              <p className="mt-3 text-slate-600">
                Faster AI responses with premium support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
