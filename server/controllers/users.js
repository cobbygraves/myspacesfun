const UserModel = require("../models/users.js");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
  const user = req.body;

  let existingUser;
  try {
    existingUser = await UserModel.findOne({
      username: user.username,
    });
  } catch (error) {
    return next(createError(400, error));
  }

  if (existingUser) {
    bcrypt
      .compare(user.password, existingUser.password)
      .then((resp) => {
        if (resp) {
          // generating a token for the varified user
          jwt.sign(
            { id: existingUser.id, username: existingUser.username },
            "C0DESCRIPT",
            { expiresIn: "30m" },
            (err, token) => {
              if (!err) {
                return res.status(200).json({
                  id: existingUser.id,
                  username: existingUser.username,
                  token,
                  verification: true,
                });
              }
            }
          );
        } else {
          return res.json({ message: "wrong password", valid: false });
        }
      })
      .catch((err) => console.log(err));
  } else {
    return res.json({ message: "wrong username", valid: false });
  }
};

module.exports = getUser;
