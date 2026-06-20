import { Router } from "express";
import { providerRouter } from "../modules/provider/provider.route";
import { categoryRouter } from "../modules/category/category.route";
import { menuRouter } from "../modules/menu/menu.route";
import { authRouter } from "../modules/auth/auth.route";
import { orderRouter } from "../modules/order/order.route";


const router=Router()

router.use("/provider",providerRouter)

router.use("/category",categoryRouter)

router.use("/menu",menuRouter)

router.use("/user",authRouter)

router.use("/orders",orderRouter)

export default router;