const loginUser = require("../controllers/users");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/admin/login", loginUser);

module.exports = userRouter;
