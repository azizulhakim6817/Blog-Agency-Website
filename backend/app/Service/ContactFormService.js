import ContactModel from "../Models/ContactModel.js";

//! Create a new service........................................
export const createConstactService = async (req, res) => {
  try {
    const serviceData = req.body;
    const newService = await ContactModel.create(serviceData);

    return { status: "success", data: newService };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read all services........................................
export const readconstaCtServices = async (req, res) => {
  try {
    const services = await ContactModel.find({});

    return { status: "success", data: services };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
