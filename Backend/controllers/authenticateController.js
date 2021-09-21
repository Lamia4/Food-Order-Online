import User from "../models/User.js";
import getToken from "../lib/token.js";
import { json } from "express";

export default {
    loginByEmail: async function (req, res, next) {
        try {
            const { name, email, password } = req.body;
            const authenticatedUser = await User.authenticate(email, password);
            if(!authenticatedUser) return res.status(400).json({msg: "user is not authenticated"})
                const token = await getToken.createToken({id: authenticatedUser._id});
                const refreshToken = getToken.refreshToken({id :authenticatedUser._id});
                res.cookie("refreshToken", refreshToken, {
                    maxAge: 60 * 1000,
                    httpOnly: true,
                    path: "/user/refresh_token"
                })
                
                res.send({refreshToken, ...authenticatedUser._doc});
            
        } catch (error) {
            return res.status(500).json({msg: err.message});
        }
    },
    logout : async function (req, res) {
        res.clearCookie("token");
        res.send("du bist ausgeloggt");
    }

}