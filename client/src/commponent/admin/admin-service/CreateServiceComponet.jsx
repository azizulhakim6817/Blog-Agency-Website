import ServiceStore from "../../../../store/ServiceStore.js";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateServiceComponent = () => {
  const {
    ServiceFormValue,
    ServiceFormOnChange,
    ServiceRequest,
    CreateServiceRequest,
  } = ServiceStore();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await ServiceRequest();
    })();
  }, []);

  const SubmitButton = async () => {
    await CreateServiceRequest(ServiceFormValue);
    ServiceFormOnChange("name", "");
    ServiceFormOnChange("provider", "");
    ServiceFormOnChange("description", "");
    ServiceFormOnChange("image", "");

    navigate(`/service-page`);
    toast.success("Service created successfully!");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Create Service</h2>
      <form className="p-4 bg-light rounded shadow">
        {/* Service Name */}
        <div className="mb-3">
          <label htmlFor="serviceNameInput" className="form-label">
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

        {/* Provider Name */}
        <div className="mb-3">
          <label htmlFor="providerInput" className="form-label">
            Provider Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="providerInput"
            placeholder="Enter provider name"
            value={ServiceFormValue.provider}
            onChange={(e) => ServiceFormOnChange("provider", e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
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
          <label htmlFor="imageInput" className="form-label">
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
            className="btn btn-primary"
            onClick={SubmitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateServiceComponent;
