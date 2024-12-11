import TeamModel from "../Models/TeamsModel.js";
import mongoose from "mongoose";
const ObjectID = mongoose.Types.ObjectId;

//! Create a new service........................................
export const createService = async (req, res) => {
  try {
    let user_id = new ObjectID(req.headers.user_id);
    let reqBody = req.body;
    reqBody.userID = user_id;

    const newTeams = await TeamModel.create(reqBody);
    return { status: "success", data: newTeams };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read all services........................................
export const readServices = async (req, res) => {
  try {
    const data = await TeamModel.find({});

    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Update a team.............................................
export const updateServices = async (req, res) => {
  let teamdID = req.params.teamdID;
  let reqBody = req.body;

  try {
    const teamDada = await TeamModel.findByIdAndUpdate(teamdID, reqBody, {
      new: true,
    });
    if (!teamDada) {
      throw "Update is notfound!";
    }

    return { status: "success", data: teamDada };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Delete a team.........................................
export const deleteServices = async (req, res) => {
  const teamdID = req.params.teamdID;
  let query = { _id: teamdID };

  try {
    let data = await TeamModel.deleteOne(query);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
