import express from "express"

import auth, { userRole } from "../../middleware/auth"
import { menuController } from "./menu.controller"


const router=express.Router()

router.get("/",menuController.getAllMenu)
router.get("/:id",menuController.getMenuById)
router.patch("/:id",menuController.updateMenu)
router.post("/",auth(userRole.PROVIDER),menuController.createMenu)


export const menuRouter=router