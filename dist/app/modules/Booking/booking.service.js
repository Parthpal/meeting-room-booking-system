"use strict";
//create booking service
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingServices = void 0;
const mongoose_1 = require("mongoose");
const room_model_1 = require("../room/room.model");
const slot_model_1 = require("../slot/slot.model");
const booking_model_1 = require("./booking.model");
const createBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // console.log(payload);
    const slotLength = payload.slots.length;
    const room = yield room_model_1.Room.findById(payload.room);
    const totalAmount = (_a = room === null || room === void 0 ? void 0 : room.pricePerSlot) !== null && _a !== void 0 ? _a : 0 * slotLength;
    const isConfirmed = 'unconfirmed';
    const isDeleted = false;
    // Convert slot IDs to ObjectIds
    const slotIds = payload.slots.map((id) => new mongoose_1.Types.ObjectId(id));
    yield slot_model_1.Slot.updateMany({ _id: { $in: slotIds } }, { isBooked: true });
    const newBookingData = Object.assign(Object.assign({}, payload), { totalAmount,
        isConfirmed,
        isDeleted });
    yield booking_model_1.Booking.create(newBookingData);
    const getNewBooking = yield booking_model_1.Booking.find()
        .populate('room')
        .populate('slots')
        .populate('user');
    return getNewBooking;
});
const getAllBookingsS = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllBookings = yield booking_model_1.Booking.find().populate('room')
        .populate('slots')
        .populate('user');
    return getAllBookings;
});
const getSingleBookingS = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getSingleBooking = yield booking_model_1.Booking.find({ user: id }).populate('room')
        .populate('slots')
        .populate('user');
    console.log(getSingleBooking);
    return getSingleBooking;
});
const updateBookingIntoDBS = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteBookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
    });
    return result;
});
exports.bookingServices = {
    createBookingIntoDB,
    getAllBookingsS,
    getSingleBookingS,
    updateBookingIntoDBS,
    deleteBookingFromDB
};
