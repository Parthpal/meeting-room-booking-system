"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/user/user.route");
const auth_route_1 = require("./app/modules/Auth/auth.route");
const room_route_1 = require("./app/modules/room/room.route");
const slot_route_1 = require("./app/modules/slot/slot.route");
const booking_route_1 = require("./app/modules/Booking/booking.route");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Welcome to book a meeting room!");
});
//parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173'] }));
app.use('/api/auth', user_route_1.UserRoutes);
app.use('/api/auth', auth_route_1.AuthRoutes);
app.use('/api', room_route_1.RoomRoutes);
app.use('/api', slot_route_1.slotRoutes);
app.use('/api', booking_route_1.BookingRoutes);
exports.default = app;
