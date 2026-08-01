function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              CropSense{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                AI
              </span>
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Empowering farmers with AI-driven crop monitoring, disease
              detection, weather insights, and smart farming recommendations.
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <button className="transition hover:text-emerald-600">Home</button>

            <button className="transition hover:text-emerald-600">Login</button>

            <button className="transition hover:text-emerald-600">
              Register
            </button>

            <button className="transition hover:text-emerald-600">
              Contact
            </button>
          </div>
        </div>

        <div className="my-8 h-px bg-slate-200"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CropSense AI. All rights reserved.</p>

          <p>Built with ❤️ for Sustainable Agriculture</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
