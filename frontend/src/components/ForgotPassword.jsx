import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/login.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-10 shadow-2xl backdrop-blur-xl">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Forgot Password 🔐
            </h1>

            <p className="mt-3 text-gray-200">
              Enter your username to verify your account.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md transition focus:border-emerald-400"
              />
            </div>

            {/* Info Box */}
            <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-100">
                If your username is found, you'll be able to reset your
                password.
              </p>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.03]"
            >
              Continue
            </button>
          </form>

          {/* Back to Login */}
          <button
            onClick={() => navigate("/login")}
            className="mt-6 w-full rounded-xl border border-white/40 bg-white/10 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
