import { Router } from "express";
import { reviewController } from "./review.controller";
import auth, { userRole } from "../../middleware/auth";

const router=Router()

router.post("/",auth(userRole.ADMIN,userRole.PROVIDER,userRole.USER),reviewController.createReview)


export const reviewRouter=router