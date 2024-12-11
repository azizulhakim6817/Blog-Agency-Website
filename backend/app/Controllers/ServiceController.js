import {
  createService,
  readServices,
  deleteServices,
  updateServices,
} from "../Service/Service.js";

//! create service........................................
export const services = async (req, res) => {
  let result = await createService(req);
  return res.json(result);
};
//! Read Services service........................................
export const readService = async (req, res) => {
  let result = await readServices(req);
  return res.json(result);
};
//! Update service........................................
export const updateService = async (req, res) => {
  let result = await updateServices(req);
  return res.json(result);
};
//! delete service........................................
export const deleteService = async (req, res) => {
  let result = await deleteServices(req);
  return res.json(result);
};
