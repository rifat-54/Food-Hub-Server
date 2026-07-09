import { Request,Response,NextFunction } from "express";


export const test=(req:Request,res:Response,next:NextFunction)=>{
    console.log("test")
        console.log("req body",req.body)
    next()
}