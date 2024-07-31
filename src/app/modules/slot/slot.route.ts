import express from 'express';
import { slotControllers } from './slot.controller';
import checkAdmin from '../../middlewares/checkAdmin';
const router = express.Router();

router.post(
    '/slots',checkAdmin('admin'),
    slotControllers.createSlot,
  );
router.get(
    '/slots/availability',
    slotControllers.getSlotAvailabilityC
  );

export const slotRoutes = router;