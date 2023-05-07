import { Request, Response, NextFunction } from "express";

const unknownRoute = (_: any, res: Response) => {
  res.status(404).send("Sorry, this is a rogue route!");
};

const errorRoute = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    console.log(err.stack);
    return res
      .status(500)
      .json({
        message: err.message || "Something went wrong!",
        status: "failed",
      });
  }
};

export default {
  unknownRoute,
  errorRoute,
};
