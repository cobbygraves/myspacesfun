const loginUser = require("../controllers/users");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/login", loginUser);

module.exports = userRouter;
