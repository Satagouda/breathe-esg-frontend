export default function AnalyticsChart({
  title,
  subtitle,
  children,
}) {

  return (

    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (

          <p className="text-sm text-slate-500 mt-1">
            {subtitle}
          </p>
        )}

      </div>

      {children}

    </div>
  );
}