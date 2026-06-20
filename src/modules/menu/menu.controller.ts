import { NextFunction, Request,Response } from "express"
import { menuServices } from "./menu.services";


const createMenu=async(req:Request,res:Response,next:NextFunction) =>{

    try {
        const id=req.user?.id;

        const result=await menuServices.createMenu(req.body,id as string)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

const getAllMenu=async(req:Request,res:Response,next:NextFunction) =>{

    try {

        const result=await menuServices.getAllMenu()

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

const getMenuById=async(req:Request,res:Response,next:NextFunction) =>{

    try {

        const id=req.params.id

        const result=await menuServices.getMenuById(id as string)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}




export const menuController={
    createMenu,
    getAllMenu,
    getMenuById
}