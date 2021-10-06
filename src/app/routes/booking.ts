import * as express from "express";

import BookingCtrl from "../controllers/booking";

export const bookingRoute = express.Router();

bookingRoute.get("/user/:id",BookingCtrl.getAllBookingsByUser);
bookingRoute.get("/listing/:id",BookingCtrl.getAllBookingsByListing);
bookingRoute.get("/:id", BookingCtrl.getBookingById);
bookingRoute.post("/", BookingCtrl.createBooking);