import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../api/axios";

import UploadCard from "../components/upload/UploadCard";

import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";


export default function UploadPage() {

  const [file, setFile] = useState(null);

  const [sourceType, setSourceType] =
    useState("SAP");

  const [uploading, setUploading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  // ==========================================
  // HANDLE UPLOAD
  // ==========================================

  const handleUpload = async () => {

    if (!file) {

      setError(
        "Please select a file first."
      );

      return;
    }

    setUploading(true);

    setSuccess("");

    setError("");

    const formData = new FormData();

    formData.append("file", file);

    formData.append("tenant_id", 1);

    formData.append("data_source_id", 1);

    formData.append(
      "source_type",
      sourceType
    );

    try {

      await api.post(
        "/batches/upload/",
        formData
      );

      setSuccess(
        "Upload completed successfully."
      );

      setFile(null);

    } catch (err) {

      setError(
        "Upload failed. Please verify the file format and try again."
      );

    } finally {

      setUploading(false);
    }
  };

  return (

    <DashboardLayout>

      {/* ========================================== */}
      {/* HEADER */}
      {/* ========================================== */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          ESG Data Ingestion
        </h1>

        <p className="text-slate-500 mt-2">
          Upload sustainability datasets from SAP,
          utility providers, or corporate travel exports.
        </p>

      </div>

      {/* ========================================== */}
      {/* SOURCE CARDS */}
      {/* ========================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <UploadCard
          title="SAP Fuel Data"
          description="ERP fuel and procurement exports"
          active={sourceType === "SAP"}
          onClick={() =>
            setSourceType("SAP")
          }
        />

        <UploadCard
          title="Utility Data"
          description="Electricity and energy billing exports"
          active={sourceType === "UTILITY"}
          onClick={() =>
            setSourceType("UTILITY")
          }
        />

        <UploadCard
          title="Travel Data"
          description="Corporate travel and flight records"
          active={sourceType === "TRAVEL"}
          onClick={() =>
            setSourceType("TRAVEL")
          }
        />

      </div>

      {/* ========================================== */}
      {/* MAIN UPLOAD PANEL */}
      {/* ========================================== */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8 max-w-4xl">

        {/* ========================================== */}
        {/* TITLE */}
        {/* ========================================== */}

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-slate-100 p-4 rounded-2xl">

            <UploadCloud
              className="text-slate-700"
              size={28}
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Upload ESG Dataset
            </h2>

            <p className="text-slate-500 mt-1">
              Supported formats:
              CSV, XLSX
            </p>

          </div>

        </div>

        {/* ========================================== */}
        {/* FILE DROP AREA */}
        {/* ========================================== */}

        <label className="border-2 border-dashed border-slate-300 rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-500 transition-all bg-slate-50">

          <FileSpreadsheet
            size={50}
            className="text-slate-400 mb-4"
          />

          <h3 className="text-lg font-semibold text-slate-800">

            {file
              ? file.name
              : "Select a file to upload"}

          </h3>

          <p className="text-slate-500 text-sm mt-2">

            Drag and drop your ESG dataset
            here or click to browse.

          </p>

          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

        </label>

        {/* ========================================== */}
        {/* STATUS MESSAGES */}
        {/* ========================================== */}

        {success && (

          <div className="mt-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-2xl flex items-center gap-3">

            <CheckCircle2 size={22} />

            {success}

          </div>
        )}

        {error && (

          <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl flex items-center gap-3">

            <AlertCircle size={22} />

            {error}

          </div>
        )}

        {/* ========================================== */}
        {/* ACTIONS */}
        {/* ========================================== */}

        <div className="flex justify-end mt-8">

          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`px-8 py-4 rounded-2xl text-white font-semibold transition-all ${
              uploading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-slate-900 hover:bg-slate-800"
            }`}
          >

            {uploading
              ? "Uploading..."
              : "Start Ingestion"}

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}