import { TUser } from "./user.interface";
import { User } from "./user.model";

//create a user
const createUserIntoDB=async(payload:TUser)=>{
  // console.log(payload);
   const newUser=await User.create(payload);
   return newUser
}

export const UserServices={
    createUserIntoDB
}