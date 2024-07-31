"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotValidation = void 0;
const zod_1 = require("zod");
const createSlotValidationSchema = zod_1.z.object({
    room: zod_1.z.string(),
    date: zod_1.z.string().optional(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    pricePerSlot: zod_1.z.number(),
    isBooked: zod_1.z.boolean()
});
exports.slotValidation = {
    createSlotValidationSchema,
};
