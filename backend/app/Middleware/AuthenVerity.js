import { DecodeToken } from "../utility/tokenUtility.js";

export default (req, res, next) => {
    let token = req.headers.token; 
    if (!token) {
      token = req.cookies.token; // Defalt token from Cookie manage...
    }
    let decoded = DecodeToken(token)

    if (decoded === null) {
        res.status(401).json({ status: "fail", message: "Unauthorized" })
    }
    else {

        // Set cookie for refresh token
        let options = {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: true,
            sameSite: "none",
            secure: true,
        };
        res.cookie("Token", decoded.RefreshToken, options);
        let email = decoded.email;
        let user_id = decoded.user_id;

        req.headers.email = email;
        req.headers.user_id = user_id;
        next();
    }
}