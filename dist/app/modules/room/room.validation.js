"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = exports.amenitiesEnum = void 0;
const zod_1 = require("zod");
exports.amenitiesEnum = zod_1.z.enum(['Projector', 'Whiteboard']);
const createRoomValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    roomNo: zod_1.z.number(),
    floorNo: zod_1.z.number(),
    capacity: zod_1.z.number(),
    pricePerSlot: zod_1.z.number(),
    amenities: zod_1.z.array(exports.amenitiesEnum),
    isDeleted: zod_1.z.boolean()
});
exports.UserValidation = {
    createRoomValidationSchema,
};
