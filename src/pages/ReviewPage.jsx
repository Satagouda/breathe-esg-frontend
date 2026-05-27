import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../api/axios";


export default function ReviewPage() {

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {

    const response = await api.get(
      "/records/"
    );

    setRecords(response.data.results);
  };

  useEffect(() => {

    fetchRecords();

  }, []);

  const approveRecord = async (id) => {

    await api.post(
      `/records/${id}/approve/`
    );

    fetchRecords();
  };

  const rejectRecord = async (id) => {

    await api.post(
      `/records/${id}/reject/`,
      {
        comments: "Rejected by analyst"
      }
    );

    fetchRecords();
  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Review Emission Records
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Activity
              </th>

              <th className="p-4 text-left">
                Scope
              </th>

              <th className="p-4 text-left">
                CO2e
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Flags
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className={
                  record.is_flagged
                    ? "bg-yellow-50 border-t"
                    : "border-t"
                }
              >

                <td className="p-4">
                  {record.activity_type}
                </td>

                <td className="p-4">
                  Scope {record.scope}
                </td>

                <td className="p-4">
                  {record.co2e_kg}
                </td>

                <td className="p-4">

                  <span
                    className={
                      record.review_status === "APPROVED"
                        ? "text-green-600 font-semibold"
                        : record.review_status === "REJECTED"
                        ? "text-red-600 font-semibold"
                        : record.review_status === "LOCKED"
                        ? "text-blue-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {record.review_status}
                  </span>

                </td>

                <td className="p-4">

                  {record.flag_reason?.map(
                    (flag) => (

                      <span
                        key={flag}
                        className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded mr-2"
                      >
                        {flag}
                      </span>
                    )
                  )}

                  {!record.flag_reason?.length && (
                    <span className="text-gray-400">
                      No Flags
                    </span>
                  )}

                </td>

                <td className="p-4 space-x-2">

                  <button
                    onClick={() =>
                      approveRecord(record.id)
                    }
                    disabled={
                      record.review_status === "LOCKED"
                    }
                    className={`px-3 py-1 rounded text-white ${
                      record.review_status === "LOCKED"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      rejectRecord(record.id)
                    }
                    disabled={
                      record.review_status === "LOCKED"
                    }
                    className={`px-3 py-1 rounded text-white ${
                      record.review_status === "LOCKED"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Reject
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}