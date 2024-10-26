import mysql from "mysql2/promise"; // Importa mysql2 con soporte para promesas
import config from "../routes/config";

// Crea la conexión usando mysql2
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
});

const getConnection = () => {
    return connection;
};

export default getConnection;
