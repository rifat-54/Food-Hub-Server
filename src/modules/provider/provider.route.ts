import express from "express"
import { providerController } from "./provider.controller.js"
import auth, { userRole } from "../../middleware/auth.js"


const router=express.Router()



router.get("/",providerController.getAllProvider)
router.get("/allmeals",auth(userRole.PROVIDER),providerController.providerMeals)
router.get("/:id",providerController.getProviderById)
router.post("/",auth(userRole.PROVIDER,userRole.USER),providerController.createProvider)


export const providerRouter=router