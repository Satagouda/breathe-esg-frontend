import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  Leaf,
  Database,
} from "lucide-react";

import api from "../api/axios";


export default function LoginPage() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await api.post(
        "/token/",
        data
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid credentials");
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex">

      {/* ========================================== */}
      {/* LEFT SECTION */}
      {/* ========================================== */}

      <div className="hidden lg:flex w-1/2 bg-slate-900 text-white p-16 flex-col justify-between">

        {/* TOP */}

        <div>

          <h1 className="text-5xl font-bold tracking-tight leading-tight">

            ESG Intelligence
            <br />
            Platform

          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-lg">

            Centralize sustainability ingestion,
            emissions normalization,
            audit workflows,
            and ESG analytics
            across enterprise systems.

          </p>

        </div>

        {/* FEATURES */}

        <div className="space-y-6">

          <div className="flex items-start gap-4">

            <div className="bg-slate-800 p-3 rounded-2xl">

              <Database size={24} />

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Multi-source Ingestion
              </h3>

              <p className="text-slate-400 mt-1">
                SAP, utility, and travel ESG datasets.
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="bg-slate-800 p-3 rounded-2xl">

              <Leaf size={24} />

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Emissions Intelligence
              </h3>

              <p className="text-slate-400 mt-1">
                Scope 1, 2, and 3 normalization workflows.
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="bg-slate-800 p-3 rounded-2xl">

              <ShieldCheck size={24} />

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Audit-ready Review
              </h3>

              <p className="text-slate-400 mt-1">
                Analyst approval and audit locking workflows.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================== */}
      {/* RIGHT SECTION */}
      {/* ========================================== */}

      <div className="flex-1 flex items-center justify-center p-10">

        <div className="w-full max-w-md">

          {/* ========================================== */}
          {/* HEADER */}
          {/* ========================================== */}

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="text-slate-500 mt-3">

              Sign in to access the ESG operations dashboard.

            </p>

          </div>

          {/* ========================================== */}
          {/* LOGIN CARD */}
          {/* ========================================== */}

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* USERNAME */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">

                  Username

                </label>

                <input
                  {...register("username")}
                  placeholder="Enter username"
                  className="w-full border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 outline-none p-4 rounded-2xl transition-all"
                />

              </div>

              {/* PASSWORD */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">

                  Password

                </label>

                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter password"
                  className="w-full border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 outline-none p-4 rounded-2xl transition-all"
                />

              </div>

              {/* BUTTON */}

              <button
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-semibold transition-all"
              >

                Sign In

              </button>

            </form>

            {/* ========================================== */}
            {/* DEMO CREDENTIALS */}
            {/* ========================================== */}

            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5">

              <p className="text-sm font-semibold text-slate-700 mb-3">

                Demo Credentials

              </p>

              <div className="text-sm text-slate-600 space-y-1">

                <p>
                  Username:
                  <span className="font-medium ml-2">
                    analyst_demo
                  </span>
                </p>

                <p>
                  Password:
                  <span className="font-medium ml-2">
                    Demo@123
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}