import React from 'react';
import AdminLayout from "../adminLayout/AdminLayout.jsx";
import ReadBlogComponent from "../admin-blogs/ReadBlogComponent.jsx";

const AdminBlogPage = () => {
    return (
        <AdminLayout>
            <ReadBlogComponent />
        </AdminLayout>
    );
};

export default AdminBlogPage;