import { Router } from "express";
import { categoryController } from "./category.controller";
import auth, { userRole } from "../../middleware/auth";

const router=Router()

router.post("/",auth(userRole.ADMIN),categoryController.createCategory)
router.delete("/:id",auth(userRole.ADMIN),categoryController.deleteCategory)
router.get("/",categoryController.getAllCategory)

export const categoryRouter=router