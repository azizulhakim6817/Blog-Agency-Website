import SliderModel from "./../Models/SliderModel.js";
import mongoose from "mongoose";
const ObjectID = mongoose.Types.ObjectId;

//! Create a new service........................................
export const createSliderService = async (req, res) => {
  try {
    let user_id = new ObjectID(req.headers.user_id);
    let reqBody = req.body;
    reqBody.userID = user_id;

    const newslider = await SliderModel.create(reqBody);
    return { status: "success", data: newslider };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read all services........................................
export const readSliderServices = async (req, res) => {
  try {
    const data = await SliderModel.find({});

    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Update a service.............................................
export const updateSliderServices = async (req, res) => {
  let user_id = new ObjectID(req.headers.user_id);
  let sliderID = req.params.sliderID;
  let reqBody = req.body;

  try {
    const updatedSlider = await SliderModel.updateOne(
      { _id: sliderID, userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );

    return { status: "success", data: updatedSlider };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Delete a service.........................................
export const deleteSliderServices = async (req, res) => {
  const userID = req.params.userID;
  let query = { user_id: userID };

  try {
    let data = await SliderModel.deleteOne(query);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
