import User from "../models/User.js";

export default {

    readOne: async function (req, res, next) {
        try {
            const user = await User.readOne(req.params.userId);
            if (!user) return res.status(404).send();
            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    register: async function (req, res, next) {
        try {
            if(await User.emailExist(req.body.email)){

                const err = new Error("user already exists");
                err.type = "exists";
                throw err;
            }
            const result = await User.createUser(
                req.body.name,
                req.body.email,
                req.body.password
            );
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            const id = req.params.userId;
            const updatedUser = req.body;
            const result = await User.updateById(id, updatedUser);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            const result = await User.deleteById(req.params.userId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    addFoodToOrderList: async function (req, res, next) {
        try {
            const result = await User.addFoodToOrderList(req.params.userId, req.body.foodId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
};