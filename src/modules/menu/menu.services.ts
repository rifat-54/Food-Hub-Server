import { MealWhereInput } from "../../../generated/prisma/models.js";
import { prisma } from "../../lib/prisma.js";

interface CreateMealPayload {
  name: string;
  description: string;
  price: number;
  image?: string;
  cuisine: string;
  dietaryType: string;
  categoryId: string;
}

export type UpdateMealPayload = {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  cuisine?: string;
  dietaryType?: string;
  categoryId?: string;
};

const createMenu = async (data: CreateMealPayload, userId: string) => {
  console.log(userId);
  console.log(data);

  const provider = await prisma.provider.findUnique({
    where: {
      userId,
    },
  });

  // console.log("pro -> ",provider,userId)

  if(!provider){
    throw new Error("Provider not exit")
  }

  const providerId = provider?.id as string;



  const result = await prisma.meal.create({
    data: {
      ...data,
      providerId,
    },
  });

  console.log(result);

  return result;
};

type MealProps={
  search?:string,
  category?:string,
  cuisine?:string,
  dietary?:string
}

const getAllMenu = async (payload:MealProps) => {

  const andCondition:MealWhereInput[]=[]

  if(payload.search){
    andCondition.push({
      OR:[
        {
          name:{
            contains:payload.search as string,
            mode:"insensitive"
          }
        },
        {
          description:{
            contains:payload.search as string,
            mode:"insensitive"
          }
        }
      ]
    })
  }


  if(payload.category){
    andCondition.push({
      categoryId:payload.category as string
    })
  }

  if(payload.cuisine){
    andCondition.push({
      cuisine:{
        contains:payload.cuisine ,
        mode:"insensitive"
      },
    })
  }

  if(payload.dietary){
    andCondition.push({
      dietaryType:{
        contains:payload.dietary,
        mode:"insensitive"
      }
    })
  }

  const result = await prisma.meal.findMany({
    where:{
        AND:andCondition
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      image: true,
      cuisine: true,
      dietaryType: true,
      category:{
        select:{
            id:true,
            name:true
        }
      },
      provider: {
        select: {
          id:true,
          restaurantName: true,
          description: true,
          address: true,
          image: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return result;
};

const getMenuById=async(id:string)=>{

  const result=await prisma.meal.findUniqueOrThrow({
    where:{
      id
    },
    select:{
      id:true,
      name:true,
      description:true,
      price:true,
      image:true,
      cuisine:true,
      dietaryType:true,
      category:{
        select:{
          name:true
        }
      },
      provider:{
        select:{
          restaurantName:true,
          description:true,
          address:true,
          image:true,
          user:{
            select:{
              name:true,
              image:true
            }
          }
        }
      }
    }
  })
  
  return result
}

const updateMenu=async(data:UpdateMealPayload,menuId:string,userId:string)=>{

  const menu=await prisma.meal.findUniqueOrThrow({
    where:{
      id:menuId
    },
    select:{
      provider:{
        select:{
          user:{
            select:{
              id:true
            }
          }
        }
      }
    }
  })

  const provider=menu.provider.user.id

  if(provider!==userId){
    throw new Error("Forbidden Access!")
  }
  


  const result=await prisma.meal.update({
    where:{
      id:menuId
    },
    data
  })
  
  return result
}

const deleteMenu=async(menuId:string,userId:string)=>{
    const menu=await prisma.meal.findUniqueOrThrow({
    where:{
      id:menuId
    },
    select:{
      provider:{
        select:{
          user:{
            select:{
              id:true
            }
          }
        }
      }
    }
  })

  const provider=menu.provider.user.id

  if(provider!==userId){
    throw new Error("Forbidden Access!")
  }

  const result=await prisma.meal.delete({
    where:{
      id:menuId
    }
  })
  
  return result
}

export const menuServices = {
  createMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
  deleteMenu
};
