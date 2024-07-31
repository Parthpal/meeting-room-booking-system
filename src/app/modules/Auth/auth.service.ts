import httpStatus from "http-status";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import AppError from "../../errors/AppError";
import config from "../../config";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { createToken } from "./auth.utils";

const loginUser=async(payLoad:TLoginUser)=>{
    //checking if user exists
    const user= await User.isUserExistsByEmail(payLoad.email); 
    //console.log('user exists',user);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
      }
  //checking if the password is correct
  if (!(await User.isPasswordMatched(payLoad?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  //create token and sent to the  client

  const jwtPayload = {
    id:user._id,
    email: user.email,
    role: user.role,
  };
  
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
    return {
        user,
        accessToken
    };
}

export const AuthServices = {
    loginUser
  };