import { OrderStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { userRole } from "../../middleware/auth";

type createOrderPayload = {
  deliveryAddress: string;
  items: {
    mealId: string;
    quantity: number;
  }[];
};

const createOrder = async (userId: string, data: createOrderPayload) => {
  const mealIds = data.items.map((item) => item.mealId);
  console.log(mealIds);
  const meals = await prisma.meal.findMany({
    where: {
      id: {
        in: mealIds,
      },
    },
  });

  let totalAmount = 0;

  const orderItemData = data.items.map((item) => {
    const meal = meals.find((meal) => meal.id === item.mealId);
    if (!meal) {
      throw new Error("Meal not found");
    }
    totalAmount += meal.price * item.quantity;

    return {
      mealId: meal.id,
      quantity: item.quantity,
      unitPrice: meal.price,
    };
  });

  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        deliveryAddress: data.deliveryAddress,
        totalAmount,
      },
    });

    await tx.orderItem.createMany({
      data: orderItemData.map((item) => ({
        orderId: order.id,
        mealId: item.mealId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      })),
    });

    return order;
  });

  // console.log("meals -> ",meals)
  return result;
};

const getUserOrders = async (id: string) => {
  const result = await prisma.order.findMany({
    where: {
      userId: id,
    },
    include: {
      orderItems: {
        select: {
          quantity: true,
          unitPrice: true,
          meal: {
            select: {
              id:true,
              name: true
              
            },
          },
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy:{
      createdAt:"desc"
    }
  });
  return result;
};

const getAllOrders = async () => {
  const result=await prisma.order.findMany({
    select:{
      id:true,
      totalAmount:true,
      status:true,
      createdAt:true,
      deliveryAddress:true,
      user:{
        select:{
          name:true
        }
      },
      _count:{
        select:{
          orderItems:true
        }
      }
      
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return result
 
};

const getOrderDetails = async (id: string) => {
  const result = await prisma.order.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      orderItems: {
        select: {
          quantity: true,
          unitPrice: true,
          meal: {
            select: {
              id:true,
              name: true,
            },
          },
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return result;
};

const updateOrderStatus = async (
  data: { status: OrderStatus },
  id: string,
  user: { role: string; id: string },
) => {
  console.log(user);

  const order = await prisma.order.findUniqueOrThrow({
    where: {
      id,
    },
  });

  console.log(order);

  if (user.role === userRole.USER && user.id !== order.userId) {
    throw new Error("Forbidden Access!");
  }

  if (order.status === data.status) {
    throw new Error(`Status already updated to ${data.status}`);
  }

  if (user.role === userRole.USER && order.status !== OrderStatus.PLACED) {
    throw new Error("Now you can't Update status!");
  }

  if (order.status=== OrderStatus.CANCELLED) {
    throw new Error("Order is Cancelled! Now you can't Update status!");
  }

  if (order.status=== OrderStatus.DELIVERED) {
    throw new Error("Order is Delivered! Now you can't Update status!");
  }



  const result = await prisma.order.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

const getProviderOrders=async(providerUserId:string)=>{

  const provider=await prisma.provider.findUniqueOrThrow({
    where:{
      userId:providerUserId
    }
  })

  // console.log(provider)

  const result=await prisma.order.findMany({
    where:{
      orderItems:{
       some:{
        meal:{
          providerId:provider.id
        }
       }
      }
    },
    include:{
      user:true,
      _count:{
        select:{
          orderItems:true
        }
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return result
}

export const orderServices = {
  createOrder,
  getUserOrders,
  getOrderDetails,
  updateOrderStatus,
  getProviderOrders,
  getAllOrders
};
