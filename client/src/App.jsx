import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import CreateServicePage from "./commponent/admin/Admin-pages/CreateServicePage.jsx";
import AdminBlogPage from "./commponent/admin/Admin-pages/admin-blog-page.jsx";
import UpdateBlogPage from "./commponent/admin/Admin-pages/update-blog-page.jsx";
import PrivetRoutes from "./PrivetRoute/privet-routes.jsx";
import NotFound from "./pages/NotFound.jsx";
import ReadServicePage from "./commponent/admin/Admin-pages/read-service-page.jsx";
import UpdateServicePage from "./commponent/admin/Admin-pages/update-service-page.jsx";
import ReadTeamPage from "./commponent/admin/Admin-pages/Team-Page/ReadTeamPage";
import CreateTeamPage from "./commponent/admin/Admin-pages/Team-Page/CreateTeamPage";
import UpdateTeamPage from "./commponent/admin/admin-team/UpdateTeamPage";
import AdminDashboardPage from './commponent/admin/dashboard/AdminDashboardPage';

// Dashboard Components
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Site Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />

        <Route path="/*" element={<NotFound />} />

        {/* Dashboard Routes (Wrapped in DashboardLayout) */}
        <Route
          path="/dashboard"
          element={
            <PrivetRoutes>
              <AdminDashboardPage />
            </PrivetRoutes>
          }
        />

        {/* Admin Blogs.............................. */}
        <Route
          path={"/blog-page"}
          element={
            <PrivetRoutes>
              <AdminBlogPage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/create-blogs-page"
          element={
            <PrivetRoutes>
              <CreateBlogPage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/update-blogs-page/:id"
          element={
            <PrivetRoutes>
              <UpdateBlogPage />
            </PrivetRoutes>
          }
        />

        {/*-------------service related route -------------*/}
        <Route
          path="/service-page"
          element={
            <PrivetRoutes>
              <ReadServicePage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/CreateServicePage"
          element={
            <PrivetRoutes>
              <CreateServicePage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/UpdateServicePage/:id"
          element={
            <PrivetRoutes>
              <UpdateServicePage />
            </PrivetRoutes>
          }
        />
        {/* Team Create............................................ */}
        <Route
          path="/team-page"
          element={
            <PrivetRoutes>
              <ReadTeamPage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/create-team-page"
          element={
            <PrivetRoutes>
              <CreateTeamPage />
            </PrivetRoutes>
          }
        />
        <Route
          path="/updateTeamPage/:id"
          element={
            <PrivetRoutes>
              <UpdateTeamPage />
            </PrivetRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
