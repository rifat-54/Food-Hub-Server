import { Request,Response,NextFunction } from "express";
import { reviewServices } from "./review.services.js";

const createReview=async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.user?.id as string

        const result=await reviewServices.createReview(req.body,id)

        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const reviewController={
    createReview
}