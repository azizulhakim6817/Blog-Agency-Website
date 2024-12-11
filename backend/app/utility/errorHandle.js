// External Import
import fs from "fs";

// Create Custom Error
export const CreateError = (msg, status) => {
  const e = new Error(msg);
  e.status = status; // Example: 404
  return e;
};

// Not Found Error Handler (Middleware)
export const NotFoundError = (req, res, next) => {
  const data = req.originalUrl;
  const error = CreateError(`Your Requested URL ${data} Not Found`, 404);
  next(error);
};

// Default Error Handler (Middleware)
export const DefaultErrorHandler = (err, req, res, next) => {
  const message = err.message || "Server Error Occurred";
  const status = err.status || 500;

  res.status(status).json({
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Hide stack trace in production
  });

  // Log the error into a file (asynchronously)
  const logMessage = `${message} || ${
    err.stack || "No Stack Trace"
  } || ${new Date().toISOString()}\n`;
  fs.appendFile("error.log", logMessage, (writeErr) => {
    if (writeErr) {
      console.error("Error logging to file:", writeErr.message);
    }
  });
};
