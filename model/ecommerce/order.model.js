import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    qunatity:{
        type: Number,
        require: true
    }
})

const addressSchema = new mongoose.Schema({
    address:{
        type: String,
        require: true,
        lowercase: true
    },
    pincode:{
        type: Number,
        require: true,
    },
    landmark:{
        type: String,
        require: true,
        lowercase: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    orderItems: {
        type: [orderItemSchema],
        require: true
    },
    address: {
        type: addressSchema,
        require: true
    },
    status:{
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

},{timestamps: true});

export const Order = mongoose.model("Order",orderSchema)