import { Router } from "express";
import { providerRouter } from "../modules/provider/provider.route";
import { categoryRouter } from "../modules/category/category.route";
import { menuRouter } from "../modules/menu/menu.route";


const router=Router()

router.use("/provider",providerRouter)

router.use("/category",categoryRouter)

router.use("/menu",menuRouter)

export default router;