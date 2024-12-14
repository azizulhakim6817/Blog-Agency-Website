import { useEffect } from "react";
import NoData from "../layout/NoData.jsx";
import BlogStore from "./../../../store/BlogStore";
import { Link } from "react-router-dom";
import { convertToLocalTime } from "./../../../utility/TimeStamps";

const Blog = () => {
  const { BlogList, BlogListRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <div className="row">
        {/* Blog contains................................ */}
        <div className=" my-3">
          <div className=" mt-3">
            <div className=" d-flex flex-column ">
              <h3 className=" colorText fw-medium ">Our Blogs</h3>
              <p className=" text-secondary fs-5 ">Your journey starts here</p>
              <hr></hr>
            </div>
          </div>
        </div>
        {/* All blog API called....................................... */}
        {BlogList && BlogList.length > 0 ? (
          BlogList.map((item, i) => (
            <div key={i} className="col-12 col-md-3 mb-4 p-2">
              <div className="card shadow-lg cardHover">
                <img src={item.image} className="card-img-top" alt="blogs" />
                <div className="d-flex justify-content-between  text-secondary  px-3 pb-1 m-0 p-0">
                  <p className="CartDate m-0 p-0 fs-6 ">
                    {item?.user?.fullName ? item.user.fullName : "Unknown user"}
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
                    {item.description.slice(0, 60)}...
                  </p>
                  <div className="d-flex justify-content-start">
                    <Link
                      to={`/blogDetails/${item?._id}`}
                      type="button"
                      className=" btn cardBtn p-1 m-1"
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
    </div>
  );
};

export default Blog;
