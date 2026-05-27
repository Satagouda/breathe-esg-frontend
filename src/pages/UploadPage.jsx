import DashboardLayout from "../layouts/DashboardLayout";

import { useState } from "react";

import api from "../api/axios";


export default function UploadPage() {

  const [file, setFile] = useState(null);

  const [sourceType, setSourceType] = useState("SAP");

  const handleUpload = async () => {

    const formData = new FormData();

    formData.append("file", file);

    formData.append("tenant_id", 1);

    formData.append("data_source_id", 1);

    formData.append("source_type", sourceType);

    try {

      await api.post(
        "/batches/upload/",
        formData
      );

      alert("Upload successful");

    } catch (error) {

      alert("Upload failed");
    }
  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Upload ESG Data
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-xl">

        <select
          className="w-full border p-3 rounded-lg mb-4"
          value={sourceType}
          onChange={(e) =>
            setSourceType(e.target.value)
          }
        >

          <option value="SAP">
            SAP
          </option>

          <option value="UTILITY">
            Utility
          </option>

          <option value="TRAVEL">
            Travel
          </option>

        </select>

        <input
          type="file"
          className="mb-4"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <button
          onClick={handleUpload}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Upload
        </button>

      </div>

    </DashboardLayout>
  );
}