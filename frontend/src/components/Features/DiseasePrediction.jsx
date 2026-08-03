import { useState } from "react";

function DiseasePrediction() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-500 p-10 text-white shadow-2xl">
          <h1 className="text-4xl font-bold">🦠 AI Disease Prediction</h1>

          <p className="mt-4 text-lg text-emerald-100">
            Upload a crop leaf image and let AI identify diseases with
            intelligent recommendations.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Upload Section */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-800">
              Upload Crop Image
            </h2>

            <p className="mt-3 text-slate-500">
              Supported crops: Tomato, Potato, Rice, Wheat, Cotton
            </p>

            <label className="mt-8 flex h-80 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-300 bg-emerald-50 transition hover:border-emerald-500 hover:bg-emerald-100">
              <div className="text-7xl">📷</div>

              <h3 className="mt-5 text-xl font-bold text-slate-700">
                Click to Upload Image
              </h3>

              <p className="mt-2 text-slate-500">JPG, JPEG or PNG</p>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </label>

            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]">
              🔍 Predict Disease
            </button>
          </div>

          {/* Preview & Result */}

          <div className="space-y-8">
            {/* Image Preview */}

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-slate-800">
                Image Preview
              </h2>

              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="h-80 w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  No Image Selected
                </div>
              )}
            </div>

            {/* Prediction Result */}

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800">
                AI Prediction
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between rounded-xl bg-emerald-50 p-4">
                  <span className="font-semibold">Disease</span>
                  <span className="text-slate-500">Waiting...</span>
                </div>

                <div className="flex justify-between rounded-xl bg-sky-50 p-4">
                  <span className="font-semibold">Confidence</span>
                  <span className="text-slate-500">--</span>
                </div>

                <div className="flex justify-between rounded-xl bg-amber-50 p-4">
                  <span className="font-semibold">Medicine</span>
                  <span className="text-slate-500">--</span>
                </div>

                <div className="flex justify-between rounded-xl bg-purple-50 p-4">
                  <span className="font-semibold">Fertilizer</span>
                  <span className="text-slate-500">--</span>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <h3 className="font-bold text-emerald-700">
                    AI Recommendation
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Upload an image to receive disease analysis and treatment
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiseasePrediction;
