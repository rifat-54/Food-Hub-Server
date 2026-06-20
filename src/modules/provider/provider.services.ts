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

export const providerServices = {
  createProvider,
};
