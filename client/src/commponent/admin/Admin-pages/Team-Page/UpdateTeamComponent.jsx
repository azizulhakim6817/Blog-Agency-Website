import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import TeamStore from "./../../../../../store/AboutStore";

const UpdateTeamComponent = () => {
  const Navigate = useNavigate();

  const {
    TeamsListRequest,
    UpdateTeamRequest,
    TeamFormOnChange,
    TeamFromValue,
  } = TeamStore();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await TeamsListRequest();
    })();
  }, [id]);

  const SubmitButton = async () => {
    let res = await UpdateTeamRequest(id, TeamFromValue);
    if (res === true) {
      await TeamsListRequest();
      Navigate("/team-page");
      toast.success("created success");
    } else {
      toast.error("failed to update Service");
    }
  };

  return (
    <div className="container my-4 ">
      <h2 className="text-center mb-4 colorText">Update a Team</h2>
      <form className="p-4 bg-light rounded shadow ">
        {/* Service Name........................................ */}
        <div className="mb-3">
          <label htmlFor="NameInput" className="form-label fw-semibold">
            Team Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="NameInput"
            placeholder="Enter service name"
            value={TeamFromValue.name}
            onChange={(e) => TeamFormOnChange("name", e.target.value)}
          />
        </div>

        {/* Provider Name............................... */}
        <div className="mb-3">
          <label htmlFor="roleInput" className="form-label fw-semibold">
            Role:
          </label>
          <input
            type="text"
            className="form-control"
            id="roleInput"
            placeholder="Enter provider name"
            value={TeamFromValue.role}
            onChange={(e) => {
              TeamFormOnChange("role", e.target.value);
            }}
          />
        </div>

        {/* Rating................................................... */}
        <div className="mb-3">
          <label htmlFor="radingInput" className="form-label fw-semibold">
            Rating:
          </label>
          <input
            type="text"
            className="form-control"
            id="radingInput"
            placeholder="Enter provider name"
            value={TeamFromValue.rating}
            onChange={(e) => {
              TeamFormOnChange("rating", e.target.value);
            }}
          />
        </div>

        {/* Upload Image................................................*/}
        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label fw-semibold">
            Upload Image:
          </label>
          <input
            id="imageInput"
            type="text"
            className="form-control"
            placeholder={"image url"}
            value={TeamFromValue.image}
            onChange={(e) => TeamFormOnChange("image", e.target.value)}
          />
        </div>

        {/* Submit Button...............................*/}
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

export default UpdateTeamComponent;
