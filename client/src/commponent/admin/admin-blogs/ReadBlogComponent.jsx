import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import BlogStore from "./../../../../store/BlogStore";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ReadBlogComponent = () => {
  const { BlogList, BlogListRequest, DeleteBlogRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);

  const DeleteButton = async (id) => {
    await DeleteBlogRequest(id);
    await BlogListRequest();
    toast.success("Team Delete OK.");
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1 className="colorText fw-medium">Our Blogs </h1>
      </div>
      <div className="d-flex gap-3 my-3">
        <Link to={`/dashboard`} className="btn btn-secondary">
          DashBoard
        </Link>
        <Link to={`/create-blogs-page`} className="btn btn-primary">
          Create Blogs List
        </Link>
      </div>

      {BlogList && BlogList.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Role</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {BlogList.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>

                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>

                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>
                    <div className=" d-flex justify-content-center">
                      <Link
                        to={`/update-blogs-page/${item._id}`}
                        className="btn text-info"
                      >
                        <BiEdit className=" fs-3" />
                      </Link>
                      <button
                        type="button"
                        className="btn text-danger"
                        onClick={() => DeleteButton(item?._id)}
                      >
                        <MdDeleteForever className=" fs-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No teams available. Please create one.</div>
      )}
    </div>
  );
};

export default ReadBlogComponent;
