import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import UploadPage from "../pages/UploadPage";
import ReviewPage from "../pages/ReviewPage";
import AnalyticsPage from "../pages/AnalyticsPage";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={ <ProtectedRoute><DashboardPage /></ProtectedRoute>} />

        <Route path="/upload" element={ <ProtectedRoute><UploadPage /></ProtectedRoute>} />

        <Route path="/review" element={ <ProtectedRoute><ReviewPage /></ProtectedRoute>} />

        <Route path="/analytics" element={ <ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />

      </Routes>

    </BrowserRouter>
  );
}