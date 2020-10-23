const express = require("express");
const path = require("path");
const retrive = require("./routes/api/retrive");
const submit = require("./routes/api/submit");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/submit", submit);
app.use("/",retrive);


const port = process.env.PORT || 5000;
app.use(express.static("./"));

mongoose
  .connect("mongodb+srv://rkamra:Rkamra123456@cluster0.eifea.mongodb.net/testingUrl?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.log(err));

