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
const deleteCategory=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id as string
        const result=await categoryServices.deleteCategory(id)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

export const categoryController={
    createCategory,
    getAllCategory,
    deleteCategory
}