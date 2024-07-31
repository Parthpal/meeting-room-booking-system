import cookieParser from 'cookie-parser';
import express,{Application} from 'express'
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import { AuthRoutes } from './app/modules/Auth/auth.route';
import { RoomRoutes } from './app/modules/room/room.route';
import { slotRoutes } from './app/modules/slot/slot.route';
import { BookingRoutes } from './app/modules/Booking/booking.route';

const app: Application = express();
app.get("/", (req, res) => {
    res.send("Welcome to book a meeting room!");
  });
//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

app.use('/api/auth',UserRoutes);
app.use('/api/auth',AuthRoutes);
app.use('/api',RoomRoutes);
app.use('/api',slotRoutes);
app.use('/api',BookingRoutes);

export default app