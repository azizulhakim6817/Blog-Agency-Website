import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import jwt from "jsonwebtoken";
export const EncodeToken = (email) => {
  let key = JWT_KEY;
  let expire = JWT_EXPIRE_TIME;
  let payload = { email };
  return jwt.sign(payload, key, { expiresIn: expire });
};

export const DecodeToken = (token) => {
  try {
    let key = JWT_KEY;
    let expire = JWT_EXPIRE_TIME;
    let decoded = jwt.verify(token, key);

    // Refresh token add
    if (!!decoded.email === true) {
      let RefreshToken = jwt.sign({ email: decoded.email }, key, {
        expiresIn: expire,
      });
      return { RefreshToken, email: decoded.email };
    }
  } catch (err) {
    return null;
  }
};
