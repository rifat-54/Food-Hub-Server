import { NextFunction, Request,Response } from "express"
import { providerServices } from "./provider.services"

const createMenu=async(req:Request,res:Response,next:NextFunction) =>{

    try {
        const result=await providerServices.createMenu()

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}


export const providerController={
    createMenu
}