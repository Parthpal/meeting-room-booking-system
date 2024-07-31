import httpStatus from "http-status";
import { AuthServices } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
 //   const { refreshToken, accessToken, needsPasswordChange } = result;
     const{user,accessToken}=result;
     const{_id,name,email,phone,role,address}=user;
    // console.log(accessToken);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is logged in successfully!',
      token:accessToken,
      data: {
     //   accessToken,
      //  needsPasswordChange,
      _id,
      name,
      email,
      phone,
      role,
      address
      },
    });
  });

  export const AuthControllers = {
    loginUser
  };