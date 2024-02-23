const express = require("express");

module.exports = (app) => {
    const router = express.Router();
    app.use("/user", router);

    router.post("/", creatUser); 

};