import express from "express"
import { providerController } from "./provider.controller"
import auth from "../../middleware/auth"


const router=express.Router()

router.post("/menu",auth(),providerController.createMenu)

export const providerRouter=router