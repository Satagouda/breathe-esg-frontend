import Sidebar from "../components/layout/Sidebar";

import Topbar from "../components/layout/Topbar";


export default function DashboardLayout({
  children
}) {

  return (

    <div className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-8 overflow-auto">

        <Topbar />

        {children}

      </div>

    </div>
  );
}