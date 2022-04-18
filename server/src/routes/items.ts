import { Router } from "express";
import { searchItems, getItem } from "../controllers/items.controller";

const router = Router();

router.route("/").get(searchItems);
router.route("/:id").get(getItem);

export default router;
