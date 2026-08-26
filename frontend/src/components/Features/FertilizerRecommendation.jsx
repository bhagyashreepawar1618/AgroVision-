import React from "react";
import {
  Sprout,
  FlaskConical,
  Droplets,
  Leaf,
  Info,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const FertilizerRecommendation = () => {
  const recommendation = {
    crop: "Wheat",
    soilType: "Loamy Soil",
    recommendation: "Nitrogen-rich fertilizer is recommended.",
    npk: {
      nitrogen: "120 kg/ha",
      phosphorus: "60 kg/ha",
      potassium: "40 kg/ha",
    },
    fertilizer: "Urea + DAP",
    frequency: "Apply in 2–3 split doses",
    reason:
      "The crop requires higher nitrogen during its vegetative growth stage.",
    tips: [
      "Apply fertilizer when soil has adequate moisture.",
      "Avoid fertilizer application before heavy rainfall.",
      "Follow soil-test recommendations whenever available.",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <Sprout className="h-6 w-6 text-emerald-600" />
            </div>

            <div>
              <p className="text-sm font-medium text-emerald-600">
                AI-Powered Agriculture
              </p>

              <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                Fertilizer Recommendation
              </h1>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Get intelligent fertilizer suggestions based on crop and soil
            conditions to improve nutrient management.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Crop & Soil Card */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm lg:col-span-1">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-800">
              <Leaf className="h-5 w-5 text-emerald-500" />
              Crop Information
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Selected Crop
                </p>

                <p className="mt-1 text-lg font-bold text-emerald-700">
                  {recommendation.crop}
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-xs font-medium text-slate-500">Soil Type</p>

                <p className="mt-1 font-semibold text-slate-700">
                  {recommendation.soilType}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Recommended Fertilizer
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-sky-600" />

                  <p className="font-semibold text-slate-800">
                    {recommendation.fertilizer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-600">
                  AI Recommendation
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-800">
                  Nutrient Recommendation
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                AI Generated
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-5">
              <p className="leading-7 text-slate-700">
                {recommendation.recommendation}
              </p>
            </div>

            {/* NPK */}
            <div className="mt-6">
              <h3 className="mb-4 font-semibold text-slate-800">
                Recommended Nutrients
              </h3>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-xs text-slate-500">Nitrogen</p>

                  <p className="mt-2 text-xl font-bold text-emerald-700">
                    {recommendation.npk.nitrogen}
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                  <p className="text-xs text-slate-500">Phosphorus</p>

                  <p className="mt-2 text-xl font-bold text-sky-700">
                    {recommendation.npk.phosphorus}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                  <p className="text-xs text-slate-500">Potassium</p>

                  <p className="mt-2 text-xl font-bold text-amber-700">
                    {recommendation.npk.potassium}
                  </p>
                </div>
              </div>
            </div>

            {/* Application */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <Droplets className="mt-1 h-5 w-5 shrink-0 text-sky-500" />

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Application
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {recommendation.frequency}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why this recommendation */}
        <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-sky-500" />

            <h2 className="font-semibold text-slate-800">
              Why this recommendation?
            </h2>
          </div>

          <p className="leading-7 text-slate-600">{recommendation.reason}</p>
        </div>

        {/* Tips */}
        <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
          <div className="mb-5 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />

            <h2 className="font-semibold text-slate-800">Important Tips</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {recommendation.tips.map((tip, index) => (
              <div key={index} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          AI recommendations are for guidance only. For accurate fertilizer
          application, use soil-test results and consult a qualified
          agricultural expert.
        </p>
      </div>
    </div>
  );
};

export default FertilizerRecommendation;
