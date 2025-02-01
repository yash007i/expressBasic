import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
        lowercase: true
    },
    description: {
        type: String,
        require: true,
        minlength: 8
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    productImage: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
},{timestamps: true});

export const Product = mongoose.model("Product", productSchema)