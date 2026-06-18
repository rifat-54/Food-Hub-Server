import { Request,Response,NextFunction } from "express";

const auth=(req:Request,res:Response,next:NextFunction)=>{

    console.log("auth called")

    next()

}


export default auth;