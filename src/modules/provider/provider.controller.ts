import { NextFunction, Request, Response } from "express";
import { providerServices } from "./provider.services";

const createProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.user?.id;

    const result = await providerServices.createProvider(
      req.body,
      id as string,
    );

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const providerController = {
  createProvider,
};
