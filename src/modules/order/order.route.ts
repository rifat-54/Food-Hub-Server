import { Router } from "express";
import auth, { userRole } from "../../middleware/auth.js";
import { orderController } from "./order.controller.js";

const router=Router()

router.post("/",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.createOrder)
router.get("/",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.getUserOrders)
router.get("/all",auth(userRole.ADMIN),orderController.getAllOrders)
router.get("/provider",auth(userRole.PROVIDER),orderController.getProviderOrders)
router.get("/:id",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.getOrderDetails)
router.patch("/:id",auth(userRole.PROVIDER,userRole.USER),orderController.updateOrderStatus)

export const orderRouter=router