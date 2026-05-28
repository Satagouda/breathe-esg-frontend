import {
  LayoutDashboard,
  Upload,
  ShieldCheck,
  BarChart3,
  LogOut
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";


export default function Sidebar() {

  const location = useLocation();

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";
  };

  const navItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Upload Data",
      path: "/upload",
      icon: Upload,
    },

    {
      name: "Review Records",
      path: "/review",
      icon: ShieldCheck,
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
  ];

  return (

    <aside className="w-72 bg-slate-900 text-white flex flex-col justify-between p-6">

      <div>

        {/* ========================================== */}
        {/* LOGO */}
        {/* ========================================== */}

        <div className="mb-10">

          <h1 className="text-3xl font-bold tracking-tight">
            Breathe ESG
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Sustainability Operations Platform
          </p>

        </div>

        {/* ========================================== */}
        {/* NAVIGATION */}
        {/* ========================================== */}

        <nav className="space-y-2">

          {navItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              location.pathname === item.path;

            return (

              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>

              </Link>
            );
          })}

        </nav>

      </div>

      {/* ========================================== */}
      {/* LOGOUT */}
      {/* ========================================== */}

      <button
        onClick={logout}
        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl transition-all"
      >

        <LogOut size={18} />

        Logout

      </button>

    </aside>
  );
}