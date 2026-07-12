import { Router } from "express";
import { reviewController } from "./review.controller.js";
import auth, { userRole } from "../../middleware/auth.js";

const router=Router()

router.post("/",auth(userRole.ADMIN,userRole.PROVIDER,userRole.USER),reviewController.createReview)


export const reviewRouter=router