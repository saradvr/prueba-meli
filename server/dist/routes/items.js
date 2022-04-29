"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("../controllers/items.controller");
const router = express_1.Router();
router.route("/").get(items_controller_1.searchItems);
router.route("/:id").get(items_controller_1.getItem);
exports.default = router;
