import express from 'express';
import { RoomControllers } from './room.controller';
import auth from '../../middlewares/auth';
import checkAdmin from '../../middlewares/checkAdmin';
const router = express.Router();

router.post(
    '/rooms',checkAdmin('admin'),
    RoomControllers.createRoom,
  );
router.get(
    '/rooms/:id',
    RoomControllers.getSingleRoom,
  );
router.put(
    '/rooms/:id',checkAdmin('admin'),
    RoomControllers.updateRoomByIDC,
  );
router.delete(
    '/rooms/:id',checkAdmin('admin'),
    RoomControllers.deleteRoom,
  );
router.get(
    '/rooms',
    RoomControllers.getAllRoomC,
  );
export const RoomRoutes = router;