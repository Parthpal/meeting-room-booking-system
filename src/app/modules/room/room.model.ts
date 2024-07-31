import { model, Schema } from "mongoose";
import { TRoom } from "./room.interface";


const roomSchema =new Schema<TRoom>({
    name: {
        type: String,
        required: true,
      },
    roomNo:{
        type: Number,
        required: true,
        unique: true
    },
    floorNo: {
        type: Number,
        required: true,
      },
    capacity: {
        type: Number,
        required: true,
      },
    pricePerSlot: {
        type: Number,
        required: true,
      },
      amenities: {
        type: [String],
        validate: {
          validator: (amenities: string[]) => amenities.every(amenity => amenity === 'Projector' || amenity === 'Whiteboard'),
          message: 'Invalid amenity. Only "Projector" or "Whiteboard" are allowed.',
        },
      },
    isDeleted: {
        type: Boolean,
        default: false ,
        required: true,
      }
},
{
  timestamps: true,
})
export const Room=model<TRoom>('Room',roomSchema);