import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../api/axios";

import StatCard from "../components/common/StatCard";

import LoadingSpinner from "../components/common/LoadingSpinner";

import EmptyState from "../components/common/EmptyState";

import AnalyticsChart from "../components/dashboard/AnalyticsChart";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
} from "recharts";


export default function AnalyticsPage() {

  const [dashboard, setDashboard] = useState({});

  const [scopeData, setScopeData] = useState([]);

  const [sourceData, setSourceData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // FETCH ANALYTICS
  // ==========================================

  const fetchAnalytics = async () => {

    try {

      const dashboardRes = await api.get(
        "/analytics/dashboard/"
      );

      const scopeRes = await api.get(
        "/analytics/scope/"
      );

      const sourceRes = await api.get(
        "/analytics/source/"
      );

      setDashboard(dashboardRes.data);

      setScopeData(scopeRes.data);

      setSourceData(sourceRes.data);

    } catch (err) {

      setError(
        "Failed to load analytics"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchAnalytics();

  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (

      <DashboardLayout>

        <LoadingSpinner />

      </DashboardLayout>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {

    return (

      <DashboardLayout>

        <EmptyState
          title="Analytics Unavailable"
          description={error}
        />

      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      {/* ========================================== */}
      {/* KPI CARDS */}
      {/* ========================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Total Records"
          value={dashboard.total_records}
          subtitle="Across all ESG ingestion pipelines"
        />

        <StatCard
          title="Approved"
          value={dashboard.approved_records}
          color="text-emerald-600"
          subtitle="Validated by analysts"
        />

        <StatCard
          title="Flagged"
          value={dashboard.flagged_records}
          color="text-amber-500"
          subtitle="Requires review"
        />

        <StatCard
          title="Total CO2e"
          value={dashboard.total_emissions}
          color="text-blue-600"
          subtitle="Normalized emissions output"
        />

      </div>

      {/* ========================================== */}
      {/* CHARTS */}
      {/* ========================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* ========================================== */}
        {/* PIE CHART */}
        {/* ========================================== */}

        <AnalyticsChart
          title="Emissions by Scope"
          subtitle="Scope 1, 2, and 3 distribution"
        >

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <PieChart>

              <Pie
                data={scopeData}
                dataKey="total"
                nameKey="scope"
                outerRadius={110}
              />

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </AnalyticsChart>

        {/* ========================================== */}
        {/* BAR CHART */}
        {/* ========================================== */}

        <AnalyticsChart
          title="Emissions by Source"
          subtitle="Contribution by ingestion source"
        >

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <BarChart data={sourceData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="source_type" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="total" />

            </BarChart>

          </ResponsiveContainer>

        </AnalyticsChart>

      </div>

      {/* ========================================== */}
      {/* INSIGHTS SECTION */}
      {/* ========================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-900">
            Data Quality
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            92% of uploaded records passed validation without manual intervention.
          </p>

        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-900">
            Audit Status
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            650 records have been audit locked and finalized.
          </p>

        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-900">
            Review Queue
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            112 flagged records still require analyst review.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}