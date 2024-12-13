import ServiceStore from "../../../../store/ServiceStore.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateServiceComponent = () => {
  const navigate = useNavigate();
  const {
    ServiceFormValue,
    ServiceFormOnChange,
    ServiceRequest,
    updateServiceRequest,
  } = ServiceStore();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ServiceRequest();
    })();
  }, [id]);

  const SubmitButton = async () => {
    let res = await updateServiceRequest(id, ServiceFormValue);
    if (res === true) {
      await ServiceRequest();
      navigate(`/service-page`);
      toast.success("created success");
    } else {
      toast.error("failed to update Service");
    }
  };

  return (
    <div className="container my-4 ">
      <h2 className="text-center mb-4 colorText">Update a Service</h2>
      <form className="p-4 bg-light rounded shadow ">
        {/* Service Name */}
        <div className="mb-3">
          <label htmlFor="serviceNameInput" className="form-label fw-semibold">
            Service Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="serviceNameInput"
            placeholder="Enter service name"
            value={ServiceFormValue.name}
            onChange={(e) => ServiceFormOnChange("name", e.target.value)}
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
            value={ServiceFormValue.description}
            onChange={(e) => ServiceFormOnChange("description", e.target.value)}
          />
        </div>

       

        {/* Upload Image */}
        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label fw-semibold">
            Upload Image:
          </label>
          <input
            type="text"
            className="form-control"
            value={ServiceFormValue.image}
            onChange={(e) => ServiceFormOnChange("image", e.target.value)}
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

export default UpdateServiceComponent;
