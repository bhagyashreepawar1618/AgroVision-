function FeatureCard({ icon, title, desc, onClick }) {
  return (
    <div className="group rounded-3xl border border-emerald-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 text-5xl">{icon}</div>

      <h3 className="text-xl font-bold text-slate-800">{title}</h3>

      <p className="mt-3 leading-7 text-slate-500">{desc}</p>

      <button
        onClick={onClick}
        className="mt-6 rounded-xl bg-emerald-100 px-5 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-500 hover:text-white"
      >
        Open
      </button>
    </div>
  );
}

export default FeatureCard;
