import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RoomServices } from "./room.service";

const createRoom=catchAsync(async(req,res)=>{
    const roomData=req.body;
   // console.log(roomData)
    const result=await RoomServices.createRoomIntoDB(roomData);
    const {_id,name,roomNo,floorNo,capacity,pricePerSlot,amenities,isDeleted}=result;
   // console.log(result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room added successfully',
        data:{
          _id,
          name,
          roomNo,
          floorNo,
          capacity,
          pricePerSlot,
          amenities,
          isDeleted
        }
      });
    });
    const getSingleRoom = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await RoomServices.getRoomByIDFromDB(id);
     //   const {_id,name,roomNo,floorNo,capacity,pricePerSlot,amenities,isDeleted}=result;
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Room retrieved successfully',
          data:result
          // data:{
          //   _id,
          //   name,
          //   roomNo,
          //   floorNo,
          //   capacity,
          //   pricePerSlot,
          //   amenities,
          //   isDeleted
          // }
        });
      });
    const getAllRoomC = catchAsync(async (req, res) => {
        const result = await RoomServices.getAllRoomsS();
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Rooms retrieved successfully',
          data:result
        });
      });
    const updateRoomByIDC = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await RoomServices.updateRoomIntoDBS(id,req.body);
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Rooms updated successfully',
          data:result
        });
      });
    const deleteRoom = catchAsync(async (req, res) => {
        const { id } = req.params;
        const result = await RoomServices.deleteRoomFromDB(id);
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Room is deleted successfully',
          data: result,
        });
      });
    export const RoomControllers = {
        createRoom,
        getSingleRoom,
        getAllRoomC,updateRoomByIDC,deleteRoom
      };