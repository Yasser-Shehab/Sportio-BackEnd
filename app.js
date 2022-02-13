const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./db/connect");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const categoryRouter = require("./routes/category.routes");
const orderRouter = require("./routes/order.routes");

app.use(express.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);

const port = process.env.PORT;
const startService = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Listing On ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};
startService();
