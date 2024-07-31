"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const room_controller_1 = require("./room.controller");
const checkAdmin_1 = __importDefault(require("../../middlewares/checkAdmin"));
const router = express_1.default.Router();
router.post('/rooms', (0, checkAdmin_1.default)('admin'), room_controller_1.RoomControllers.createRoom);
router.get('/rooms/:id', room_controller_1.RoomControllers.getSingleRoom);
router.put('/rooms/:id', (0, checkAdmin_1.default)('admin'), room_controller_1.RoomControllers.updateRoomByIDC);
router.delete('/rooms/:id', (0, checkAdmin_1.default)('admin'), room_controller_1.RoomControllers.deleteRoom);
router.get('/rooms', room_controller_1.RoomControllers.getAllRoomC);
exports.RoomRoutes = router;
