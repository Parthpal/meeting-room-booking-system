import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";


const slotSchema =new Schema<TSlot>({
    room: {
        type: Schema.Types.ObjectId,
        required: [true, 'Room id is required'],
        ref: 'Room',
      },
    date:{
        type: String 
    },
    startTime: {
        type: String,
        required: true,
      },
    endTime: {
        type: String,
        required: true,
      },
      isBooked: {
        type: Boolean,
        default: false ,
        required: true,
      }
},
{
  timestamps: true,
})
export const Slot=model<TSlot>('slot',slotSchema);