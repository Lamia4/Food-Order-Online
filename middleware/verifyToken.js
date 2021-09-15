import validToken from "../lib/token.js";

const verifyToken = (req, res, next) => {
    const correctToken = validToken.checkToken(req.body.token);
    console.log(correctToken, "show correctToken");
    next();
};

export default verifyToken