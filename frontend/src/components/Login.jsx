import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">
        {/* Left Section */}
        <div className="hidden w-1/2 lg:flex items-center justify-center">
          <img
            src="/images/login.png"
            alt="CropSense AI"
            className="w-full max-w-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur-lg">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-800">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-slate-500">
              Login to continue your smart farming journey.
            </p>
          </div>

          <form className="space-y-6">
            {/* Username / Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Username or Email
              </label>

              <input
                type="text"
                placeholder="Enter username or email"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-emerald-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-slate-300"></div>
            <span className="mx-4 text-sm text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          {/* Register */}
          <p className="text-center text-slate-600">Don't have an account?</p>

          <button
            onClick={() => navigate("/register")}
            className="mt-4 w-full rounded-xl border-2 border-emerald-500 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
