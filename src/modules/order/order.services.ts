import { prisma } from "../../lib/prisma"

type createOrderPayload={
    deliveryAddress:string,
    items:{
        mealId:string,
        quantity:number
    }[]
}

const createOrder=async(userId:string,data:createOrderPayload)=>{
    
    const mealIds=data.items.map((item)=>item.mealId)
    console.log(mealIds)
    const meals=await prisma.meal.findMany({
        where:{
            id:{
                in:mealIds
            }
        }
    })

    let totalAmount=0;

    const orderItemData=data.items.map((item)=>{
        const meal=meals.find(meal=>meal.id===item.mealId)
        if(!meal){
            throw new Error("Meal not found")
        }
        totalAmount+=meal.price*item.quantity

        return{
            mealId:meal.id,
            quantity:item.quantity,
            unitPrice:meal.price
        }
    })

    const result=await prisma.$transaction(async tx =>{
        const order=await tx.order.create({
            data:{
                userId,
                deliveryAddress:data.deliveryAddress,
                totalAmount
            }
        })

        await tx.orderItem.createMany({
            data:orderItemData.map(item=>({
                orderId:order.id,
                mealId:item.mealId,
                quantity:item.quantity,
                unitPrice:item.unitPrice
            }))
        })

        return order;
    })

    // console.log("meals -> ",meals)
    return result
}


const getUserOrders=async(id:string)=>{
    const result=await prisma.order.findMany({
        where:{
            userId:id
        },
        include:{
            orderItems:{
                select:{
                    quantity:true,
                    unitPrice:true,
                    meal:{
                        select:{
                            name:true
                        }
                    }
                }
            },
            user:{
                select:{
                    name:true,
                    image:true
                }
            }
        }
    })
    return result
}

const getOrderDetails=async(id:string)=>{
    const result=await prisma.order.findUniqueOrThrow({
        where:{
            id
        },
        include:{
            orderItems:{
                select:{
                    quantity:true,
                    unitPrice:true,
                    meal:{
                        select:{
                            name:true
                        }
                    }
                }
            },
            user:{
                select:{
                    name:true,
                    image:true
                }
            }
        }
    })
    return result
}

export const orderServices={
    createOrder,
    getUserOrders,
    getOrderDetails
}