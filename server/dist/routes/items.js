"use strict";
exports.__esModule = true;
var express_1 = require("express");
var items_controller_1 = require("../controllers/items.controller");
var router = express_1.Router();
router.route("/").get(items_controller_1.searchItems);
router.route("/:id").get(items_controller_1.getItem);
exports["default"] = router;
