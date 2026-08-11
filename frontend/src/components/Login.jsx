import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login Form Data =", formdata);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        formdata,
      );

      console.log("res is=", res.data.data.accessToken);
      alert("User is Logged in successfully");
      localStorage.setItem("accessToken", res.data.data.accessToken);
      navigate("/dashboard");
    } catch (e) {
      console.log("Error occured while loggin in user");
      alert(e.message);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/login.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Login Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 lg:px-20">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-10 shadow-2xl backdrop-blur-xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white">Welcome Back 👋</h1>

            <p className="mt-3 text-gray-200">
              Login to continue your smart farming journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username / Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Username or Email
              </label>

              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handleChange}
                placeholder="Enter username or email"
                className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md transition focus:border-emerald-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md transition focus:border-emerald-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-emerald-300 hover:underline"
                onClick={() => navigate("/forgot_password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.03]"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-white/30"></div>

            <span className="mx-4 text-sm text-white">OR</span>

            <div className="h-px flex-1 bg-white/30"></div>
          </div>

          {/* Register */}
          <p className="text-center text-gray-200">Don't have an account?</p>

          <button
            onClick={() => navigate("/register")}
            className="mt-4 w-full rounded-xl border border-white/40 bg-white/10 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
