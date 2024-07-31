import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

//create a slot
const createSlotIntoDB=async(payload:TSlot[])=>{
    //console.log(payload);
   const newSlot=await Slot.create(payload);
   return newSlot
  }
const getSlotAvailability=async(query:Record<string,unknown>)=>{
  const searchQuery = {...query, isBooked: false };
  //console.log(searchQuery);
  const availableSlot=await Slot.find(searchQuery).populate('room');
   return availableSlot
 }
  export const slotServices={
    createSlotIntoDB,
    getSlotAvailability
}