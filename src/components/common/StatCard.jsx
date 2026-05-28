export default function StatCard({
  title,
  value,
  color = "text-slate-900",
  subtitle,
}) {

  return (

    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">

      <p className="text-slate-500 text-sm font-medium">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

      {subtitle && (

        <p className="text-slate-400 text-sm mt-3">
          {subtitle}
        </p>
      )}

    </div>
  );
}