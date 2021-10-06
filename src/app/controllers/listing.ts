import * as Joi from "@hapi/joi";
import { Request, Response } from "express";

import ListingSerivce from "../services/listing-service";

export default class ListingCtrl {
  public static async createListing(req: Request, res: Response) {
    const schema = Joi.object({
      event_name: Joi.string().required(),
      event_date: Joi.string().required(),
      total_seats: Joi.number().required(),
      event_photo: Joi.string().required(),
    });

    const input = {
      event_name: req.body.event_name,
      event_date: req.body.event_date,
      total_seats: req.body.total_seats,
      event_photo: req.body.event_photo,
    };

    const validateResult = schema.validate(input);
    if (validateResult.error) {
      res.status(401).send({
        code: 401,
        msg: "input details are wrong",
      });
    } else {
      try {
        input["available_seats"]=input["total_seats"];
        const data = await ListingSerivce.createListing(input);
        res.status(200).send({
          data,
          msg: "Successfully listing created",
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
  public static async getListingById(req: Request, res: Response) {
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const input = {
      id: req.params.id,
    };

    const validateResult = schema.validate(input);
    if (validateResult.error) {
      res.status(401).send({
        code: 401,
        msg: "input details are wrong",
      });
    } else {
      try {
        const data = await ListingSerivce.getListingById(input);
        res.status(200).send({
          data,
          msg: "Successfully retreived listing",
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

  public static async getAllListings(req: Request, res: Response) {
    try {
      const data = await ListingSerivce.getAllListings({});
      res.status(200).send({
        data,
        msg: "Successfully retreived listing",
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
