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
  let query = { _id: serviceID };

  try {
    let data = await Service.deleteOne(query);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Details a service.........................................
export const servicesDetailsService = async (req, res) => {
  try {
    let serviceID = new ObjectID(req.params.serviceID);
    let MatchStage = { $match: { _id: serviceID } };

    let joinWithBlogsStage = {
      $lookup: {
        from: "services",
        localField: "_id",
        foreignField: "_id",
        as: "service",
      },
    };

    let unwindUserStage = { $unwind: "$service" };

    let BlogUserProjectionStage = {
      $project: {
        _id: 1,
        name: 1,
        provider: 1,
        date: 1,
        image: 1,
        createdAt: 1,
        description: 1,
      },
    };

    let data = await Service.aggregate([
      MatchStage,
      joinWithBlogsStage,
      unwindUserStage,
      BlogUserProjectionStage,
    ]);

    return {
      status: "success",
      message: "Blog Detail Successfully",
      data: data,
    };
  } catch (err) {
    return {
      status: "failed",
      messages: "Blog Details Failed",
      error: err.toString(),
    };
  }
};
