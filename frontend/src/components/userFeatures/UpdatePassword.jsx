import { useState } from "react";
import axios from "axios";
function UpdatePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");

    console.log("access token in frontend =", token);

    if (!token) {
      alert("Please login again. Access token not found.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/update-password",

        //  Request Body
        {
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        },

        // Config / Headers
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Password update response =", res.data);

      alert("Password updated successfully! 🔐");

      setFormData({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.log(
        "Error occurred while updating user password",
        error.response?.data || error,
      );

      alert(
        error.response?.data?.message ||
          "Something went wrong while updating password",
      );
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-3xl shadow-lg">
            🔐
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-slate-800">
            Update Password
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Keep your account secure by updating your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Current Password
            </label>

            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
              >
                {showOldPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              New Password
            </label>

            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
              >
                {showNewPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Password Info */}
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-medium text-emerald-800">
              🔒 Password Security
            </p>

            <p className="mt-1 text-xs leading-5 text-emerald-700">
              Choose a strong password that you don't use on other websites.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Update Password 🔐
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
