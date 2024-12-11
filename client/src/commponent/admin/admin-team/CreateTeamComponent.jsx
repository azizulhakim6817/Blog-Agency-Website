import React, { useEffect } from "react";
import TeamStore from "../../../../store/AboutStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateTeamComponent = () => {
  let Navigate = useNavigate();
  const {
    TeamFromValue,
    TeamFormOnChange,
    CreateTeamRequest,
    TeamsListRequest,
  } = TeamStore();

  useEffect(() => {
    (async () => {
      await TeamsListRequest();
    })();
  }, []);
  const submitButton = async () => {
    await CreateTeamRequest(TeamFromValue);
    TeamFormOnChange("name", "");
    TeamFormOnChange("role", "");
    TeamFormOnChange("description", "");
    TeamFormOnChange("rating", "");
    TeamFormOnChange("image", "");

    Navigate("/team-page");
    toast.success("Team created successfully!");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Create a New Team Member</h2>
      <form className="p-4 bg-light rounded shadow">
        {/* name Input */}
        <div className="mb-3">
          <label htmlFor="TeamnameInput" className="form-label">
            Team Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="TeamnameInput"
            placeholder="Name"
            value={TeamFromValue.name}
            onChange={(e) => {
              TeamFormOnChange("name", e.target.value);
            }}
          />
        </div>

        {/* role Input */}
        <div className="mb-3">
          <label htmlFor="TeamRoleinput" className="form-label">
            Role:
          </label>
          <input
            type="text"
            className="form-control"
            id="TeamRoleinput"
            placeholder="Enter role"
            value={TeamFromValue.role}
            onChange={(e) => TeamFormOnChange("role", e.target.value)}
          />
        </div>

        {/* description Input */}
        <div className="mb-3">
          <label htmlFor="TeamDescriptionInput" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="TeamDescriptionInput"
            placeholder="Enter description"
            value={TeamFromValue.description}
            onChange={(e) => {
              TeamFormOnChange("description", e.target.value);
            }}
          />
        </div>

        {/* Rating Input */}
        <div className="mb-3">
          <label htmlFor="ratingInput" className="form-label">
            Rating:
          </label>
          <input
            type="text"
            className="form-control"
            id="ratingInput"
            placeholder="Enter rating"
            value={TeamFromValue.rating}
            onChange={(e) => {
              TeamFormOnChange("rating", e.target.value);
            }}
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
            placeholder={"image url"}
            value={TeamFromValue.image}
            onChange={(e) => TeamFormOnChange("image", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="button"
            onClick={submitButton}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTeamComponent;
