import User from "../models/User.js";
import getToken from "../lib/token.js";

export default {
    loginByEmail: async function (req, res, next) {
        try {
            const { name, email, password } = req.body;
            const authenticatedUser = await User.authenticate(email, password);
            if(authenticatedUser){
                const token = await getToken.createToken(name, email);
                res.cookie("token", token, {
                    maxAge: 60 * 1000,
                    httpOnly: true,
                })
                res.send({token, ...authenticatedUser._doc})
            }
            else {
                res.send("authentication failed")
            }
        } catch (error) {
            next(error);
        }
    },
    logout : async function (req, res) {
        res.clearCookie("token");
        res.send("du bist ausgeloggt");
    }

}