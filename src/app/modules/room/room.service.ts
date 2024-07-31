import { TRoom } from "./room.interface";
import { Room } from "./room.model";

//create a room
const createRoomIntoDB=async(payload:TRoom)=>{
    // console.log(payload);
     const newRoom=await Room.create(payload);
     return newRoom
  }
const getRoomByIDFromDB=async(id:string)=>{
    const result = await Room.findById(id);
    return result
}
const getAllRoomsS=async()=>{
    const result = await Room.find();
    return result
}
const updateRoomIntoDBS=async(id:string,payload:Partial<TRoom>)=>{
    const result = await Room.findByIdAndUpdate(
        id,
        payload,
        { new: true } 
    );
    return result
}
const deleteRoomFromDB = async (id: string) => {
    const result = await Room.findByIdAndUpdate(
      id,
      { isDeleted: true },
      {
        new: true,
      },
    );
    return result;
  };
export const RoomServices={
      createRoomIntoDB,getRoomByIDFromDB,getAllRoomsS,updateRoomIntoDBS,deleteRoomFromDB
  }