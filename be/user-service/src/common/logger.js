const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "logs/user-service-error.log" }),
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

module.exports = logger;
