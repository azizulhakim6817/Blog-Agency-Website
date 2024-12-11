import React, { useEffect } from "react";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import TeamStore from "./../../../../store/AboutStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ReadTeamComponent = () => {
  const { TeamsList, TeamsListRequest, DeleteTeamRequest } = TeamStore();

  // Fetch team data on component mount
  useEffect(() => {
    (async () => {
      try {
        await TeamsListRequest();
      } catch (error) {
        toast.error("Failed to fetch team data.");
      }
    })();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await DeleteTeamRequest(id);
      console.log(id);
      await TeamsListRequest(); // Refresh the team list
      toast.success("Team deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete team.");
    }
  };

  return (
    <div className="container">
      {/* Navigation Links */}
      <div className="d-flex gap-3 my-3">
        <Link to={`/dashboard`} className="btn btn-secondary">
          DashBoard
        </Link>
        <Link to={`/create-team-page`} className="btn btn-success">
          Create Team List
        </Link>
      </div>

      {/* Team Table */}
      {TeamsList && TeamsList.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Role</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {TeamsList.map((item, i) => (
                <tr key={item._id || i}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={item?.image || "/placeholder.png"}
                      alt={item?.name || "Team Member"}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{item?.name || "N/A"}</td>
                  <td>{item?.role || "N/A"}</td>
                  <td>
                    <StarRatings
                      rating={parseFloat(item?.rating) || 0}
                      starRatedColor="#f7de00"
                      starDimension="20px"
                      starSpacing="2px"
                    />
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        to={`/updateTeamPage/${item?._id}`}
                        className="btn text-info"
                        title="Edit"
                      >
                        <BiEdit className="fs-3" />
                      </Link>
                      <button
                        type="button"
                        className="btn text-danger"
                        title="Delete"
                        onClick={() => handleDelete(item?._id)}
                      >
                        <MdDeleteForever className="fs-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No teams available. Please create one.</div>
      )}
    </div>
  );
};

export default ReadTeamComponent;
