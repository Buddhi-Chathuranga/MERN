const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongo DB connection Successful");
})

const itemRouter = require("./routes/Items.js");
const categoryRouter = require("./routes/Category");
const SubCategoryRouter = require("./routes/SubCategory");

app.use("/item",itemRouter)
app.use("/category",categoryRouter)
app.use("/subcategory",SubCategoryRouter)

app.listen(PORT, () =>{
    console.log('Server is up and running : '+PORT)
})