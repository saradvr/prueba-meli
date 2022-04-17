require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const itemsRouter = require('./routes/items');

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/items', itemsRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
