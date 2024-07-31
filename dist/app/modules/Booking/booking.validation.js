"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingSchema = void 0;
const zod_1 = require("zod");
exports.bookingSchema = zod_1.z.object({
    room: zod_1.z.string(),
    slots: zod_1.z.array(zod_1.z.string()),
    user: zod_1.z.string(),
    date: zod_1.z.string(),
    totalAmount: zod_1.z.number(),
    isConfirmed: zod_1.z.enum(['confirmed', 'unconfirmed', 'canceled']),
    isDeleted: zod_1.z.boolean(),
});
