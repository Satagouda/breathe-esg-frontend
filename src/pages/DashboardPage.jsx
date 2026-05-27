import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardPage() {

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        ESG Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Total Records
          </p>

          <h2 className="text-3xl font-bold">
            1,240
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Approved
          </p>

          <h2 className="text-3xl font-bold">
            920
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Flagged
          </p>

          <h2 className="text-3xl font-bold text-yellow-600">
            112
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">
            Locked
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            650
          </h2>
        </div>

      </div>

    </DashboardLayout>
  );
}