import { z } from 'zod';

export const bookingSchema = z.object({
  room: z.string(),
  slots: z.array(z.string()),
  user: z.string(),
  date: z.string(),
  totalAmount: z.number(),
  isConfirmed: z.enum(['confirmed', 'unconfirmed', 'canceled']),
  isDeleted: z.boolean(),
});
