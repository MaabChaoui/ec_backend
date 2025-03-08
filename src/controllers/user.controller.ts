import { NextFunction, Request, Response } from "express";
import { findAllUsers } from "../services/user.service";

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();

    res.status(200).json({
      status: "success",
      data: { users: users },
    });
  } catch (err) {
    next(err);
  }
};
