import { categoryServices } from "./category.services.js";
const createCategory = async (req, res, next) => {
    try {
        const result = await categoryServices.createCategory(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getAllCategory = async (req, res, next) => {
    try {
        const result = await categoryServices.getAllCategory();
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await categoryServices.deleteCategory(id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const categoryController = {
    createCategory,
    getAllCategory,
    deleteCategory
};
//# sourceMappingURL=category.controller.js.map