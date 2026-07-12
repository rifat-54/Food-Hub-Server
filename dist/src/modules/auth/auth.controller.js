import { authServices } from "./auth.services.js";
const getAllUser = async (req, res, next) => {
    try {
        const result = await authServices.getAllUser();
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getuser = async (req, res, next) => {
    try {
        const id = req?.user?.id;
        const result = await authServices.getuser(id);
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const updateStatus = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await authServices.updateStatus(req.body, id);
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
export const authController = {
    getAllUser,
    updateStatus,
    getuser
};
//# sourceMappingURL=auth.controller.js.map