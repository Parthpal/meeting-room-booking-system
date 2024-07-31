import { z } from "zod";

const createUserValidationSchema=z.object({
       name:z.string(), 
       email:z.string().email(),
       password:z.string().max(20),
       phone:z.number(),
       address:z.string(),
       role:z.enum(['admin','user'])
})
export const UserValidation = {
    createUserValidationSchema,
  };