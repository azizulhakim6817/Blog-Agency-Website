import {
  createConstactService,
  readconstaCtServices,
} from "./../Service/ContactFormService.js";

//! create service........................................
export const constact = async (req, res) => {
  let result = await createConstactService(req);
  return res.json(result);
};
//! Read Services service........................................
export const readContact = async (req, res) => {
  let result = await readconstaCtServices(req);
  return res.json(result);
};
