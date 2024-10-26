"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    host: process.env.MYSQLHOST || "autorack.proxy.rlwy.net",
    database: process.env.MYSQL_DATABASE || "ine",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQL_ROOT_PASSWORD || "STlwtgMmIMhPNCeBtWEjKjqxcPzEwmwb",
    port: Number(process.env.MYSQLPORT) || 28195
};
