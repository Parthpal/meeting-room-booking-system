import { Model } from "mongoose";

export interface TUser{
    name:string;
    email:string;
    password:string;
    phone:number;
    address:string;
    role:'user'|'admin';
}

export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<TUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;

  }