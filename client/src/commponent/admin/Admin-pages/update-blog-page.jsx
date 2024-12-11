import React from 'react';
import AdminLayout from "../adminLayout/AdminLayout.jsx";
import UpdateBlogComponent from "../admin-blogs/updateBlogComponent.jsx";

const UpdateBlogPage = () => {
    return (
        <AdminLayout>
            <UpdateBlogComponent />
        </AdminLayout>
    );
};

export default UpdateBlogPage;