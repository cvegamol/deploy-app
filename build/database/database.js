"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const config_1 = __importDefault(require("../routes/config"));
const connection = promise_mysql_1.default.createConnection({
    host: config_1.default.host,
    database: config_1.default.database,
    user: config_1.default.user,
    password: config_1.default.password,
    port: config_1.default.port
});
const getConnection = () => {
    return connection;
};
exports.default = getConnection;
