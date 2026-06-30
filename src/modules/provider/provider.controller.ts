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

const getAllProvider = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {

    const result = await providerServices.getAllProvider();

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getProviderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {

    const id=req.params.id as string

    const result = await providerServices.getProviderById(id);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const providerMeals = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
  
    const id=req.user?.id as string

    const result = await providerServices.providerMeals(id);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};




export const providerController = {
  createProvider,
  getAllProvider,
  getProviderById,
  providerMeals
};
