"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'Room id is required'],
        ref: 'Room',
    },
    date: {
        type: String
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
        required: true,
    }
}, {
    timestamps: true,
});
exports.Slot = (0, mongoose_1.model)('slot', slotSchema);
