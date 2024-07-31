"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'Room id is required'],
        ref: 'Room',
    },
    slots: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'slot',
            required: true
        }
    ],
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    isConfirmed: {
        type: String,
        enum: ['confirmed', 'unconfirmed', 'canceled'],
        default: 'unconfirmed',
        required: true
    },
    isDeleted: { type: Boolean, default: false, required: true },
}, {
    timestamps: true,
});
exports.Booking = (0, mongoose_1.model)('booking', bookingSchema);
