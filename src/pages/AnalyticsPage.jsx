import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../api/axios";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar
} from "recharts";


export default function AnalyticsPage() {

  const [dashboard, setDashboard] = useState({});

  const [scopeData, setScopeData] = useState([]);

  const [sourceData, setSourceData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchAnalytics();

  }, []);

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

      setError("Failed to load analytics");

    } finally {

      setLoading(false);
    }
  };

  // ==========================================
  // LOADING UI
  // ==========================================

  if (loading) {

    return (

      <DashboardLayout>

        <div className="text-center mt-20 text-xl">
          Loading analytics...
        </div>

      </DashboardLayout>
    );
  }

  // ==========================================
  // ERROR UI
  // ==========================================

  if (error) {

    return (

      <DashboardLayout>

        <div className="text-center mt-20 text-red-500 text-xl">
          {error}
        </div>

      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        ESG Analytics
      </h1>

      {/* ========================================== */}
      {/* DASHBOARD CARDS */}
      {/* ========================================== */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <p>Total Records</p>

          <h2 className="text-3xl font-bold">
            {dashboard.total_records}
          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <p>Approved</p>

          <h2 className="text-3xl font-bold text-green-600">
            {dashboard.approved_records}
          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <p>Flagged</p>

          <h2 className="text-3xl font-bold text-yellow-600">
            {dashboard.flagged_records}
          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <p>Total CO2e</p>

          <h2 className="text-3xl font-bold">
            {dashboard.total_emissions}
          </h2>

        </div>

      </div>

      {/* ========================================== */}
      {/* CHARTS */}
      {/* ========================================== */}

      <div className="grid grid-cols-2 gap-8">

        {/* ========================================== */}
        {/* PIE CHART */}
        {/* ========================================== */}

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Emissions by Scope
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={scopeData}
                dataKey="total"
                nameKey="scope"
              />

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* ========================================== */}
        {/* BAR CHART */}
        {/* ========================================== */}

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Emissions by Source
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={sourceData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="source_type" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="total" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </DashboardLayout>
  );
}