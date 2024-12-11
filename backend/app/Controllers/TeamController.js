import {
  deleteServices,
  updateServices,
  createService,
  readServices,
} from "../Service/TeamService.js";

//! create service........................................
export const teams = async (req, res) => {
  let result = await createService(req);
  return res.json(result);
};
//! Read Services service........................................
export const readTeams = async (req, res) => {
  let result = await readServices(req);
  return res.json(result);
};
//! Update service........................................
export const updateTeams = async (req, res) => {
  let result = await updateServices(req);
  return res.json(result);
};
//! delete service........................................
export const deleteTeams = async (req, res) => {
  let result = await deleteServices(req);
  return res.json(result);
};
