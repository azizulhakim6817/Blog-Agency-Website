import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import jwt from "jsonwebtoken";
export const EncodeToken = (email, user_id) => {
  let key = JWT_KEY;
  let expire = JWT_EXPIRE_TIME;
  let payload = { email, user_id };
  return jwt.sign(payload, key, { expiresIn: expire });
};

export const DecodeToken = (token) => {
  try {
    let key = JWT_KEY;
    let expire = JWT_EXPIRE_TIME;
    let decoded = jwt.verify(token, key);

    // Refresh token add
    if (!!decoded.email === true) {
      let RefreshToken = jwt.sign(
        { email: decoded.email, user_id: decoded.user_id },
        key,
        {
          expiresIn: expire,
        }
      );
      return { RefreshToken, email: decoded.email, user_id: decoded.user_id };
    }
  } catch (err) {
    return null;
  }
};
