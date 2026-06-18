import { Router } from "express";
import { providerRouter } from "../modules/provider/provider.route";

const router=Router()

router.use("/provider",providerRouter)

export default router;