function CropHistory() {
  const history = [
    {
      crop: "Tomato",
      disease: "Late Blight",
      confidence: "96%",
      weather: "Rain Expected",
      date: "05 Aug 2026",
      status: "Diseased",
    },
    {
      crop: "Wheat",
      disease: "Healthy",
      confidence: "100%",
      weather: "Sunny",
      date: "01 Aug 2026",
      status: "Healthy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold text-slate-800">🌾 Crop History</h1>

        <p className="mt-2 text-slate-500">
          View all your previous crop reports and AI predictions.
        </p>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p>Total Crops</p>
            <h2 className="text-3xl font-bold text-emerald-600">12</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p>Disease Reports</p>
            <h2 className="text-3xl font-bold text-red-500">5</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p>Predictions</p>
            <h2 className="text-3xl font-bold text-sky-500">8</h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p>Healthy Crops</p>
            <h2 className="text-3xl font-bold text-green-500">7</h2>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search crop..."
          className="mt-10 w-full rounded-2xl border p-4 outline-none focus:border-emerald-500"
        />

        {/* History */}
        <div className="mt-10 space-y-6">
          {history.map((item, index) => (
            <div key={index} className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold">🌱 {item.crop}</h2>

                  <p className="mt-2">
                    Disease : <b>{item.disease}</b>
                  </p>

                  <p>
                    Confidence : <b>{item.confidence}</b>
                  </p>

                  <p>
                    Weather : <b>{item.weather}</b>
                  </p>
                </div>

                <div className="text-right">
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700">
                    {item.status}
                  </span>

                  <p className="mt-4 text-slate-500">{item.date}</p>

                  <button className="mt-4 rounded-xl bg-emerald-500 px-5 py-2 text-white">
                    View Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CropHistory;
