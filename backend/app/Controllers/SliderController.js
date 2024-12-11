import {
  createSliderService,
  deleteSliderServices,
  readSliderServices,
  updateSliderServices,
} from "../Service/SliderService.js";

//! create service........................................
export const createSlider = async (req, res) => {
  let result = await createSliderService(req);
  return res.json(result);
};
//! Read Services service........................................
export const readSlider = async (req, res) => {
  let result = await readSliderServices(req);
  return res.json(result);
};
//! Update service........................................
export const updateSlider = async (req, res) => {
  let result = await updateSliderServices(req);
  return res.json(result);
};
//! delete service........................................
export const deleteSlider = async (req, res) => {
  let result = await deleteSliderServices(req);
  return res.json(result);
};
