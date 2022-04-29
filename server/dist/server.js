"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const items_1 = __importDefault(require("./routes/items"));
const port = process.env.PORT;
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use("/api/items", items_1.default);
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${port}`);
});
