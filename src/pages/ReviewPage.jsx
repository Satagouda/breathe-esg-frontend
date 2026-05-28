import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../api/axios";

import ReviewTable from "../components/review/ReviewTable";

import LoadingSpinner from "../components/common/LoadingSpinner";

import EmptyState from "../components/common/EmptyState";


export default function ReviewPage() {

  const [records, setRecords] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // FETCH RECORDS
  // ==========================================

  const fetchRecords = async () => {

    try {

      const response = await api.get(
        "/records/"
      );

      setRecords(response.data.results);

    } catch (err) {

      setError(
        "Failed to load review records"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchRecords();

  }, []);

  // ==========================================
  // APPROVE RECORD
  // ==========================================

  const approveRecord = async (id) => {

    await api.post(
      `/records/${id}/approve/`
    );

    fetchRecords();
  };

  // ==========================================
  // REJECT RECORD
  // ==========================================

  const rejectRecord = async (id) => {

    await api.post(
      `/records/${id}/reject/`,
      {
        comments:
          "Rejected by analyst"
      }
    );

    fetchRecords();
  };

  return (

    <DashboardLayout>

      {/* ========================================== */}
      {/* LOADING */}
      {/* ========================================== */}

      {loading && (
        <LoadingSpinner />
      )}

      {/* ========================================== */}
      {/* ERROR */}
      {/* ========================================== */}

      {!loading && error && (

        <EmptyState
          title="Unable to Load Records"
          description={error}
        />
      )}

      {/* ========================================== */}
      {/* EMPTY */}
      {/* ========================================== */}

      {!loading &&
        !error &&
        records.length === 0 && (

          <EmptyState
            title="No Review Records"
            description="No emission records currently require analyst review."
          />
        )}

      {/* ========================================== */}
      {/* TABLE */}
      {/* ========================================== */}

      {!loading &&
        !error &&
        records.length > 0 && (

          <ReviewTable
            records={records}
            onApprove={approveRecord}
            onReject={rejectRecord}
          />
        )}

    </DashboardLayout>
  );
}