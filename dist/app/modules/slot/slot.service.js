"use strict";
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
exports.slotServices = void 0;
const slot_model_1 = require("./slot.model");
//create a slot
const createSlotIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(payload);
    const newSlot = yield slot_model_1.Slot.create(payload);
    return newSlot;
});
const getSlotAvailability = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchQuery = Object.assign(Object.assign({}, query), { isBooked: false });
    //console.log(searchQuery);
    const availableSlot = yield slot_model_1.Slot.find(searchQuery).populate('room');
    return availableSlot;
});
exports.slotServices = {
    createSlotIntoDB,
    getSlotAvailability
};
