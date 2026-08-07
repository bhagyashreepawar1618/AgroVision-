import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile") {
      setFormData((prev) => ({
        ...prev,
        profile: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    data.append("fullname", formData.fullname);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("profile", formData.profile);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        data,
      );

      console.log("response from backend is =", res.data);
      alert("User registered successfully");
    } catch (e) {
      console.log("Error occured while registration", e);
      alert("Error occured");
    } finally {
      setLoading(false);
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{
        backgroundImage: "url('/images/register.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Create Account 🌱</h1>

          <p className="mt-3 text-gray-200">
            Join CropSense AI and start your smart farming journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Full Name
            </label>

            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-200 outline-none backdrop-blur-md transition focus:border-emerald-400"
            />
          </div>

          {/* Username */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Username
            </label>

            <input
              value={formData.username}
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Choose a username"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-200 outline-none backdrop-blur-md transition focus:border-emerald-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Email Address
            </label>

            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-200 outline-none backdrop-blur-md transition focus:border-emerald-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Password
            </label>

            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-200 outline-none backdrop-blur-md transition focus:border-emerald-400"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Profile Picture
            </label>

            <input
              name="profile"
              onChange={handleChange}
              type="file"
              accept="image/*"
              className="w-full cursor-pointer rounded-xl border border-white/30 bg-white/20 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-emerald-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`flex w-full items-center justify-center rounded-xl py-3 text-lg font-semibold text-white shadow-xl transition duration-300
    ${
      loading
        ? "cursor-not-allowed bg-gray-500"
        : "bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-[1.03]"
    }`}
          >
            {loading ? (
              <>
                <svg
                  className="mr-2 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-white/30"></div>
          <span className="mx-4 text-sm text-white">OR</span>
          <div className="h-px flex-1 bg-white/30"></div>
        </div>

        {/* Login */}
        <p className="text-center text-gray-200">Already have an account?</p>

        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full rounded-xl border border-white/40 bg-white/10 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
