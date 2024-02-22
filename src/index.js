const express = require("express");
const bodyParser = require("body-parser");
const  dotenv = require("dotenv");

dotenv.config();
const config = require("./config");

const app = express();
app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Running on port: ${config.port}`);
});