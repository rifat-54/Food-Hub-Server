import { prisma } from "../../lib/prisma.js";
const createCategory = async (data) => {
    const result = await prisma.category.create({
        data
    });
    return result;
};
const getAllCategory = async () => {
    const result = await prisma.category.findMany();
    return result;
};
const deleteCategory = async (id) => {
    console.log(id);
    const result = await prisma.category.delete({
        where: {
            id
        }
    });
    return result;
};
export const categoryServices = {
    createCategory,
    getAllCategory,
    deleteCategory
};
//# sourceMappingURL=category.services.js.map