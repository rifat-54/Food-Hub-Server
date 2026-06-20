import express from "express"
import { providerController } from "./provider.controller"
import auth, { userRole } from "../../middleware/auth"


const router=express.Router()

router.get("/",providerController.getAllProvider)
router.post("/",auth(userRole.PROVIDER),providerController.createProvider)

export const providerRouter=router