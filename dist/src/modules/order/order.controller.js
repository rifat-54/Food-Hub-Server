import { orderServices } from "./order.services.js";
const createOrder = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const result = await orderServices.createOrder(userId, req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getUserOrders = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const result = await orderServices.getUserOrders(userId);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getOrderDetails = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await orderServices.getOrderDetails(id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const updateOrderStatus = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = req.user;
        const result = await orderServices.updateOrderStatus(req.body, id, user);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getProviderOrders = async (req, res, next) => {
    try {
        const providerUserId = req.user?.id;
        const result = await orderServices.getProviderOrders(providerUserId);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
const getAllOrders = async (req, res, next) => {
    try {
        const result = await orderServices.getAllOrders();
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const orderController = {
    createOrder,
    getUserOrders,
    getOrderDetails,
    updateOrderStatus,
    getProviderOrders,
    getAllOrders
};
//# sourceMappingURL=order.controller.js.map