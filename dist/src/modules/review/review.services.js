import { prisma } from "../../lib/prisma.js";
const createReview = async (data, id) => {
    const payload = {
        ...data,
        userId: id
    };
    const result = await prisma.review.create({
        data: payload
    });
    // console.log(payload)
    return result;
};
export const reviewServices = {
    createReview
};
//# sourceMappingURL=review.services.js.map