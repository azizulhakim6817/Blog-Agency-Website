import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { convertToLocalTime } from "../../../utility/TimeStamps";
import NoData from "../layout/NoData";
import BlogStore from "../../../store/BlogStore";
import ReactPaginate from "react-paginate";

const BlogDetails = () => {
  const { BlogDetails, BlogList, BlogDetailsRequest, BlogListRequest } =
    BlogStore();

  const { blogID } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [blogsPerPage] = useState(8); // Set to display 8 blogs per page

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const safeBlogList = Array.isArray(BlogList) ? BlogList : [];

  const indexOfLastBlog = (currentPage + 1) * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = safeBlogList.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    (async () => {
      await BlogDetailsRequest(blogID);
      await BlogListRequest();
    })();
  }, [blogID]);

  return (
    <div className="container my-5 ">
      {/* Blog Details */}
      {BlogDetails?.map((item, i) => (
        <div
          key={i}
          className="col-12 col-sm-12 col-md-12 col-lg-10 mt-5 mb-5 mx-auto cardHover"
        >
          <div className=" text-center">
            <img
              className=" rounded w-100 mx-auto imageWH"
              src={item?.image}
              alt="Blog"
            />
            <div className="d-flex gap-3  my-3 text-secondary p-0 m-0">
              <p>{item?.user?.fullName}</p>
              <p>{convertToLocalTime(item?.createdAt)}</p>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div className="md-5 w-75">
                <h4 className=" fw-semibold">{item?.title}</h4>
                <p className="mt-3 fs-5 text-secondary">{item?.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Blog List */}
      <h3 className="colorText  mb-4">More Blogs :</h3>
      <hr className=" w-100 pt-0 "></hr>
      <div className="row">
        {currentBlogs && currentBlogs.length > 0 ? (
          currentBlogs.map((item, i) => (
            <div key={i} className="col-12 col-md-3 mb-4 p-2">
              <div className="card shadow-lg cardHover">
                <img src={item.image} className="card-img-top " alt="blogs" />
                <div className="d-flex justify-content-between  text-secondary   px-3 pb-1 m-0 p-0">
                  <p className="CartDate m-0 p-0 fs-6 ">
                    {item?.user?.fullName || "Unknown user"}
                  </p>
                  <p className="CartDate m-0 p-0 fs-6">
                    {convertToLocalTime(item?.createdAt)}
                  </p>
                </div>
                <div className="card-body px-3  m-0 p-2">
                  <h5 className="card-title fw-bold">
                    {item.title.slice(0, 20)}
                  </h5>

                  <p className="card-text text-secondary">
                    {item.description.slice(0, 60)}
                  </p>
                  <div className="d-flex justify-content-start">
                    <Link
                      to={`/blogDetails/${item?._id}`}
                      type="button"
                      className="btn cardBtn p-1 m-1"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 d-flex justify-content-center">
            <NoData />
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4 d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(safeBlogList.length / blogsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
