import { NextFunction, Request,Response } from "express"
import { menuServices } from "./menu.services.js";


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

    const search=req.query.search as string
    const category=req.query.category as string
    const cuisine=req.query.cuisine as string
    const dietary=req.query.dietary as string

    console.log(search,category)

    try {

        const result=await menuServices.getAllMenu({search,category,cuisine,dietary})

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

const updateMenu=async(req:Request,res:Response,next:NextFunction) =>{

    try {

        const id=req.params.id

        const userId=req?.user?.id as string

        const result=await menuServices.updateMenu(req.body,id as string,userId)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}

const deleteMenu=async(req:Request,res:Response,next:NextFunction) =>{

    try {

        const id=req.params.id

        const userId=req?.user?.id as string

        const result=await menuServices.deleteMenu(id as string,userId)

        res.status(201).json(result)

    } catch (error) {
        next(error)
    }
}




export const menuController={
    createMenu,
    getAllMenu,
    getMenuById,
    updateMenu,
    deleteMenu
}