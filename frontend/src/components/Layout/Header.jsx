import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 p-2 shadow-md">
            <Leaf className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              CropSense{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="text-xs tracking-wide text-slate-500">
              Smart Farming Assistant
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => navigate("/")}
            className="font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/login")}
            className="font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="rounded-full bg-emerald-500 px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-600 hover:shadow-lg"
          >
            Register
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="text-slate-700" />
          ) : (
            <Menu size={28} className="text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-2 p-5">
            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="rounded-lg px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100"
            >
              Home
            </button>

            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="rounded-lg px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </button>

            <button
              onClick={() => {
                navigate("/register");
                setMenuOpen(false);
              }}
              className="mt-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
