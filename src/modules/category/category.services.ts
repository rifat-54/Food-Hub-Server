import { string } from "zod"
import { prisma } from "../../lib/prisma.js"

interface createCategoryPayload{
    name:string
}

const createCategory=async(data:createCategoryPayload)=>{
    const result=await prisma.category.create({
        data
    })

    return result
}

const getAllCategory=async()=>{
    const result=await prisma.category.findMany()

    return result
}

const deleteCategory=async(id:string)=>{
    console.log(id)
    const result=await prisma.category.delete({
        where:{
            id
        }
    })

    return result
}



export const categoryServices={
    createCategory ,
    getAllCategory,
    deleteCategory
}