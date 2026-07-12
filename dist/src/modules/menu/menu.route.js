import express from "express";
import auth, { userRole } from "../../middleware/auth.js";
import { menuController } from "./menu.controller.js";
const router = express.Router();
router.get("/", menuController.getAllMenu);
router.get("/:id", menuController.getMenuById);
router.patch("/:id", auth(userRole.PROVIDER), menuController.updateMenu);
router.delete("/:id", auth(userRole.PROVIDER), menuController.deleteMenu);
router.post("/", auth(userRole.PROVIDER), menuController.createMenu);
export const menuRouter = router;
//# sourceMappingURL=menu.route.js.map