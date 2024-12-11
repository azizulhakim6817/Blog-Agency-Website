import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressMongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import helmet from "helmet";
import xss from "xss-clean";
import ratLimit from "express-rate-limit";
import mongoose from "mongoose";

//const path = require("path");
import {
  DefaultErrorHandler,
  NotFoundError,
} from "./app/utility/errorHandle.js";

import {
  DATABASE,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";

import router from "./app/Routes/api.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(express.json());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());

// !Database connection..................
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log("Database is not connected");
    console.log(error);
    process.exit(1);
  });

//!Cache control...................
app.set("etag", WEB_CACHE);

//! user 1 minutes click to handle.........
const limiter = ratLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

app.use("/api", router);

//!error handler...................
//Not Found Error Handler
app.use(NotFoundError);

// Default Error Handler
app.use(DefaultErrorHandler);

export default app;
