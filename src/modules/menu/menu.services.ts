import { prisma } from "../../lib/prisma";

interface CreateMealPayload {
  name: string;
  description: string;
  price: number;
  image?: string;
  cuisine: string;
  dietaryType: string;
  categoryId: string;
}

const createMenu = async (data: CreateMealPayload, userId: string) => {
  console.log(userId);
  console.log(data);

  const provider = await prisma.provider.findUnique({
    where: {
      userId,
    },
  });

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

const getAllMenu = async () => {
  const result = await prisma.meal.findMany({
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

export const menuServices = {
  createMenu,
  getAllMenu,
  getMenuById
};
