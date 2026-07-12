import { reviewServices } from "./review.services.js";
const createReview = async (req, res, next) => {
    try {
        const id = req.user?.id;
        const result = await reviewServices.createReview(req.body, id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const reviewController = {
    createReview
};
//# sourceMappingURL=review.controller.js.map