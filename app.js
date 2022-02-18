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
const allowedOrigins = [
  "http://localhost:4200",
  "https://sportio-backend.herokuapp.com",
];
app.use(
  cors({
    credentials: true,
    origin: function (origin, next) {
      if (!origin) return next(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return next(new Error("The CORS policy does not allow access"), false);
      }
      return next(null, true);
    },
  })
);
// app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use(express.json({ limit: "1000000kb" }));
app.use(express.urlencoded({ limit: "1000000kb", extended: false }));
app.use(express.static("public"));
// app.use('/images', express.static('images'));
app.use(fileUpload());
app.use(cookieParser("secret"));
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
