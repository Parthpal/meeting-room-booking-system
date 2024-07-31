import { z } from "zod";

const createSlotValidationSchema=z.object({
       room:z.string(), 
       date:z.string().optional(),
       startTime:z.string(),
       endTime:z.string(),
       pricePerSlot:z.number(),
       isBooked:z.boolean()
})
export const slotValidation = {
   createSlotValidationSchema,
  };