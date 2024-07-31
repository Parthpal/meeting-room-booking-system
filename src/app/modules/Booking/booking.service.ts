//create booking service

import { Types } from "mongoose";
import { Room } from "../room/room.model";
import { Slot } from "../slot/slot.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";


const createBookingIntoDB=async(payload:TBooking)=>{
 // console.log(payload);
     const slotLength=payload.slots.length;
     const room=await Room.findById(payload.room);
     const totalAmount=room?.pricePerSlot ?? 0 * slotLength;
     const isConfirmed='unconfirmed';
     const isDeleted=false;
    // Convert slot IDs to ObjectIds
    const slotIds = payload.slots.map((id) => new Types.ObjectId(id));
    await Slot.updateMany({ _id:{ $in:slotIds }},{isBooked:true});
        
     const newBookingData={
      ...payload,
      totalAmount,
      isConfirmed,
      isDeleted
     }
    await Booking.create(newBookingData);
    
  const getNewBooking= await Booking.find()
  .populate('room')
  .populate('slots')
  .populate('user')
   return getNewBooking;
  }
const getAllBookingsS=async()=>{
  const getAllBookings=await Booking.find().populate('room')
  .populate('slots')
  .populate('user')
  return getAllBookings
}

const getSingleBookingS=async(id:string)=>{
 const getSingleBooking=await Booking.find({user:id}).populate('room')
 .populate('slots')
 .populate('user');
 console.log(getSingleBooking);
 return getSingleBooking;
}

const updateBookingIntoDBS=async(id:string,payload:Partial<TBooking>)=>{
  const result = await Booking.findByIdAndUpdate(
      id,
      payload,
      { new: true } 
  );
  return result
}

const deleteBookingFromDB = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};
  export const bookingServices={
    createBookingIntoDB,
    getAllBookingsS,
    getSingleBookingS,
    updateBookingIntoDBS,
    deleteBookingFromDB
}