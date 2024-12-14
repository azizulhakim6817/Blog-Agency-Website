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
  const [blogsPerPage] = useState(3);

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
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-8">
            {BlogDetails?.map((item, i) => (
              <div key={i} className="mt-5 mx-auto">
                <div className="mx-auto">
                  <img className="img-fluid" src={item?.image} alt="Blog" />
                </div>
                <div className="d-flex justify-content-between my-3 mx-2 m-0 p-0 text-secondary">
                  <p className="m-0 p-0">{item?.user?.fullName}</p>
                  <p className="m-0 p-0">
                    {convertToLocalTime(item?.createdAt)}
                  </p>
                </div>
                <h3 className="m-0 p-0">{item?.title}</h3>
                <p className="mt-3 m-0 p-0">{item?.description}</p>
              </div>
            ))}
          </div>

          <div className="col-12 col-md-4 mt-5 ">
            <h1 className="colorText fw-bold ">Related Blogs :</h1>
            {/* Blog List with Pagination */}
            {currentBlogs && currentBlogs.length > 0 ? (
              currentBlogs.map((item, i) => (
                <div key={i} className="mb-4 mt-4">
                  <div className="card shadow-lg">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="blogs"
                      style={{ objectFit: "cover", height: "200px" }}
                    />

                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="text-secondary">{item?.author}</p>
                        <p className="card-title text-secondary">
                          {convertToLocalTime(item?.createdAt)}
                        </p>
                      </div>
                      <h5 className="card-title fw-bold">
                        {item.title.slice(0, 20)}
                      </h5>

                      <p className="card-text">
                        {item.description.slice(0, 60)}
                      </p>
                      <div className="d-flex justify-content-start">
                        <Link
                          to={`/blogDetails/${item?._id}`}
                          type="button"
                          className="btn text-primary colorText p-0 m-0"
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

            {/* Pagination */}
            <div className="col-12 d-flex justify-content-center mt-4">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(safeBlogList.length / blogsPerPage)} // Total number of pages
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick} // Handle page change
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
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
