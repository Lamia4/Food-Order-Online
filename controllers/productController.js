import Product from "../models/Product.js";

export default {

    getProducts: async function (req, res, next) {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async function (req, res, next) {
        try {
            const {product_id, title, price, description, image, category} = req.body;
            if(!image) return res.status(400).json({msg: "pls add an image"});
            const product = await Product.findOne({product_id});
            if(product) return res.status(400).json({msg: "this product already exists"})
            const newProduct = new Product({
                product_id,
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
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async function (req, res, next) {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}