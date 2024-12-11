import React, { useEffect } from "react";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import TeamStore from "./../../../../store/AboutStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ReadTeamComponent = () => {
  const { TeamsList, TeamsListRequest, DeleteTeamRequest } = TeamStore();

  useEffect(() => {
    (async () => {
      await TeamsListRequest();
    })();
  }, []);

  const DeleteButton = async (id) => {
    await DeleteTeamRequest(id);
    await TeamsListRequest();
    toast.success("Team Delete OK.");
  };

  return (
    <div className="container">
      <div className="d-flex gap-3 my-3">
        <Link to={`/dashboard`} className="btn btn-secondary">
          DashBoard
        </Link>
        <Link to={`/create-team-page`} className="btn btn-success">
          Create Team List
        </Link>
      </div>

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
                <tr key={i}>
                  <td>{i + 1}</td>

                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>
                    <StarRatings
                      rating={parseFloat(item?.rating) || 0}
                      starRatedColor="#f7de00"
                      starDimension="20px"
                      starSpacing="2px"
                    />
                  </td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>
                    <Link
                      to={`/updateTeamPage/${item._id}`}
                      className="btn btn-success btn-sm mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => DeleteButton(item?._id)}
                    >
                      Delete
                    </button>
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
