"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const slot_controller_1 = require("./slot.controller");
const checkAdmin_1 = __importDefault(require("../../middlewares/checkAdmin"));
const router = express_1.default.Router();
router.post('/slots', (0, checkAdmin_1.default)('admin'), slot_controller_1.slotControllers.createSlot);
router.get('/slots/availability', slot_controller_1.slotControllers.getSlotAvailabilityC);
exports.slotRoutes = router;
