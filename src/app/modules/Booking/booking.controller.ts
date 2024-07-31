import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { bookingServices } from "./booking.service";
import AppError from "../../errors/AppError";
import config from "../../config";
import jwt, { JwtPayload } from 'jsonwebtoken';

const createBooking=catchAsync(async(req,res)=>{
  const authHeader: string|undefined = req.headers.authorization;
  // Remove "Bearer " from the beginning of the string
  const token = authHeader?.replace('Bearer ', '');
  // checking if the token is missing
  if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
  }
  //checking if the given token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
    ) as JwtPayload;

  const { role, email, iat,id } = decoded;
    const bookingData=req.body;
    if(bookingData.user!==id){
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }
    const result=await bookingServices.createBookingIntoDB(bookingData);
   //const {_id,name,roomNo,floorNo,capacity,pricePerSlot,amenities,isDeleted}=result;
  // console.log(result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking created successfully',
        data:result
      });
    });

const getAllBookingC=catchAsync(async(req,res)=>{
      const result=await bookingServices.getAllBookingsS();
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Bookings Retrieved successfully',
        data:result
      });
    });

const getSingleBookingC=catchAsync(async(req,res)=>{
      const authHeader: string|undefined = req.headers.authorization;
      // Remove "Bearer " from the beginning of the string
      const token = authHeader?.replace('Bearer ', '');
      // checking if the token is missing
      if (!token) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }
      //checking if the given token is valid
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
        ) as JwtPayload;

      const { role, email, iat,id } = decoded;
    //console.log(id);
     const result=await bookingServices.getSingleBookingS(id);
     console.log(result);
     if(result.length===0){
      sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'No data found',
        data:result
      });
     }
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking Retrieved successfully',
        data:result
      });

    })

const updateBookingByIDC = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.updateBookingIntoDBS(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking updated successfully',
    data:result
  });
});
const deleteBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingServices.deleteBookingFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is deleted successfully',
    data: result,
  });
});

export const bookingControllers = {
       createBooking,
       getAllBookingC,
       getSingleBookingC,
       updateBookingByIDC,
       deleteBooking
      };