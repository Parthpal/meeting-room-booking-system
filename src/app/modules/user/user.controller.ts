import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser=catchAsync(async(req,res)=>{
    const userData=req.body;
   // console.log(userData)
    const result=await UserServices.createUserIntoDB(userData);
    const {_id,name,email,phone,role,address}=result;
   // console.log(result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data:{
          _id,
          name,
          email,
          phone,
          role,
          address
        }
      });
    });
    export const UserControllers = {
        createUser,
      };