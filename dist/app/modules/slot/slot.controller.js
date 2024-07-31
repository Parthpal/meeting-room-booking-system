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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const slot_service_1 = require("./slot.service");
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slotData = req.body;
    // let room=slotData.room;
    // let date=slotData.date.substring(0,10);
    const startData = slotData.startTime.substring(0, 2);
    const endData = slotData.endTime.substring(0, 2);
    let interval = [];
    for (let i = startData; endData >= i; i++) {
        let a = i;
        let b = a++;
        if (endData > b) {
            interval.push({
                startTime: `${b}:00`,
                endTime: `${a}:00`
            });
            // console.log(b,'-',a);
        }
    }
    //console.log(slotData);
    // console.log(roomData)
    //   const result=await slotServices.createSlotIntoDB(slotData);
    const newSlotData = interval.map(intervals => ({
        room: slotData.room,
        date: slotData.date.substring(0, 10),
        startTime: intervals.startTime,
        endTime: intervals.endTime,
        isBooked: false
    }));
    const result = yield slot_service_1.slotServices.createSlotIntoDB(newSlotData);
    //console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Slot added successfully',
        data: result
    });
}));
const getSlotAvailabilityC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newQuery = {};
    if (req.query.roomId) {
        newQuery.room = req.query.roomId;
    }
    if (req.query.roomId) {
        newQuery.date = req.query.date;
    }
    //console.log(newQuery);
    const result = yield slot_service_1.slotServices.getSlotAvailability(newQuery);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Slot retrieved successfully',
        data: result
    });
}));
exports.slotControllers = {
    createSlot,
    getSlotAvailabilityC
};
