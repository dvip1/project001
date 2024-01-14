const express = require("express");
const logger = require("morgan");
const connect = require("./controllers/connect.js");

const app = express();

app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/post", require("./routes/postsRoute"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})
