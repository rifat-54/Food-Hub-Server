import { Request,Response,NextFunction } from "express";
import { orderServices } from "./order.services";

const createOrder=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId=req.user?.id as string
        const result=await orderServices.createOrder(userId,req.body)
        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}
const getUserOrders=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId=req.user?.id as string
        const result=await orderServices.getUserOrders(userId)
        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

const getOrderDetails=async(req:Request,res:Response,next:NextFunction)=>{
    
    try {
        const id=req.params.id as string
        const result=await orderServices.getOrderDetails(id)
        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}


export const orderController={
    createOrder,
    getUserOrders,
    getOrderDetails
}