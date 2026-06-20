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
            id:true,
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
            // meals:true
        }
    })

    return result
}

const getProviderById=async(id:string)=>{
    // const result=await prisma.provider.findMany({
    //     select:{
    //         restaurantName:true,
    //         description:true,
    //         image:true,
    //         createdAt:true
    //         ,
    //         user:{
    //             select:{
    //                 name:true,
    //                 image:true
    //             }
    //         },
    //         // meals:true
    //     }
    // })

    const result=await prisma.provider.findUniqueOrThrow({
        where:{
            id
        },
        select:{
            id:true,
            restaurantName:true,
            description:true,
            address:true,
            image:true,
            createdAt:true,
            meals:true,
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

export const providerServices = {
  createProvider,
  getAllProvider,
  getProviderById
};
