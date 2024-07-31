import { z } from "zod";

export const amenitiesEnum = z.enum(['Projector', 'Whiteboard']);

const createRoomValidationSchema=z.object({
       name:z.string(), 
       roomNo:z.number(),
       floorNo:z.number(),
       capacity:z.number(),
       pricePerSlot:z.number(),
       amenities: z.array(amenitiesEnum),
       isDeleted:z.boolean()
})
export const UserValidation = {
    createRoomValidationSchema,
  };