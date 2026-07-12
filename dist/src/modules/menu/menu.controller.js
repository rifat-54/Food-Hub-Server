import { menuServices } from "./menu.services.js";
const createMenu = async (req, res, next) => {
    try {
        const id = req.user?.id;
        const result = await menuServices.createMenu(req.body, id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getAllMenu = async (req, res, next) => {
    const search = req.query.search;
    const category = req.query.category;
    const cuisine = req.query.cuisine;
    const dietary = req.query.dietary;
    console.log(search, category);
    try {
        const result = await menuServices.getAllMenu({ search, category, cuisine, dietary });
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getMenuById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await menuServices.getMenuById(id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const updateMenu = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userId = req?.user?.id;
        const result = await menuServices.updateMenu(req.body, id, userId);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const deleteMenu = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userId = req?.user?.id;
        const result = await menuServices.deleteMenu(id, userId);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const menuController = {
    createMenu,
    getAllMenu,
    getMenuById,
    updateMenu,
    deleteMenu
};
//# sourceMappingURL=menu.controller.js.map