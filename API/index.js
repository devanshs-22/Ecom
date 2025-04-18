const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dbconnect = require("./config/database");
dotenv.config();
dbconnect();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoutes");
const orderRoute = require("./routes/orderRoutes");

app.listen(process.env.PORT, () => {    
    console.log(`Server is running on port ${process.env.PORT}`);
})


app.use("/api/users" ,userRoute);
app.use("/api/auths" ,authRoute);
app.use("/api/products" ,productRoute);
app.use("/api/carts" ,cartRoute);
app.use("/api/orders" ,orderRoute);

