import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default:false
    },
    sold:{
        type: Number,
        default: 0
    }
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;