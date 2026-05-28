import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/common/StatCard";


export default function DashboardPage() {

  return (

    <DashboardLayout>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Records"
          value="1,240"
          subtitle="Across all ESG sources"
        />

        <StatCard
          title="Approved"
          value="920"
          color="text-emerald-600"
          subtitle="Validated by analysts"
        />

        <StatCard
          title="Flagged"
          value="112"
          color="text-amber-500"
          subtitle="Requires manual review"
        />

        <StatCard
          title="Locked"
          value="650"
          color="text-blue-600"
          subtitle="Audit finalized"
        />

      </div>

      {/* ========================================== */}
      {/* SECOND SECTION */}
      {/* ========================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <h2 className="text-xl font-bold mb-4">
            Recent Upload Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between border-b border-slate-100 pb-3">

              <div>

                <p className="font-medium">
                  SAP Fuel Export
                </p>

                <p className="text-sm text-slate-500">
                  Uploaded 2 hours ago
                </p>

              </div>

              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                Success
              </span>

            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-3">

              <div>

                <p className="font-medium">
                  Utility Billing Data
                </p>

                <p className="text-sm text-slate-500">
                  Uploaded yesterday
                </p>

              </div>

              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                Flagged
              </span>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <h2 className="text-xl font-bold mb-4">
            ESG Review Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span className="text-slate-600">
                Scope 1 Emissions
              </span>

              <span className="font-semibold">
                42%
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Scope 2 Emissions
              </span>

              <span className="font-semibold">
                31%
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Scope 3 Emissions
              </span>

              <span className="font-semibold">
                27%
              </span>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}