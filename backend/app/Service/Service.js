import mongoose from "mongoose";
const ObjectID = mongoose.Types.ObjectId;
import Service from "../Models/ServiceModel.js";

//! Create a new service........................................
export const createService = async (req, res) => {
  try {
    let user_id = new ObjectID(req.headers.user_id);
    let reqBody = req.body;
    reqBody.userID = user_id;

    const newService = await Service.create(reqBody);

    return { status: "success", data: newService };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read all services........................................
export const readServices = async (req, res) => {
  try {
    const services = await Service.find({});

    return { status: "success", data: services };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Update a service.............................................
export const updateServices = async (req, res) => {
  //let user_id = new ObjectID(req.headers.user_id);
  let serviceID = req.params.serviceID;
  let reqBody = req.body;

  try {
    const service = await Service.findByIdAndUpdate(serviceID, reqBody, {
      new: true,
    });
    if (!service) {
      throw "Update is notfound!";
    }

    return { status: "success", data: service };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Delete a service.........................................
export const deleteServices = async (req, res) => {
  const serviceID = req.params.serviceID;
  let query = {_id: serviceID };

  try {
    let data = await Service.deleteOne(query);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
