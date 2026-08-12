import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");

  // Get logged-in user profile
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Profile Response =", res.data.data);

        setUser(res.data.data);
      } catch (error) {
        console.log(
          "Error while fetching profile =",
          error.response?.data || error,
        );
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, [token]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600"></div>

          <p className="mt-4 font-medium text-slate-600">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  // No user
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="text-5xl">👤</div>

          <h2 className="mt-4 text-2xl font-bold text-slate-800">
            Profile Not Found
          </h2>

          <p className="mt-2 text-slate-500">
            Unable to load your profile details.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            ← Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              My Account
            </p>

            <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
              User Profile
            </h1>

            <p className="mt-2 text-slate-500">
              Manage your AgroVision AI account and farming information.
            </p>
          </div>

          {/* Dashboard Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex w-fit items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 font-semibold text-emerald-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white hover:shadow-xl"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Dashboard
          </button>
        </div>

        {/* =====================================================
            MAIN PROFILE CARD
        ====================================================== */}
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
          {/* Profile Banner */}
          <div className="relative h-44 bg-gradient-to-r from-emerald-600 via-green-500 to-sky-500">
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Profile Image */}
            <div className="absolute bottom-0 left-8 translate-y-1/2">
              <div className="rounded-full bg-white p-2 shadow-xl">
                <img
                  src={user.profile || "/images/default-profile.png"}
                  alt="Profile"
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Profile Header */}
          <div className="px-8 pb-8 pt-20">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {user.fullname || "User"}
                </h2>

                <p className="mt-1 text-slate-500">
                  @{user.username || "username"}
                </p>
              </div>

              {/* Premium Badge */}
              {user.isPremium && (
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 px-5 py-2 font-semibold text-amber-700">
                  ⭐ Premium Member
                </div>
              )}
            </div>

            {/* =====================================================
                USER DETAILS
            ====================================================== */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 transition hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">Full Name</p>

                <p className="mt-2 text-lg font-semibold text-slate-800">
                  {user.fullname || "Not available"}
                </p>
              </div>

              {/* Username */}
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">Username</p>

                <p className="mt-2 text-lg font-semibold text-slate-800">
                  @{user.username || "Not available"}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-5 transition hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">
                  Email Address
                </p>

                <p className="mt-2 break-all text-lg font-semibold text-slate-800">
                  {user.email || "Not available"}
                </p>
              </div>

              {/* Account Status */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 transition hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">
                  Account Status
                </p>

                <p className="mt-2 text-lg font-semibold text-emerald-600">
                  ● Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FARMING STATISTICS
        ====================================================== */}
        <div className="mt-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Your Activity
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-800">
              Farming Overview
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Farms */}
            <div className="group rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                🌾
              </div>

              <p className="mt-5 text-sm text-slate-500">Farms</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {user.farmsCount || 0}
              </h3>
            </div>

            {/* Disease Reports */}
            <div className="group rounded-3xl border border-red-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                🦠
              </div>

              <p className="mt-5 text-sm text-slate-500">Disease Reports</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {user.diseaseReportsCount || 0}
              </h3>
            </div>

            {/* AI Predictions */}
            <div className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                🤖
              </div>

              <p className="mt-5 text-sm text-slate-500">AI Predictions</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {user.predictionsCount || 0}
              </h3>
            </div>

            {/* Irrigation Plans */}
            <div className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                💧
              </div>

              <p className="mt-5 text-sm text-slate-500">Irrigation Plans</p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {user.irrigationPlansCount || 0}
              </h3>
            </div>
          </div>
        </div>

        {/* =====================================================
            PREMIUM / SUBSCRIPTION
        ====================================================== */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-8 text-white shadow-2xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Subscription
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {user.isPremium
                  ? "You are enjoying AgroVision Premium 🌟"
                  : "Upgrade to AgroVision Premium"}
              </h2>

              <p className="mt-2 max-w-2xl text-slate-300">
                Unlock advanced AI farming tools, predictions, analytics and
                smart farming features.
              </p>
            </div>

            {!user.isPremium && (
              <button
                onClick={() => {
                  // Later:
                  // navigate("/subscription");
                }}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Upgrade Now →
              </button>
            )}
          </div>
        </div>

        {/* =====================================================
            ACCOUNT INFORMATION
        ====================================================== */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800">
            Account Information
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* User ID */}
            <div>
              <p className="text-sm text-slate-500">User ID</p>

              <p className="mt-1 break-all font-medium text-slate-700">
                {user._id || user.id || "Not available"}
              </p>
            </div>

            {/* Account Created */}
            <div>
              <p className="text-sm text-slate-500">Account Created</p>

              <p className="mt-1 font-medium text-slate-700">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Not available"}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DASHBOARD BUTTON
        ====================================================== */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Dashboard
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              🌱
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
