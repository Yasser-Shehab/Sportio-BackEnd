const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const cors = require("cors");
const connectDb = require("./db/connect");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const categoryRouter = require("./routes/category.routes");
const orderRouter = require("./routes/order.routes");

app.use(helmet());
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
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
