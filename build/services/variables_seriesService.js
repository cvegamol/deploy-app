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
exports.variables_series = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todas las variables_series
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getVariableSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM variables_serie");
        res.json(result); // Devuelve las variables_series como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una variable_series por variableId
 * @param {number} id - Id de la variable_series a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getVariableSeriesByVariableId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM variables_series WHERE variableId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la variable_series por id', status: 500 };
    }
});
/**
 * Función para obtener una variable_series por serieId
 * @param {number} id - Id de la variable_series a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getVariableSeriesBySerieId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM variables_series WHERE serieId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la variable_series por id', status: 500 };
    }
});
exports.variables_series = { getVariableSeries, getVariableSeriesByVariableId, getVariableSeriesBySerieId }; // Exporta los métodos de variables_series
exports.default = exports.variables_series; // Exporta los métodos de variables_series por defecto
