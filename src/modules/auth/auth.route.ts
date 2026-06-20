import { Router } from "express";
import { authController } from "./auth.controller";
import auth, { userRole } from "../../middleware/auth";

const router=Router()


router.get("/",auth(userRole.ADMIN),authController.getAllUser)
router.patch("/:id",auth(userRole.ADMIN),authController.updateStatus)

export const authRouter=router