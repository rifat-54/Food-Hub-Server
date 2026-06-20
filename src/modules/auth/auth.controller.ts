import { Request,Response,NextFunction } from "express"
import { authServices } from "./auth.services"


const getAllUser=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result=await authServices.getAllUser()
        res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
    }
}

export const authController={
    getAllUser
}