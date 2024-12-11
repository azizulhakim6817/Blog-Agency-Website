import express from "express";
const router = express.Router();
import * as UsersController from "../Controllers/UsersController.js";
import * as ServiceController from "../Controllers/ServiceController.js";
import * as BlogController from "../Controllers/BlogsController.js";
import * as TeamsController from "../Controllers/TeamController.js";
import * as SliderController from "../Controllers/SliderController.js";
import * as ContactFormController from "../Controllers/ContactFormController.js";
import AuthMiddleware from "../Middleware/AuthenVerity.js";

// login...........................
router.post("/Register", UsersController.Register);
router.post("/Login", UsersController.Login);

//users Loign .................................
router.get("/UserOTP/:email", UsersController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UsersController.VerifyLogin);
router.get("/UserLogout", AuthMiddleware, UsersController.UserLogout);

//! Service ...................................................................
router.post("/creat-services", AuthMiddleware, ServiceController.services);
router.get("/readService", ServiceController.readService);
router.post(
  "/services-update/:serviceID",
  AuthMiddleware,
  ServiceController.updateService
);
router.get(
  "/services-delete/:serviceID",
  AuthMiddleware,
  ServiceController.deleteService
);

//! Blogs ...................................................................
router.post("/creat-blog", AuthMiddleware, BlogController.blog);
router.get("/readBlog", BlogController.readBlog);
router.post("/blog-update/:blogID", AuthMiddleware, BlogController.updateBlog);
router.get("/blog-delete/:blogID", AuthMiddleware, BlogController.deleteBlog);

//! Teams ...................................................................
router.post("/creat-teams", AuthMiddleware, TeamsController.teams);
router.get("/read-teams", TeamsController.readTeams);
router.post(
  "/team-update/:teamdID",
  AuthMiddleware,
  TeamsController.updateTeams
);
router.get(
  "/team-delete/:teamdID",
  AuthMiddleware,
  TeamsController.deleteTeams
);

//! Slider section ...................................................................
router.post("/creat-slider", AuthMiddleware, SliderController.createSlider);
router.get("/read-slider", SliderController.readSlider);
router.post(
  "/updats-slider/:sliderID",
  AuthMiddleware,
  SliderController.updateSlider
);
router.delete(
  "/delete-slider/:sliderID",
  AuthMiddleware,
  SliderController.deleteSlider
);
//! Contact section ...................................................................
router.post("/contact", ContactFormController.constact);
router.get("/read-contact", ContactFormController.readContact);

export default router;
