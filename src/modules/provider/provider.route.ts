import express from "express"
import { providerController } from "./provider.controller"
import auth, { userRole } from "../../middleware/auth"


const router=express.Router()

router.post("/create",auth(userRole.PROVIDER),providerController.createProvider)

export const providerRouter=router