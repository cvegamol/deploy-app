"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operacionesMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
const axios_1 = __importDefault(require("axios"));
/**
 * Función para obtener todas las operaciones
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getOperations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM operaciones");
        res.json(result); // Devuelve las operaciones como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una operación por id
 * @param {number} id - Id de la operación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operaciones WHERE id = ' + id);
        if (Array.isArray(result) && result.every(() => false)) {
            // URL de la API del INE para obtener la serie por COD
            const apiUrl = `https://servicios.ine.es/wstempus/js/ES/OPERACION/${id}`;
            // Realizar llamada GET a la API del INE
            const response = yield axios_1.default.get(apiUrl);
            const dataFromAPI = response.data;
            console.log("Datos de la API:", dataFromAPI);
            return dataFromAPI;
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw { message: 'Error al obtener la operación por id', status: 500 };
    }
});
/**
 * Función para obtener una operación por Cod_IOE
 * @param {number} id - Id de la operación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationByCodIOE = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operaciones WHERE Cod_IOE = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operación por id', status: 500 };
    }
});
/**
 * Función para obtener una operación por Codigo
 * @param {number} id - Id de la operación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationByCode = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operaciones WHERE Codigo = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operación por id', status: 500 };
    }
});
exports.operacionesMethods = { getOperations, getOperationById, getOperationByCodIOE, getOperationByCode }; // Exporta los métodos de operaciones
exports.default = exports.operacionesMethods; // Exporta los métodos de operaciones por defecto
