import StatusBadge from "../common/StatusBadge";

import FlagBadge from "./FlagBadge";


export default function ReviewTable({

  records,

  onApprove,

  onReject,

}) {

  return (

    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

      {/* ========================================== */}
      {/* TABLE HEADER */}
      {/* ========================================== */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Emission Review Queue
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Review suspicious or pending ESG records before audit lock.
          </p>

        </div>

        <div className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-slate-700">

          {records.length} Records

        </div>

      </div>

      {/* ========================================== */}
      {/* TABLE */}
      {/* ========================================== */}

      <div className="overflow-x-auto scrollbar-thin">

        <table className="w-full min-w-[1000px]">

          <thead className="bg-slate-50 border-b border-slate-200">

            <tr className="text-left text-sm text-slate-500">

              <th className="px-6 py-4 font-semibold">
                Activity
              </th>

              <th className="px-6 py-4 font-semibold">
                Scope
              </th>

              <th className="px-6 py-4 font-semibold">
                CO2e
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 font-semibold">
                Flags
              </th>

              <th className="px-6 py-4 font-semibold text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className={`border-b border-slate-100 hover:bg-slate-50 transition-all ${
                  record.is_flagged
                    ? "bg-amber-50/40"
                    : ""
                }`}
              >

                {/* ACTIVITY */}

                <td className="px-6 py-5">

                  <div>

                    <p className="font-semibold text-slate-900">
                      {record.activity_type}
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Source: {record.source_type}
                    </p>

                  </div>

                </td>

                {/* SCOPE */}

                <td className="px-6 py-5">

                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">

                    Scope {record.scope}

                  </span>

                </td>

                {/* CO2 */}

                <td className="px-6 py-5">

                  <p className="font-semibold text-slate-800">

                    {record.co2e_kg} kg

                  </p>

                </td>

                {/* STATUS */}

                <td className="px-6 py-5">

                  <StatusBadge
                    status={record.review_status}
                  />

                </td>

                {/* FLAGS */}

                <td className="px-6 py-5">

                  <div className="flex flex-wrap gap-2">

                    {record.flag_reason?.length ? (

                      record.flag_reason.map(
                        (flag) => (

                          <FlagBadge
                            key={flag}
                            flag={flag}
                          />
                        )
                      )

                    ) : (

                      <span className="text-slate-400 text-sm">

                        No Flags

                      </span>
                    )}

                  </div>

                </td>

                {/* ACTIONS */}

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-3">

                    <button
                      onClick={() =>
                        onApprove(record.id)
                      }
                      disabled={
                        record.review_status === "LOCKED"
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        record.review_status === "LOCKED"
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        onReject(record.id)
                      }
                      disabled={
                        record.review_status === "LOCKED"
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        record.review_status === "LOCKED"
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                    >
                      Reject
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}