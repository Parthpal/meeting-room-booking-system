"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        required: true,
        unique: true
    },
    floorNo: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    pricePerSlot: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        validate: {
            validator: (amenities) => amenities.every(amenity => amenity === 'Projector' || amenity === 'Whiteboard'),
            message: 'Invalid amenity. Only "Projector" or "Whiteboard" are allowed.',
        },
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true,
    }
}, {
    timestamps: true,
});
exports.Room = (0, mongoose_1.model)('Room', roomSchema);
