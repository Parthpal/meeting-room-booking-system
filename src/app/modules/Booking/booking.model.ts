import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";


const bookingSchema =new Schema<TBooking>({
    room: {
        type: Schema.Types.ObjectId,
        required: [true, 'Room id is required'],
        ref: 'Room',
      },
    slots: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'slot',
            required: true }
    ],
    user: { 
        type: Schema.Types.ObjectId,
         ref: 'User', 
         required: true 
    },
    date: { 
        type: String,
        required: true 
    },
    totalAmount: {
        type: Number,
        required: true 
     },
    isConfirmed: {
         type: String, 
         enum: ['confirmed', 'unconfirmed', 'canceled'],
        default: 'unconfirmed',
        required: true 
        },
      isDeleted: { type: Boolean, default: false, required: true },
},
{
  timestamps: true,
})
export const Booking=model<TBooking>('booking',bookingSchema);