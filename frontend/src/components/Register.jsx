import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

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

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-white">
              Full Name
            </label>

            <input
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
              type="file"
              accept="image/*"
              className="w-full cursor-pointer rounded-xl border border-white/30 bg-white/20 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-emerald-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-emerald-500/40"
          >
            Create Account
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
