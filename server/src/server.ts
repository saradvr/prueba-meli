import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import itemsRouter from "./routes/items";

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/items", itemsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running at http://localhost:${port}`);
});
