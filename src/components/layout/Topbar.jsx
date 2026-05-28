export default function Topbar() {

  return (

    <div className="flex items-center justify-between mb-8">

      <div>

        <h2 className="text-3xl font-bold text-slate-900">
          ESG Operations Dashboard
        </h2>

        <p className="text-slate-500 mt-1">
          Monitor ingestion, review emissions,
          and audit sustainability data.
        </p>

      </div>

      <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">

        <p className="text-sm text-slate-500">
          Logged in as
        </p>

        <p className="font-semibold text-slate-800">
          analyst_demo
        </p>

      </div>

    </div>
  );
}