import { Request,Response,NextFunction } from "express"
import { categoryServices } from "./category.services"

const createCategory=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result=await categoryServices.createCategory(req.body)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

const getAllCategory=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result=await categoryServices.getAllCategory()

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

export const categoryController={
    createCategory,
    getAllCategory
}