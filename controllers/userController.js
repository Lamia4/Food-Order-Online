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
            const { name, email, password } = req.body;
            const user = await User.emailExist(email)
            if(user) return res.status(400).send("the email already exist");
            if(password.length < 6) return res.status(400).send("password must be at least 6 characters")
            const result = await User.register(
                name,
                email,
                password
            );
            if(result.role) return result.role +=1;
            console.log(result.role);
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