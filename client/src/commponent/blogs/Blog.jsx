import { useEffect } from "react";
import NoData from "../layout/NoData.jsx";
import BlogStore from "./../../../store/BlogStore";

const Blog = () => {
  const { BlogList, BlogListRequest } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })()
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center ">
      <div className="row">
        {/* Blog contains................................ */}
        <div className=" my-3">
          <div className=" mt-3">
            <div className=" d-flex flex-column align-items-center justify-content-center text-center">
              <h1 className=" colorText fw-medium ">Our Blogs</h1>
              <h3 className=" text-secondary fs-5 ">
                Your journey starts here
              </h3>
            </div>
          </div>
        </div>
        {/* All blog api called....................................... */}
        {BlogList && BlogList.length > 0 ? (
          BlogList.map((item, i) => (
            <div key={i} className="col-12 col-md-3 mb-4">
              <div className="card shadow-lg">
                <img src={item.image} className="card-img-top" alt="blogs" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-title  ">
                    Date: {item.createdAt.slice(0, 20)}
                  </p>
                  <p className="card-text">{item.description.slice(0, 60)}</p>
                  <div className="d-flex justify-content-start">
                    <button
                      type="button"
                      className="btn text-primary colorText p-0 m-0"
                    >
                      Read more
                    </button>
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
