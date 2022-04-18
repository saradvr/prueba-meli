"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var items_1 = __importDefault(require("./routes/items"));
var port = process.env.PORT;
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
app.use(morgan_1["default"]("dev"));
app.use("/api/items", items_1["default"]);
app.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log("App running at http://localhost:" + port);
});
