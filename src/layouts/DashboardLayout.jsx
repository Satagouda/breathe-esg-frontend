import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {

  // ==========================================
  // LOGOUT FUNCTION
  // ==========================================

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";
  };

  return (

    <div className="flex min-h-screen">

      {/* ========================================== */}
      {/* SIDEBAR */}
      {/* ========================================== */}

      <aside className="w-64 bg-black text-white p-6 flex flex-col">

        <div>

          <h1 className="text-2xl font-bold mb-8">
            Breathe ESG
          </h1>

          <nav className="space-y-4">

            <Link to="/dashboard" className="block hover:text-gray-300">
              Dashboard
            </Link>

            <Link to="/upload" className="block hover:text-gray-300">
              Upload Data
            </Link>

            <Link to="/review" className="block hover:text-gray-300">
              Review Records
            </Link>

            <Link to="/analytics" className="block hover:text-gray-300">
              Analytics
            </Link>

          </nav>

        </div>

        {/* ========================================== */}
        {/* LOGOUT BUTTON */}
        {/* ========================================== */}

        <button
          onClick={logout}
          className="mt-10 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </aside>

      {/* ========================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================== */}

      <main className="flex-1 bg-gray-100 p-8">

        {children}

      </main>

    </div>
  );
}