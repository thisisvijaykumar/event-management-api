import * as express from "express";

import ListingCtrl from "../controllers/listing";

export const listingRoute = express.Router();

listingRoute.get("/:id",ListingCtrl.getListingById)
listingRoute.get("/", ListingCtrl.getAllListings);
listingRoute.post("/", ListingCtrl.createListing);