import * as express from "express";
import * as fileUpload from "express-fileupload";
import { Application } from "express";

const ExpressConfiguration = (app: Application) => {
  // ** To enable get the json Request data */
  app.use(express.json());
  // **To enable get the POST request data */
  app.use(
    express.urlencoded({
      extended: false,
    }),
  );
  app.use(fileUpload({ createParentPath: true }));
};

export default ExpressConfiguration;
