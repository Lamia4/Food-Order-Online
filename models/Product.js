import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true,
        unique: true
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    checked:{
        type: Boolean,
        default:false
    },
    sold:{
        type: Number,
        default: 0
    },   
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;