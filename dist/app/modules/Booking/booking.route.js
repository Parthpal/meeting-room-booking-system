"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const checkUser_1 = __importDefault(require("../../middlewares/checkUser"));
const checkAdmin_1 = __importDefault(require("../../middlewares/checkAdmin"));
const router = express_1.default.Router();
router.post('/bookings', (0, checkUser_1.default)('user'), booking_controller_1.bookingControllers.createBooking);
router.get('/bookings', (0, checkAdmin_1.default)('admin'), booking_controller_1.bookingControllers.getAllBookingC);
router.get('/my-bookings', booking_controller_1.bookingControllers.getSingleBookingC);
router.put('/bookings/:id', (0, checkAdmin_1.default)('admin'), booking_controller_1.bookingControllers.updateBookingByIDC);
router.delete('/bookings/:id', (0, checkAdmin_1.default)('admin'), booking_controller_1.bookingControllers.deleteBooking);
exports.BookingRoutes = router;
