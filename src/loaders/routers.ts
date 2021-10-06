
import { Application } from "express";

import Middlewares from "./../app/middlewares";
import {authRoute} from "./../app/routes/auth";
import { bookingRoute } from "./../app/routes/booking";
import { listingRoute } from "./../app/routes/listing";

const Routes = (app: Application) => {
    app.use("/api/listings", Middlewares.validate, listingRoute);
    app.use("/api/bookings", Middlewares.validate, bookingRoute);
    app.use("/api/auth", authRoute);

}

export default Routes;
