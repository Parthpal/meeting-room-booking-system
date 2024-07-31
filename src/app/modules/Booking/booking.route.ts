import express from 'express';
import { bookingControllers } from './booking.controller';
import checkUser from '../../middlewares/checkUser';
import checkAdmin from '../../middlewares/checkAdmin';
const router = express.Router();


router.post(
    '/bookings',checkUser('user'),
    bookingControllers.createBooking,
  );
router.get(
    '/bookings',checkAdmin('admin'),
    bookingControllers.getAllBookingC,
  );
router.get(
    '/my-bookings',
    bookingControllers.getSingleBookingC,
  );
router.put(
    '/bookings/:id',checkAdmin('admin'),
    bookingControllers.updateBookingByIDC,
  );
  router.delete(
    '/bookings/:id',checkAdmin('admin'),
    bookingControllers.deleteBooking,
  );
export const BookingRoutes = router;