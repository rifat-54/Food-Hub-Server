import express from "express"

import auth, { userRole } from "../../middleware/auth"
import { menuController } from "./menu.controller"


const router=express.Router()

router.post("/",auth(userRole.PROVIDER),menuController.createMenu)
router.get("/",menuController.getAllMenu)
router.get("/:id",menuController.getMenuById)


export const menuRouter=router