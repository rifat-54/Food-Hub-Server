import { prisma } from "../../lib/prisma"

const getAllUser=async()=>{
    const result=await prisma.user.findMany()
    return result
}


enum userStatus{
    ACTIVE="ACTIVE",
    SUSPENDED="SUSPENDED"
}

type updatedStatus={
    status:userStatus
}

const updateStatus=async(data:updatedStatus,id:string)=>{
    console.log(data)
    const user=await prisma.user.findFirstOrThrow({
        where:{
            id
        }
    })

    

    if(user.status===data.status){
        throw new Error("Status Already Updated!")
    }

    

    const result=await prisma.user.update({
        where:{
            id
        },
        data
        
    })

     return result
}

const getuser=async(id:string)=>{
    const result=await prisma.user.findUniqueOrThrow({
        where:{
            id
        }
    })
    return result
}

export const authServices={
    getAllUser,
    updateStatus,
    getuser
}