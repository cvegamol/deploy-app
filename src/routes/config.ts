import { config } from "dotenv";

config();

export default {
    host: process.env.DB_HOST || "mysql-ti8n.railway.internal",
    database: process.env.DB_NAME || "ine",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "STlwtgMmIMhPNCeBtWEjKjqxcPzEwmwb",
    port:Number(process.env.DB_PORT) || 3307
    
};