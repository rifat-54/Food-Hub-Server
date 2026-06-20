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
const updateStatus=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id as string
        const result=await authServices.updateStatus(req.body,id)
        res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        next(error)
    }
}

export const authController={
    getAllUser,
    updateStatus
}