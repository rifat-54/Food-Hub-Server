import { prisma } from "../../lib/prisma.js"

interface ReviewPayload{
    comment:string,
    rating:number,
    mealId:string
}


const createReview=async(data:ReviewPayload,id:string)=>{

    const payload={
        ...data,
        userId:id
    }

    const result=await prisma.review.create({
        data:payload
    })

    // console.log(payload)
    return result;
}

export const reviewServices={
    createReview
}