import { Router } from "express";
import auth, { userRole } from "../../middleware/auth";
import { orderController } from "./order.controller";

const router=Router()

router.post("/",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.createOrder)
router.get("/",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.getUserOrders)
router.get("/:id",auth(userRole.USER,userRole.ADMIN,userRole.PROVIDER),orderController.getOrderDetails)
router.patch("/:id",auth(userRole.PROVIDER,userRole.USER),orderController.updateOrderStatus)

export const orderRouter=router