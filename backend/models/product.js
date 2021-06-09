import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    price: {
        type: Number
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number
    },
    shipping: {
        type: Boolean,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);