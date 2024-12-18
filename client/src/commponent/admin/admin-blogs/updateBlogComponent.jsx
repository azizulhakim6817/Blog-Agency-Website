import { useEffect } from "react";
import BlogStore from "../../../../store/BlogStore.js";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateBlogComponent = () => {
  const navigate = useNavigate();
  const {
    BlogListRequest,
    updateBlogRequest,
    BlogFormOnChange,
    BlogFormValue,
  } = BlogStore();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
  }, [id]);

  const SubmitButton = async () => {
    let res = await updateBlogRequest(id, BlogFormValue);
    if (res === true) {
      await BlogListRequest();
      navigate(`/blog-page`);
      toast.success("created success");
    } else {
      toast.error("failed to create blog");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 colorText">Update a Blog</h2>
      <form className="p-4 bg-light rounded shadow ">
        {/* Title Name */}
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label fw-semibold">
            Title Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            placeholder="Enter blog title"
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
          ></textarea>
        </div>

        {/* Image Input */}
        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label fw-semibold">
            Upload Image:
          </label>
          <input
            id="imageInput"
            type="text"
            placeholder={"image url"}
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

export default UpdateBlogComponent;
