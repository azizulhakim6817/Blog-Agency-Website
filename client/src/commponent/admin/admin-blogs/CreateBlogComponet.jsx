import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BlogStore from "./../../../../store/BlogStore";
import { useEffect } from "react";

const CreateBlogComponet = () => {
  const navigate = useNavigate();

  const {
    BlogFormValue,
    BlogFormOnChange,
    BlogListRequest,
    CreateBlogRequest,
  } = BlogStore();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, []);

  const SubmitButton = async () => {
    await CreateBlogRequest(BlogFormValue);
    BlogFormOnChange("title", "");
    BlogFormOnChange("author", "");
    BlogFormOnChange("description", "");
    BlogFormOnChange("date", "");
    BlogFormOnChange("image", "");

    navigate(`/blog-page`);
    toast.success("created success");
  };

  return (
    <div className="container my-4">
      <h2 className="colorText text-center mb-4">Update a Blogs</h2>
      <form className="p-4 bg-light rounded shadow">
        {/* Service Name */}
        <div className="mb-3">
          <label htmlFor="blogTitleNameInput" className="form-labe fw-semibold">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="blogTitleNameInput"
            placeholder="Enter service name"
            value={BlogFormValue.title}
            onChange={(e) => BlogFormOnChange("title", e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label fw-semibold">
            Description:
          </label>
          <textarea
            className="form-control"
            id="descriptionInput"
            rows="4"
            placeholder="Write a brief description..."
            value={BlogFormValue.description}
            onChange={(e) => BlogFormOnChange("description", e.target.value)}
          />
        </div>

        {/* Upload Image */}
        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label fw-semibold">
            Upload Image:
          </label>
          <input
            id="imageInput"
            type="text"
            className="form-control"
            value={BlogFormValue.image}
            onChange={(e) => BlogFormOnChange("image", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary w-25 fw-bold mb-5"
            onClick={SubmitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogComponet;
