import Product from "../models/Product.js";

export default {

    getProducts: async function (req, res, next) {
        try {
            const products = await Product.find().populate("category")
            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async function (req, res, next) {
        try {
            const {title, price, description, image, category} = req.body;
            if(!image) return res.status(400).json({msg: "pls add an image"});
            const newProduct = new Product({
                title: title.toLowerCase(),
                price,
                description,
                image,
                category
            });
            await newProduct.save();
            res.json({msg: "created a new product"});
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async function (req, res, next) {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.json({msg: "deleted a product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async function (req, res, next) {
        try {
            const {title, price, description, image, category} = req.body;
            
            await Product.findByIdAndUpdate(req.params.id, {
                title: title.toLowerCase(), price, description, image, category
            })
            res.json({msg: "updated a product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
