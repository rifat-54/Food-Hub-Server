import { prisma } from "../../lib/prisma";

interface createProviderPayload {
  restaurantName: string;
  description?: string;
  address: string;
  image?: string;
}

const createProvider = async (data: createProviderPayload, userId: string) => {
  console.log(data);
  console.log(userId);

  const result = await prisma.provider.create({
    data: {
      ...data,
      userId,
    },
  });

  return result;
};


const getAllProvider=async()=>{
    const result=await prisma.provider.findMany({
        select:{
            restaurantName:true,
            description:true,
            image:true,
            createdAt:true
            ,
            user:{
                select:{
                    name:true,
                    image:true
                }
            },
            meals:true
        }
    })

    return result
}

export const providerServices = {
  createProvider,
  getAllProvider
};
