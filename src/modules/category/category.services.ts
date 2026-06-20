import { string } from "zod"
import { prisma } from "../../lib/prisma"

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



export const categoryServices={
    createCategory ,
    getAllCategory
}