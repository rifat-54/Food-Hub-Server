import { providerServices } from "./provider.services.js";
const createProvider = async (req, res, next) => {
    try {
        const id = req.user?.id;
        const result = await providerServices.createProvider(req.body, id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getAllProvider = async (req, res, next) => {
    try {
        const result = await providerServices.getAllProvider();
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getProviderById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await providerServices.getProviderById(id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const providerMeals = async (req, res, next) => {
    try {
        const id = req.user?.id;
        const result = await providerServices.providerMeals(id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const providerController = {
    createProvider,
    getAllProvider,
    getProviderById,
    providerMeals
};
//# sourceMappingURL=provider.controller.js.map