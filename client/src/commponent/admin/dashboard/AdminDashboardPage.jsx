import React from "react";
import AdminLayout from "../adminLayout/AdminLayout.jsx";
import AdminDashboardComponent from './AdminDashboardComponent';

const AdminDashboardPage = () => {
  return <AdminLayout>
    <AdminDashboardComponent/>
  </AdminLayout>;
};

export default AdminDashboardPage;
