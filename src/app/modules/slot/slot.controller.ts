import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotServices } from "./slot.service";
import { query } from "express";
import { TSlot } from "./slot.interface";
import { Types } from "mongoose";
import { ParsedQs } from 'qs';

interface QueryParams {
  date?: string;
  room?: string;
  // Add other properties as needed
}
const createSlot=catchAsync(async(req,res)=>{
    const slotData=req.body;
    // let room=slotData.room;
    // let date=slotData.date.substring(0,10);
    const startData=slotData.startTime.substring(0,2);
    const endData=slotData.endTime.substring(0,2);
    let interval=[];
    for(let i=startData;endData>=i;i++){
      let a=  i;
      let b= a++;
      if(endData>b){
        interval.push({
            startTime:`${b}:00`,
            endTime:`${a}:00`
        })  
        // console.log(b,'-',a);
    }   
    }
    //console.log(slotData);
    
   // console.log(roomData)
    //   const result=await slotServices.createSlotIntoDB(slotData);
   
    const newSlotData=interval.map(intervals=>(
        {
            room:slotData.room,
            date:slotData.date.substring(0,10),
            startTime:intervals.startTime,
            endTime:intervals.endTime,
            isBooked:false
        }
    )
    )             

    const result=await slotServices.createSlotIntoDB(newSlotData);
    //console.log(result);
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Slot added successfully',
        data:result
      });
    });
const getSlotAvailabilityC = catchAsync(async (req, res) => {
      const newQuery:any={};
       if(req.query.roomId){
        newQuery.room =req.query.roomId
       }
       if(req.query.roomId){
        newQuery.date=req.query.date
       }
       //console.log(newQuery);
        const result = await slotServices.getSlotAvailability(newQuery);
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Slot retrieved successfully',
          data:result
        });
      });
    export const slotControllers = {
        createSlot,
        getSlotAvailabilityC
    }