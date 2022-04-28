const fs = require("fs");
const uuid = require("uuid");

const logger = (req, res, next) => {
  const { username } = req.body;

  const logDate = new Date();
  const day = logDate.getDate();
  const month = logDate.getMonth() + 1;
  const year = logDate.getFullYear();
  const hours = logDate.getHours();
  const minutes = logDate.getMinutes();
  const loginData =
    `Loggin by ${username} : \t` +
    `${day}/${month}/${year}\t ${hours}:${minutes}` +
    `\t${uuid.v4()}\n`;
  fs.appendFile("./assets/logs.txt", loginData, (err) => {
    if (err) {
      throw err;
    }
  });
  next();
};

module.exports = logger;
