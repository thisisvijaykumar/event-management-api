import * as JWT from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

class Middlewares {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.get("x-token");
      if (!token) {
        return res.status(403).send({
          code: 403,
          msg: "Invalid Token",
        });
      }
      let userId = "";
      let role = "";
      const jwtDecoded = await JWT.verify(token, process.env.JWT_SALT);
      console.log(jwtDecoded,"jwtDecoded")
      if (
        !jwtDecoded ||
        !jwtDecoded["data"] ||
        !jwtDecoded["data"]["id"] ||
        !jwtDecoded["data"]["role"]
      ) {
        return res.status(403).send({
          code: 403,
          msg: "Invalid Token",
        });
      }
      userId = jwtDecoded["data"]["id"];
      role = jwtDecoded["data"]["role"];
      req["user_id"] = userId;
      req["role"] = role;
      next();
    } catch (error) {
      return res.status(403).send({
        code: 403,
        msg: "Invalid User Id",
        error
      });
    }
    // Middlewares.validateUser(req, res, next);
  }
}

export default Middlewares;
