import * as Joi from "@hapi/joi";
import { Request, Response } from "express";

import BookingSerivce from "../services/booking-service";

export default class BookingCtrl {
  public static async createBooking(req: Request, res: Response) {
    const schema = Joi.object({
      user_id: Joi.string().required(),
      listing_id: Joi.string().required(),
      booked_seats: Joi.number().required(),
      attendees: Joi.array().items(Joi.string()).allow(null),
    });

    const input = {
      user_id: req.body.user_id,
      listing_id: req.body.listing_id,
      total_seats: req.body.total_seats,
      attendees: req.body.attendees,
    };

    const validateResult = schema.validate(input);
    if (validateResult.error) {
      res.status(401).send({
        code: 401,
        msg: "input details are wrong",
      });
    } else {
      try {
        const data = await BookingSerivce.createBooking(input);
        res.status(200).send({
          data,
          msg: "SuccessfullyBooking created",
        });
      } catch (error) {
        res.status(400).send({
          code: 400,
          msg: "Something went wrong",
          error: error,
        });
      }
    }
  }
  public static async getBookingById(req: Request, res: Response) {
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const input = {
      id: req.params.event_id,
    };

    const validateResult = schema.validate(input);
    if (validateResult.error) {
      res.status(401).send({
        code: 401,
        msg: "input details are wrong",
      });
    } else {
      try {
        const data = await BookingSerivce.getBookingById(input);
        res.status(200).send({
          data,
          msg: "Successfully retreivedBooking",
        });
      } catch (error) {
        res.status(400).send({
          code: 400,
          msg: "Something went wrong",
          error: error,
        });
      }
    }
  }

  public static async getAllBookingsByUser(req: Request, res: Response) {
    try {
      const input = {
        user_id: req.params.user_id,
      };
      const data = await BookingSerivce.getAllBookingsByUser(input);
      res.status(200).send({
        data,
        msg: "Successfully retreived booking for user",
      });
    } catch (error) {
      res.status(400).send({
        code: 400,
        msg: "Something went wrong",
        error: error,
      });
    }
  }

  public static async getAllBookingsByListing(req: Request, res: Response) {
    try {
      const input = {
        listing_id: req.params.listing_id,
      };
      const data = await BookingSerivce.getAllBookingsByListing(input);
      res.status(200).send({
        data,
        msg: "Successfully retreived booking for user",
      });
    } catch (error) {
      res.status(400).send({
        code: 400,
        msg: "Something went wrong",
        error: error,
      });
    }
  }
}
