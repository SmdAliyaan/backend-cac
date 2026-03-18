import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}); 

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    orderItems: {
        type: [orderItemSchema],
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending",
    }
    
},{timestamps:true})