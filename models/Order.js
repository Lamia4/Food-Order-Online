// import mongoose from "mongoose";

// const orderItemSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//         required: true
//     },  
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true
//     },
//     price:{
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     category:{
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "Category"
//     },
//     quantity: {
//         type: Number,
//         default: 1
//     },
//     image:{
//         type: Object,
//         required: true
//     }
// })

// const orderSchema = new mongoose.Schema({

//     userID: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "User"
//     },
//     cart: {
//         type: [orderItemSchema],
//         required: true
//     },
//     totalPrice: {
//         type: Number,
//         required: true
//     }
// },
// {
//     timestamps: true
// });

// const Order = mongoose.model("Order", orderSchema);

// export default Order;