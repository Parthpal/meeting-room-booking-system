import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../modules/user/user.model";

export type TRole = 'admin' | 'user';


const checkUser=(roles:TRole)=>{
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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

        const { role, email, iat } = decoded;
      // checking if the user is exist
        if(role!==roles){
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not an Authorized Users');
        }
       // console.log(roles,token);
       next();
    }
)}

export default checkUser;